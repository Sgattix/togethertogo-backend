import { ConfigService } from '@nestjs/config';
export declare class MailerService {
    private configService;
    private transporter;
    private readonly logger;
    constructor(configService: ConfigService);
    private initializeTransporter;
    sendEmail(options: {
        to: string;
        subject: string;
        html: string;
        text?: string;
        cc?: string;
        bcc?: string;
    }): Promise<void>;
    private renderTemplate;
    sendVerificationEmail(options: {
        to: string;
        name: string;
        verificationLink: string;
        verificationCode: string;
    }): Promise<void>;
    sendWelcomeEmail(email: string, name: string): Promise<void>;
    sendApprovalRequestEmail(adminEmail: string, sprintTitle: string, coordinatorName: string, sprintId: string): Promise<void>;
    sendApprovalResponseEmail(coordinatorEmail: string, sprintTitle: string, approved: boolean, notes?: string): Promise<void>;
    sendTaskAssignmentEmail(volunteerEmail: string, volunteerName: string, taskTitle: string, sprintTitle: string, dueDate: Date): Promise<void>;
    sendPasswordResetEmail(options: {
        to: string;
        name: string;
        resetLink: string;
        resetCode: string;
    }): Promise<void>;
    sendPasswordChangedEmail(email: string, name: string): Promise<void>;
    sendEmailChangeVerification(options: {
        to: string;
        name: string;
        verificationLink: string;
        verificationCode: string;
    }): Promise<void>;
    sendEmailChangedConfirmation(email: string, name: string): Promise<void>;
}
