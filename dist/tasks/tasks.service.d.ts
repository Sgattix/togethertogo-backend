import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { NotificationsService } from '../notifications/notifications.service';
import { CreateTaskDto, UpdateTaskDto, CreateCommentDto } from './dto/task.dto';
export declare class TasksService {
    private prisma;
    private mailerService;
    private notificationsService;
    constructor(prisma: PrismaService, mailerService: MailerService, notificationsService: NotificationsService);
    createTask(userId: string, data: CreateTaskDto): Promise<any>;
    updateTask(userId: string, taskId: string, data: UpdateTaskDto): Promise<any>;
    deleteTask(userId: string, taskId: string): Promise<{
        message: string;
    }>;
    getTaskById(taskId: string): Promise<any>;
    addComment(userId: string, taskId: string, data: CreateCommentDto): Promise<any>;
    getComments(taskId: string): Promise<any>;
    getActivities(taskId: string): Promise<any>;
    private logActivity;
}
