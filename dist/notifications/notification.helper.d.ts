import { NotificationsService } from '../notifications/notifications.service';
export declare class NotificationHelper {
    private notificationsService;
    constructor(notificationsService: NotificationsService);
    notifyTaskAssigned(userId: string, taskTitle: string, taskId: string, sprintId: string, assignedByName: string): Promise<any>;
    notifyTaskUpdated(userId: string, taskTitle: string, taskId: string, sprintId: string, updatedByName: string, changes: string): Promise<any>;
    notifyTaskComment(userId: string, taskTitle: string, taskId: string, commenterName: string, commentContent: string): Promise<any>;
    notifyApprovalRequest(userId: string, sprintTitle: string, sprintId: string, requestedByName: string): Promise<any>;
    notifyTaskStatusChanged(userId: string, taskTitle: string, taskId: string, newStatus: string, changedByName: string): Promise<any>;
}
