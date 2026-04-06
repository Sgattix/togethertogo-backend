import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { ApproveApprovalDto, ApprovalAction } from './dto/approval.dto';
import { throwNotFound, throwBadRequest } from '../common/utils/error.utils';
import { sendEmailSafely } from '../common/utils/email.utils';
import {
  COORDINATOR_SELECT,
  TASK_DETAILED_SELECT,
} from '../common/constants/prisma-selects';

@Injectable()
export class ApprovalsService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
  ) {}

  async findPendingApprovals() {
    return this.prisma.approvalHistory.findMany({
      where: { status: 'pending' },
      include: {
        sprint: {
          include: {
            coordinator: { select: COORDINATOR_SELECT },
          },
        },
        requestedByUser: { select: COORDINATOR_SELECT },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findApprovalsByUser(userId: string) {
    return this.prisma.approvalHistory.findMany({
      where: { requestedBy: userId },
      include: {
        sprint: { select: { id: true, title: true } },
        requestedByUser: { select: { id: true, name: true } },
      },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const approval = await this.prisma.approvalHistory.findUnique({
      where: { id },
      include: {
        sprint: {
          include: {
            coordinator: { select: COORDINATOR_SELECT },
            tasks: {
              select: TASK_DETAILED_SELECT,
            },
          },
        },
        requestedByUser: { select: COORDINATOR_SELECT },
      },
    });

    if (!approval) {
      throwNotFound('Approval request', id);
    }

    return approval;
  }

  async approveApproval(id: string, adminId: string, dto: ApproveApprovalDto) {
    const approval = await this.findOne(id);

    if (approval.status !== 'pending') {
      throwBadRequest(
        `Cannot ${dto.action} an approval that is already ${approval.status}`,
      );
    }

    if (dto.action === ApprovalAction.APPROVE) {
      return this.handleApproveAction(approval, adminId, dto.adminNotes);
    } else if (dto.action === ApprovalAction.REJECT) {
      return this.handleRejectAction(approval, adminId, dto.adminNotes);
    }

    throwBadRequest('Invalid approval action');
  }

  private async handleApproveAction(
    approval: any,
    adminId: string,
    adminNotes?: string,
  ) {
    const updatedApproval = await this.prisma.approvalHistory.update({
      where: { id: approval.id },
      data: {
        status: 'approved',
        approvedAt: new Date(),
        notes: adminNotes || approval.notes,
      },
      include: {
        sprint: {
          include: {
            coordinator: { select: COORDINATOR_SELECT },
          },
        },
        requestedByUser: { select: COORDINATOR_SELECT },
      },
    });

    await this.prisma.sprint.update({
      where: { id: approval.sprintId },
      data: { platformAuthorizationStatus: 'approved' },
    });

    await sendEmailSafely(
      () =>
        this.mailerService.sendApprovalResponseEmail(
          approval.sprint.coordinator.email,
          approval.sprint.title,
          true,
          adminNotes,
        ),
      'approval-response',
    );

    return updatedApproval;
  }

  private async handleRejectAction(
    approval: any,
    adminId: string,
    adminNotes?: string,
  ) {
    const updatedApproval = await this.prisma.approvalHistory.update({
      where: { id: approval.id },
      data: {
        status: 'rejected',
        approvedAt: new Date(),
        notes: adminNotes || approval.notes,
      },
      include: {
        sprint: {
          include: {
            coordinator: { select: COORDINATOR_SELECT },
          },
        },
        requestedByUser: { select: COORDINATOR_SELECT },
      },
    });

    await this.prisma.sprint.update({
      where: { id: approval.sprintId },
      data: { platformAuthorizationStatus: 'rejected' },
    });

    await sendEmailSafely(
      () =>
        this.mailerService.sendApprovalResponseEmail(
          approval.sprint.coordinator.email,
          approval.sprint.title,
          false,
          adminNotes,
        ),
      'approval-response',
    );

    return updatedApproval;
  }
}
