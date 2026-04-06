export declare class CreateTaskDto {
    title: string;
    description?: string;
    priority: string;
    dueDate: string;
    assignedTo?: string;
    sprintId: string;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
    dueDate?: string;
    assignedTo?: string;
}
export declare class CreateCommentDto {
    content: string;
}
export declare class TaskCommentDto {
    id: string;
    taskId: string;
    userId: string;
    userName: string;
    userRole: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}
export declare class TaskActivityDto {
    id: string;
    taskId: string;
    userId?: string;
    userName?: string;
    action: string;
    fieldName?: string;
    oldValue?: string;
    newValue?: string;
    description: string;
    createdAt: string;
}
