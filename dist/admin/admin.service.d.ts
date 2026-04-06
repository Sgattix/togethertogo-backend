import { PrismaService } from '../prisma/prisma.service';
export declare class AdminService {
    private prisma;
    constructor(prisma: PrismaService);
    getAllUsers(filters?: {
        role?: string;
        accountStatus?: string;
        search?: string;
    }): Promise<any>;
    getUserDetails(userId: string): Promise<any>;
    getUserActivityLogs(userId: string, limit?: number): Promise<{
        taskActivities: any;
        sessions: any;
        approvals: any;
    }>;
    suspendUser(adminUserId: string, targetUserId: string, reason?: string): Promise<{
        user: any;
        message: string;
    }>;
    reactivateUser(adminUserId: string, targetUserId: string): Promise<{
        user: any;
        message: string;
    }>;
    changeUserRole(adminUserId: string, targetUserId: string, newRole: 'ADMIN' | 'COORDINATOR' | 'VOLUNTEER'): Promise<{
        user: any;
        message: string;
    }>;
}
