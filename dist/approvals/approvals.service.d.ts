import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { ApproveApprovalDto } from './dto/approval.dto';
export declare class ApprovalsService {
    private prisma;
    private mailerService;
    constructor(prisma: PrismaService, mailerService: MailerService);
    findPendingApprovals(): Promise<any>;
    findApprovalsByUser(userId: string): Promise<any>;
    findOne(id: string): Promise<any>;
    approveApproval(id: string, adminId: string, dto: ApproveApprovalDto): Promise<any>;
    private handleApproveAction;
    private handleRejectAction;
}
