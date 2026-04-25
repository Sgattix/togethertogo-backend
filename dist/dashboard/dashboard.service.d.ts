import { PrismaService } from '../prisma/prisma.service';
export declare class DashboardService {
    private prisma;
    constructor(prisma: PrismaService);
    getAdminDashboard(): Promise<{
        pendingApprovals: any;
        userStats: {
            totalUsers: any;
            activeUsers: any;
            suspendedUsers: any;
        };
        recentActivity: {
            sprintsCreated: any;
            taskActivities: any;
        };
    }>;
    private getPendingApprovals;
    private getUserStats;
    private getRecentActivity;
    getCoordinatorDashboard(coordinatorId: string): Promise<{
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
    private getCoordinatorSprints;
    private getCoordinatorSprintStatus;
    getVolunteerDashboard(userId: string): Promise<{
        assignedTasks: any;
        availableSprints: any;
    }>;
    private getVolunteerAssignedTasks;
    private getAvailableSprints;
    getSprintStats(sprintId: string): Promise<{
        totalTasks: any;
        completedTasks: any;
        inProgressTasks: any;
        progress: number;
    }>;
}
