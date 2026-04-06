import { NotificationsService } from '../notifications/notifications.service';

export class NotificationHelper {
  constructor(private notificationsService: NotificationsService) {}

  async notifyTaskAssigned(
    userId: string,
    taskTitle: string,
    taskId: string,
    sprintId: string,
    assignedByName: string,
  ) {
    return this.notificationsService.create({
      userId,
      type: 'task_assigned',
      title: `New Task Assigned: ${taskTitle}`,
      message: `You have been assigned a new task "${taskTitle}" by ${assignedByName}.`,
      relatedTaskId: taskId,
      relatedSprintId: sprintId,
      metadata: {
        assignedByName,
      },
    });
  }

  async notifyTaskUpdated(
    userId: string,
    taskTitle: string,
    taskId: string,
    sprintId: string,
    updatedByName: string,
    changes: string,
  ) {
    return this.notificationsService.create({
      userId,
      type: 'task_updated',
      title: `Task Updated: ${taskTitle}`,
      message: `Task "${taskTitle}" has been updated: ${changes}`,
      relatedTaskId: taskId,
      relatedSprintId: sprintId,
      metadata: {
        updatedByName,
        changes,
      },
    });
  }

  async notifyTaskComment(
    userId: string,
    taskTitle: string,
    taskId: string,
    commenterName: string,
    commentContent: string,
  ) {
    return this.notificationsService.create({
      userId,
      type: 'comment',
      title: `New Comment on ${taskTitle}`,
      message: `${commenterName} commented: "${commentContent.substring(0, 100)}..."`,
      relatedTaskId: taskId,
      metadata: {
        commenterName,
      },
    });
  }

  async notifyApprovalRequest(
    userId: string,
    sprintTitle: string,
    sprintId: string,
    requestedByName: string,
  ) {
    return this.notificationsService.create({
      userId,
      type: 'approval_request',
      title: `Approval Request: ${sprintTitle}`,
      message: `${requestedByName} has requested approval for sprint "${sprintTitle}".`,
      relatedSprintId: sprintId,
      metadata: {
        requestedByName,
      },
    });
  }

  async notifyTaskStatusChanged(
    userId: string,
    taskTitle: string,
    taskId: string,
    newStatus: string,
    changedByName: string,
  ) {
    return this.notificationsService.create({
      userId,
      type: 'task_status_changed',
      title: `Task Status Changed: ${taskTitle}`,
      message: `Task "${taskTitle}" status has been changed to ${newStatus} by ${changedByName}.`,
      relatedTaskId: taskId,
      metadata: {
        newStatus,
        changedByName,
      },
    });
  }
}
