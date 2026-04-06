"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotificationHelper = void 0;
class NotificationHelper {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    async notifyTaskAssigned(userId, taskTitle, taskId, sprintId, assignedByName) {
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
    async notifyTaskUpdated(userId, taskTitle, taskId, sprintId, updatedByName, changes) {
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
    async notifyTaskComment(userId, taskTitle, taskId, commenterName, commentContent) {
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
    async notifyApprovalRequest(userId, sprintTitle, sprintId, requestedByName) {
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
    async notifyTaskStatusChanged(userId, taskTitle, taskId, newStatus, changedByName) {
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
exports.NotificationHelper = NotificationHelper;
//# sourceMappingURL=notification.helper.js.map