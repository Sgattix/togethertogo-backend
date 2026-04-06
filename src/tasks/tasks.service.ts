import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { NotificationsService } from '../notifications/notifications.service';
import { CreateTaskDto, UpdateTaskDto, CreateCommentDto } from './dto/task.dto';
import { throwNotFound } from '../common/utils/error.utils';
import { sendEmailSafely } from '../common/utils/email.utils';

@Injectable()
export class TasksService {
  constructor(
    private prisma: PrismaService,
    private mailerService: MailerService,
    private notificationsService: NotificationsService,
  ) {}

  async createTask(userId: string, data: CreateTaskDto) {
    // Verify user is coordinator/admin and sprint exists
    const sprint = await this.prisma.sprint.findUnique({
      where: { id: data.sprintId },
      include: { coordinator: true },
    });

    if (!sprint) {
      throwNotFound('Sprint', data.sprintId);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    // Only coordinator of sprint or admin can create tasks
    if (sprint.coordinatorId !== userId && user.role !== 'ADMIN') {
      throw new Error('Only sprint coordinator or admin can create tasks');
    }

    const task = await this.prisma.task.create({
      data: {
        title: data.title,
        description: data.description,
        priority: data.priority,
        dueDate: new Date(data.dueDate),
        assignedTo: data.assignedTo,
        sprintId: data.sprintId,
      },
      include: {
        sprint: true,
      },
    });

    // Log activity
    await this.logActivity({
      taskId: task.id,
      userId,
      userName: user.name,
      action: 'created',
      description: `Task created by ${user.name}`,
    });

    // If task is assigned, log assignment activity and send email
    if (data.assignedTo) {
      const assignedVolunteer = await this.prisma.volunteer.findUnique({
        where: { id: data.assignedTo },
        include: { user: true },
      });

      if (assignedVolunteer) {
        await this.logActivity({
          taskId: task.id,
          userId,
          userName: user.name,
          action: 'assigned',
          fieldName: 'assignedTo',
          newValue: assignedVolunteer.name,
          description: `Task assigned to ${assignedVolunteer.name}`,
        });

        // Send assignment email safely
        await sendEmailSafely(
          () =>
            this.mailerService.sendTaskAssignmentEmail(
              assignedVolunteer.email,
              assignedVolunteer.name,
              task.title,
              task.sprint.title,
              task.dueDate,
            ),
          'task-assignment',
        );

        // Create notification for the assigned volunteer if they have a user account
        if (assignedVolunteer.user && assignedVolunteer.user.id) {
          await this.notificationsService.create({
            userId: assignedVolunteer.user.id,
            type: 'task_assigned',
            title: `New Task Assigned: ${task.title}`,
            message: `You have been assigned a new task "${task.title}" by ${user.name}.`,
            relatedTaskId: task.id,
            relatedSprintId: data.sprintId,
            metadata: {
              assignedByName: user.name,
            },
          });
        }
      }
    }

    return task;
  }

  async updateTask(userId: string, taskId: string, data: UpdateTaskDto) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      include: { sprint: { include: { coordinator: true } } },
    });

    if (!task) {
      throwNotFound('Task', taskId);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    // Check permissions
    const isCoordinator = task.sprint.coordinatorId === userId;
    const isAdmin = user.role === 'ADMIN';
    const isAssignee = task.assignedTo === userId;

    if (!isCoordinator && !isAdmin && !isAssignee) {
      throw new Error('You do not have permission to update this task');
    }

    // Track changes for activity log
    const changes: Array<{
      field: string;
      oldValue: string;
      newValue: string;
    }> = [];

    if (data.title && data.title !== task.title) {
      changes.push({
        field: 'title',
        oldValue: task.title,
        newValue: data.title,
      });
    }

    if (data.status && data.status !== task.status) {
      changes.push({
        field: 'status',
        oldValue: task.status,
        newValue: data.status,
      });
    }

    if (data.priority && data.priority !== task.priority) {
      changes.push({
        field: 'priority',
        oldValue: task.priority,
        newValue: data.priority,
      });
    }

    if (data.assignedTo && data.assignedTo !== task.assignedTo) {
      const oldAssignee = task.assignedTo
        ? await this.prisma.volunteer.findUnique({
            where: { id: task.assignedTo },
          })
        : null;
      const newAssignee = await this.prisma.volunteer.findUnique({
        where: { id: data.assignedTo },
        include: { user: true },
      });

      changes.push({
        field: 'assignedTo',
        oldValue: oldAssignee?.name || 'Unassigned',
        newValue: newAssignee?.name || 'Unassigned',
      });

      // Send assignment email to new volunteer
      if (newAssignee) {
        await sendEmailSafely(
          () =>
            this.mailerService.sendTaskAssignmentEmail(
              newAssignee.email,
              newAssignee.name,
              task.title,
              task.sprint.title,
              task.dueDate,
            ),
          'task-assignment',
        );

        // Create notification for the newly assigned volunteer if they have a user account
        if (newAssignee.user && newAssignee.user.id) {
          await this.notificationsService.create({
            userId: newAssignee.user.id,
            type: 'task_assigned',
            title: `New Task Assigned: ${task.title}`,
            message: `You have been assigned a new task "${task.title}" by ${user.name}.`,
            relatedTaskId: taskId,
            relatedSprintId: task.sprintId,
            metadata: {
              assignedByName: user.name,
            },
          });
        }
      }
    }

    const updatedTask = await this.prisma.task.update({
      where: { id: taskId },
      data: {
        ...(data.title && { title: data.title }),
        ...(data.description !== undefined && {
          description: data.description,
        }),
        ...(data.status && { status: data.status }),
        ...(data.priority && { priority: data.priority }),
        ...(data.dueDate && { dueDate: new Date(data.dueDate) }),
        ...(data.assignedTo !== undefined && { assignedTo: data.assignedTo }),
      },
      include: {
        sprint: true,
      },
    });

    // Log all changes
    for (const change of changes) {
      await this.logActivity({
        taskId,
        userId,
        userName: user.name,
        action: 'updated',
        fieldName: change.field,
        oldValue: change.oldValue,
        newValue: change.newValue,
        description: `${user.name} changed ${change.field} from "${change.oldValue}" to "${change.newValue}"`,
      });

      // Create notifications for certain changes
      if (change.field === 'status' && task.assignedTo) {
        // Notify the assignee when status changes
        const assignedVolunteer = await this.prisma.volunteer.findUnique({
          where: { id: task.assignedTo },
          include: { user: true },
        });

        if (
          assignedVolunteer &&
          assignedVolunteer.user &&
          assignedVolunteer.user.id
        ) {
          await this.notificationsService.create({
            userId: assignedVolunteer.user.id,
            type: 'task_status_changed',
            title: `Task Status Changed: ${updatedTask.title}`,
            message: `Task "${updatedTask.title}" status has been changed to ${change.newValue} by ${user.name}.`,
            relatedTaskId: taskId,
            relatedSprintId: task.sprintId,
            metadata: {
              newStatus: change.newValue,
              changedByName: user.name,
            },
          });
        }
      }
    }

    return updatedTask;
  }

  async deleteTask(userId: string, taskId: string) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      include: { sprint: true },
    });

    if (!task) {
      throwNotFound('Task', taskId);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    const isCoordinator = task.sprint.coordinatorId === userId;
    const isAdmin = user.role === 'ADMIN';

    if (!isCoordinator && !isAdmin) {
      throw new Error('Only sprint coordinator or admin can delete tasks');
    }

    await this.prisma.task.delete({
      where: { id: taskId },
    });

    return { message: 'Task deleted successfully' };
  }

  async getTaskById(taskId: string) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      include: {
        sprint: {
          include: {
            coordinator: {
              select: {
                id: true,
                name: true,
                email: true,
              },
            },
          },
        },
        comments: {
          orderBy: { createdAt: 'desc' },
        },
        activities: {
          orderBy: { createdAt: 'desc' },
          take: 50,
        },
      },
    });

    if (!task) {
      throwNotFound('Task', taskId);
    }

    return task;
  }

  async addComment(userId: string, taskId: string, data: CreateCommentDto) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
      include: { sprint: true },
    });

    if (!task) {
      throwNotFound('Task', taskId);
    }

    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    const comment = await this.prisma.taskComment.create({
      data: {
        taskId,
        userId,
        userName: user.name,
        userRole: user.role,
        content: data.content,
      },
    });

    // Log activity
    await this.logActivity({
      taskId,
      userId,
      userName: user.name,
      action: 'commented',
      description: `${user.name} added a comment`,
    });

    // If the task is assigned to someone, notify them of the comment
    if (task.assignedTo && task.assignedTo !== userId) {
      const assignedVolunteer = await this.prisma.volunteer.findUnique({
        where: { id: task.assignedTo },
        include: { user: true },
      });

      if (
        assignedVolunteer &&
        assignedVolunteer.user &&
        assignedVolunteer.user.id
      ) {
        await this.notificationsService.create({
          userId: assignedVolunteer.user.id,
          type: 'comment',
          title: `New Comment on ${task.title}`,
          message: `${user.name} commented on the task "${task.title}"`,
          relatedTaskId: taskId,
          relatedSprintId: task.sprintId,
          metadata: {
            commenterName: user.name,
            commentPreview: data.content.substring(0, 100),
          },
        });
      }
    }

    return comment;
  }

  async getComments(taskId: string) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throwNotFound('Task', taskId);
    }

    return this.prisma.taskComment.findMany({
      where: { taskId },
      orderBy: { createdAt: 'desc' },
    });
  }

  async getActivities(taskId: string) {
    const task = await this.prisma.task.findUnique({
      where: { id: taskId },
    });

    if (!task) {
      throwNotFound('Task', taskId);
    }

    return this.prisma.taskActivity.findMany({
      where: { taskId },
      orderBy: { createdAt: 'desc' },
      take: 100,
    });
  }

  private async logActivity(data: {
    taskId: string;
    userId?: string;
    userName?: string;
    action: string;
    fieldName?: string;
    oldValue?: string;
    newValue?: string;
    description: string;
  }) {
    await this.prisma.taskActivity.create({
      data: {
        taskId: data.taskId,
        userId: data.userId,
        userName: data.userName,
        action: data.action,
        fieldName: data.fieldName,
        oldValue: data.oldValue,
        newValue: data.newValue,
        description: data.description,
      },
    });
  }
}
