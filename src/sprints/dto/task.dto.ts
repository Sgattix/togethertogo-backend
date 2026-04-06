export class CreateTaskDto {
  title: string;
  description?: string;
  priority?: string;
  dueDate: Date;
  sprintId: string;
}

export class UpdateTaskDto {
  title?: string;
  description?: string;
  status?: string;
  priority?: string;
  dueDate?: Date;
  assignedTo?: string;
}
