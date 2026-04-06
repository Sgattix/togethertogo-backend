import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { CreateSprintDto, UpdateSprintDto, FilterSprintsDto, RequestApprovalDto } from './dto/sprint.dto';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { AuthUser } from '../common/utils/auth.utils';
export declare class SprintsService {
    private prisma;
    private mailerService;
    constructor(prisma: PrismaService, mailerService: MailerService);
    create(data: CreateSprintDto, coordinatorId: string): Promise<any>;
    findAll(filters?: FilterSprintsDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, data: UpdateSprintDto, user: AuthUser): Promise<any>;
    delete(id: string, user: AuthUser): Promise<any>;
    createTask(sprintId: string, data: CreateTaskDto, user: AuthUser): Promise<any>;
    updateTask(sprintId: string, taskId: string, data: UpdateTaskDto, user: AuthUser): Promise<any>;
    deleteTask(sprintId: string, taskId: string, user: AuthUser): Promise<any>;
    requestApproval(sprintId: string, user: AuthUser, data: RequestApprovalDto): Promise<{
        success: boolean;
        sprint: any;
        approval: any;
    }>;
    approveRequest(sprintId: string, action: 'approve' | 'reject', user: AuthUser): Promise<any>;
    private sendApprovalRequestEmails;
    private sendApprovalResponseEmail;
}
