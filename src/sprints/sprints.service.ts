import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import {
  CreateSprintDto,
  UpdateSprintDto,
  FilterSprintsDto,
  RequestApprovalDto,
} from './dto/sprint.dto';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import {
  SPRINT_INCLUDE,
  SPRINT_DETAIL_INCLUDE,
  COORDINATOR_SELECT,
} from '../common/constants/prisma-selects';
import { throwNotFound, throwBadRequest } from '../common/utils/error.utils';
import {
  assertCoordinatorOrAdmin,
  assertOwnerOrAdmin,
  AuthUser,
} from '../common/utils/auth.utils';
import {
  normalizeLocation,
  isLocationValid,
} from '../common/utils/location.utils';
import { sprintFilters } from './filters/sprints-filters.builder';

@Injectable()
export class SprintsService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async create(data: CreateSprintDto, coordinatorId: string) {
    if (!isLocationValid(data.location)) {
      throwBadRequest('Location is required');
    }

    const location = normalizeLocation(data.location);

    return this.prisma.sprint.create({
      data: {
        title: data.title,
        description: data.description,
        location,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        coordinatorId,
        progressStatus: 'planned',
        governmentAuthorizationStatus: 'reported',
        platformAuthorizationStatus: 'draft',
      },
    });
  }

  async findAll(filters?: FilterSprintsDto) {
    const where = sprintFilters().fromDto(filters).build();

    return this.prisma.sprint.findMany({
      where,
      include: SPRINT_INCLUDE,
    });
  }

  async findOne(id: string) {
    const sprint = await this.prisma.sprint.findUnique({
      where: { id },
      include: SPRINT_DETAIL_INCLUDE,
    });

    if (!sprint) {
      throwNotFound('Sprint', id);
    }

    return sprint;
  }

  async update(id: string, data: UpdateSprintDto, user: AuthUser) {
    const sprint = await this.findOne(id);

    assertOwnerOrAdmin(sprint.coordinatorId, user);

    const updateData: any = {};

    if (data.title !== undefined) updateData.title = data.title;
    if (data.description !== undefined)
      updateData.description = data.description;
    if (data.progressStatus !== undefined)
      updateData.progressStatus = data.progressStatus;
    if (data.governmentAuthorizationStatus !== undefined)
      updateData.governmentAuthorizationStatus =
        data.governmentAuthorizationStatus;
    if (data.platformAuthorizationStatus !== undefined)
      updateData.platformAuthorizationStatus = data.platformAuthorizationStatus;

    if (data.location !== undefined) {
      if (!isLocationValid(data.location)) {
        throwBadRequest('Location is required');
      }
      updateData.location = normalizeLocation(data.location);
    }

    return this.prisma.sprint.update({
      where: { id },
      data: updateData,
      include: { tasks: true },
    });
  }

  async delete(id: string, user: AuthUser) {
    const sprint = await this.findOne(id);
    assertOwnerOrAdmin(sprint.coordinatorId, user);

    return this.prisma.sprint.delete({ where: { id } });
  }

  async createTask(sprintId: string, data: CreateTaskDto, user: AuthUser) {
    const sprint = await this.findOne(sprintId);
    assertCoordinatorOrAdmin(user, sprint.coordinatorId);

    return this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        priority: data.priority || 'medium',
        dueDate: new Date(data.dueDate),
        sprintId,
      },
    });
  }

  async updateTask(
    sprintId: string,
    taskId: string,
    data: UpdateTaskDto,
    user: AuthUser,
  ) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task || task.sprintId !== sprintId) {
      throwNotFound('Task', taskId);
    }

    const sprint = await this.findOne(sprintId);
    assertCoordinatorOrAdmin(user, sprint.coordinatorId);

    return this.prisma.task.update({
      where: { id: taskId },
      data,
    });
  }

  async deleteTask(sprintId: string, taskId: string, user: AuthUser) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task || task.sprintId !== sprintId) {
      throwNotFound('Task', taskId);
    }

    const sprint = await this.findOne(sprintId);
    assertCoordinatorOrAdmin(user, sprint.coordinatorId);

    return this.prisma.task.delete({ where: { id: taskId } });
  }

  async requestApproval(
    sprintId: string,
    user: AuthUser,
    data: RequestApprovalDto,
  ) {
    const sprint = await this.findOne(sprintId);
    assertCoordinatorOrAdmin(user, sprint.coordinatorId);

    if (sprint.governmentAuthorizationStatus === 'under-review') {
      throwBadRequest('Approval already requested');
    }

    const updatedSprint = await this.prisma.sprint.update({
      where: { id: sprintId },
      data: {
        governmentAuthorizationStatus: 'under-review',
        platformAuthorizationStatus: 'submitted',
      },
      include: SPRINT_INCLUDE,
    });

    const approval = await this.prisma.approvalHistory.create({
      data: {
        sprintId,
        requestedBy: user.id,
        notes: data.notes,
        status: 'pending',
      },
    });

    this.sendApprovalRequestEmails(sprint);

    return {
      success: true,
      sprint: updatedSprint,
      approval,
    };
  }

  async approveRequest(
    sprintId: string,
    action: 'approve' | 'reject',
    user: AuthUser,
  ) {
    if (user.role !== 'ADMIN') {
      throwBadRequest('Only admins can approve requests');
    }

    const approval = await this.prisma.approvalHistory.findFirst({
      where: { sprintId, status: 'pending' },
    });

    if (!approval) {
      throwNotFound('Approval', sprintId);
    }

    const approvalStatus = action === 'approve' ? 'approved' : 'rejected';
    const sprintStatus = action === 'approve' ? 'authorized' : 'reported';

    const sprint = await this.findOne(sprintId);

    await this.prisma.approvalHistory.update({
      where: { id: approval.id },
      data: {
        status: approvalStatus,
        approvedAt: new Date(),
      },
    });

    const updated = await this.prisma.sprint.update({
      where: { id: sprintId },
      data: { governmentAuthorizationStatus: sprintStatus },
      include: SPRINT_INCLUDE,
    });

    this.sendApprovalResponseEmail(
      sprint.coordinator.email,
      sprint.title,
      action === 'approve',
      approval.notes || undefined,
    );

    return updated;
  }

  private async sendApprovalRequestEmails(sprint: any): Promise<void> {
    try {
      const admins = await this.prisma.user.findMany({
        where: { role: 'ADMIN' },
        select: { email: true },
      });

      const coordinatorName = sprint.coordinator.name;

      for (const admin of admins) {
        try {
          await this.mailerService.sendApprovalRequestEmail(
            admin.email,
            sprint.title,
            coordinatorName,
            sprint.id,
          );
        } catch (error) {
          console.error(
            `Failed to send approval request email to ${admin.email}:`,
            error,
          );
        }
      }
    } catch (error) {
      console.error('Failed to send approval request emails:', error);
    }
  }

  private async sendApprovalResponseEmail(
    email: string,
    sprintTitle: string,
    approved: boolean,
    notes?: string,
  ): Promise<void> {
    try {
      await this.mailerService.sendApprovalResponseEmail(
        email,
        sprintTitle,
        approved,
        notes,
      );
    } catch (error) {
      console.error(
        `Failed to send approval response email to ${email}:`,
        error,
      );
    }
  }
}
