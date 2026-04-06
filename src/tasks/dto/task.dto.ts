import { IsString, IsOptional, IsDateString, IsEnum } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsEnum(['low', 'medium', 'high'])
  priority: string;

  @IsDateString()
  dueDate: string;

  @IsOptional()
  @IsString()
  assignedTo?: string;

  @IsString()
  sprintId: string;
}

export class UpdateTaskDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsEnum(['pending', 'in_progress', 'completed', 'blocked'])
  status?: string;

  @IsOptional()
  @IsEnum(['low', 'medium', 'high'])
  priority?: string;

  @IsOptional()
  @IsDateString()
  dueDate?: string;

  @IsOptional()
  @IsString()
  assignedTo?: string;
}

export class CreateCommentDto {
  @IsString()
  content: string;
}

export class TaskCommentDto {
  id: string;
  taskId: string;
  userId: string;
  userName: string;
  userRole: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export class TaskActivityDto {
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
