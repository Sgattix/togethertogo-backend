import { DashboardService } from './dashboard.service';
import { AuthenticatedRequest } from '../common/types/request.types';
export declare class DashboardController {
    private dashboardService;
    constructor(dashboardService: DashboardService);
    getAdminDashboard(req: AuthenticatedRequest): Promise<{
        pendingApprovals: any;
        userStats: {
            totalUsers: any;
            activeUsers: any;
            suspendedUsers: any;
            byRole: {
                admin: any;
                coordinator: any;
                volunteer: any;
            };
        };
        recentActivity: {
            sprintsCreated: any;
            taskActivities: any;
        };
    }>;
    getCoordinatorDashboard(req: AuthenticatedRequest): Promise<{
        mySprints: any;
        sprintStatusOverview: {
            totalSprints: any;
            statusBreakdown: {
                planned: number;
                active: number;
                completed: number;
                archived: number;
            };
            averageProgress: number;
        };
    }>;
    getVolunteerDashboard(req: AuthenticatedRequest): Promise<{
        assignedTasks: any;
        availableSprints: any;
    }>;
    getSprintStats(sprintId: string, req: AuthenticatedRequest): Promise<{
        totalTasks: any;
        completedTasks: any;
        inProgressTasks: any;
        progress: number;
    }>;
}
