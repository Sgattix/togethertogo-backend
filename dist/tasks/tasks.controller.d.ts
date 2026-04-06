import { TasksService } from './tasks.service';
import { AuthService } from '../auth/auth.service';
import { CreateTaskDto, UpdateTaskDto, CreateCommentDto } from './dto/task.dto';
export declare class TasksController {
    private tasksService;
    private authService;
    constructor(tasksService: TasksService, authService: AuthService);
    private getUserFromAuth;
    createTask(authHeader: string, createTaskDto: CreateTaskDto): Promise<any>;
    updateTask(authHeader: string, taskId: string, updateTaskDto: UpdateTaskDto): Promise<any>;
    deleteTask(authHeader: string, taskId: string): Promise<{
        message: string;
    }>;
    getTask(taskId: string): Promise<any>;
    addComment(authHeader: string, taskId: string, createCommentDto: CreateCommentDto): Promise<any>;
    getComments(taskId: string): Promise<any>;
    getActivities(taskId: string): Promise<any>;
}
