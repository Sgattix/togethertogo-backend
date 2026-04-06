import { AdminService } from './admin.service';
import { AuthService } from '../auth/auth.service';
export declare class AdminController {
    private adminService;
    private authService;
    constructor(adminService: AdminService, authService: AuthService);
    private getAdminUser;
    getAllUsers(authHeader: string, role?: string, accountStatus?: string, search?: string): Promise<any>;
    getUserDetails(authHeader: string, userId: string): Promise<any>;
    getUserActivityLogs(authHeader: string, userId: string, limit?: string): Promise<{
        taskActivities: any;
        sessions: any;
        approvals: any;
    }>;
    suspendUser(authHeader: string, userId: string, body: {
        reason?: string;
    }): Promise<{
        user: any;
        message: string;
    }>;
    reactivateUser(authHeader: string, userId: string): Promise<{
        user: any;
        message: string;
    }>;
    changeUserRole(authHeader: string, userId: string, body: {
        role: 'ADMIN' | 'COORDINATOR' | 'VOLUNTEER';
    }): Promise<{
        user: any;
        message: string;
    }>;
}
