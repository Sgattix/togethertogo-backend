export declare class CreateNotificationDto {
    userId: string;
    type: string;
    title: string;
    message: string;
    relatedTaskId?: string;
    relatedSprintId?: string;
    metadata?: Record<string, any>;
}
