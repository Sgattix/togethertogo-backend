export class CreateNotificationDto {
  userId: string;
  type: string; // "task_assigned", "task_updated", "approval_request", "comment", etc.
  title: string;
  message: string;
  relatedTaskId?: string;
  relatedSprintId?: string;
  metadata?: Record<string, any>;
}
