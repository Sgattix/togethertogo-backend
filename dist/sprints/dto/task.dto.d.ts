export declare class CreateTaskDto {
    title: string;
    description?: string;
    priority?: string;
    dueDate: Date;
    sprintId: string;
}
export declare class UpdateTaskDto {
    title?: string;
    description?: string;
    status?: string;
    priority?: string;
    dueDate?: Date;
    assignedTo?: string;
}
