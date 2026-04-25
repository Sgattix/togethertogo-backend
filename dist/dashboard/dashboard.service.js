"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DashboardService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_selects_1 = require("../common/constants/prisma-selects");
let DashboardService = class DashboardService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAdminDashboard() {
        const [pendingApprovals, userStats, recentActivity] = await Promise.all([
            this.getPendingApprovals(),
            this.getUserStats(),
            this.getRecentActivity(),
        ]);
        return {
            pendingApprovals,
            userStats,
            recentActivity,
        };
    }
    async getPendingApprovals() {
        return this.prisma.approvalHistory.findMany({
            where: { status: 'pending' },
            include: {
                sprint: {
                    select: {
                        id: true,
                        title: true,
                        location: true,
                        progressStatus: true,
                    },
                },
                requestedByUser: {
                    select: prisma_selects_1.COORDINATOR_SELECT,
                },
            },
            orderBy: { createdAt: 'desc' },
            take: 10,
        });
    }
    async getUserStats() {
        const totalUsers = await this.prisma.user.count();
        const activeUsers = await this.prisma.user.count({
            where: { accountStatus: 'ACTIVE' },
        });
        const suspendedUsers = await this.prisma.user.count({
            where: { accountStatus: 'SUSPENDED' },
        });
        return {
            totalUsers,
            activeUsers,
            suspendedUsers,
        };
    }
    async getRecentActivity() {
        const sprints = await this.prisma.sprint.findMany({
            select: {
                id: true,
                title: true,
                progressStatus: true,
                createdAt: true,
                coordinator: { select: { name: true } },
            },
            orderBy: { createdAt: 'desc' },
            take: 5,
        });
        const taskActivities = await this.prisma.taskActivity.findMany({
            select: {
                id: true,
                action: true,
                description: true,
                createdAt: true,
                userName: true,
                task: { select: prisma_selects_1.TASK_SELECT },
            },
            orderBy: { createdAt: 'desc' },
            take: 5,
        });
        return {
            sprintsCreated: sprints,
            taskActivities,
        };
    }
    async getCoordinatorDashboard(coordinatorId) {
        const [mySprints, sprintStatusOverview] = await Promise.all([
            this.getCoordinatorSprints(coordinatorId),
            this.getCoordinatorSprintStatus(coordinatorId),
        ]);
        return {
            mySprints,
            sprintStatusOverview,
        };
    }
    async getCoordinatorSprints(coordinatorId) {
        return this.prisma.sprint.findMany({
            where: { coordinatorId },
            select: {
                id: true,
                title: true,
                description: true,
                location: true,
                progressStatus: true,
                governmentAuthorizationStatus: true,
                platformAuthorizationStatus: true,
                startDate: true,
                endDate: true,
                progress: true,
                createdAt: true,
                tasks: {
                    select: {
                        id: true,
                        title: true,
                        status: true,
                        priority: true,
                        assignedTo: true,
                    },
                },
                approvalHistory: {
                    select: {
                        id: true,
                        status: true,
                        createdAt: true,
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 1,
                },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getCoordinatorSprintStatus(coordinatorId) {
        const sprints = await this.prisma.sprint.findMany({
            where: { coordinatorId },
            select: { id: true, progressStatus: true, progress: true },
        });
        const statusCount = {
            planned: 0,
            active: 0,
            completed: 0,
            archived: 0,
        };
        const totalTasks = sprints.reduce((acc, sprint) => {
            if (statusCount[sprint.progressStatus] !== undefined) {
                statusCount[sprint.progressStatus]++;
            }
            return acc + 1;
        }, 0);
        const averageProgress = sprints.length > 0
            ? sprints.reduce((acc, s) => acc + s.progress, 0) / sprints.length
            : 0;
        return {
            totalSprints: sprints.length,
            statusBreakdown: statusCount,
            averageProgress: Math.round(averageProgress),
        };
    }
    async getVolunteerDashboard(userId) {
        const volunteer = await this.prisma.volunteer.findUnique({
            where: { userId },
            select: { id: true },
        });
        if (!volunteer) {
            return {
                assignedTasks: [],
                availableSprints: [],
            };
        }
        const [assignedTasks, availableSprints] = await Promise.all([
            this.getVolunteerAssignedTasks(volunteer.id),
            this.getAvailableSprints(),
        ]);
        return {
            assignedTasks,
            availableSprints,
        };
    }
    async getVolunteerAssignedTasks(volunteerId) {
        return this.prisma.task.findMany({
            where: { assignedTo: volunteerId },
            select: {
                id: true,
                title: true,
                description: true,
                status: true,
                priority: true,
                dueDate: true,
                createdAt: true,
                sprint: {
                    select: {
                        id: true,
                        title: true,
                        location: true,
                        progressStatus: true,
                        startDate: true,
                        endDate: true,
                        coordinator: { select: prisma_selects_1.COORDINATOR_SELECT },
                    },
                },
                comments: {
                    select: {
                        id: true,
                        content: true,
                        userName: true,
                        createdAt: true,
                    },
                    orderBy: { createdAt: 'desc' },
                    take: 3,
                },
            },
            orderBy: [{ status: 'asc' }, { dueDate: 'asc' }],
        });
    }
    async getAvailableSprints() {
        const sprints = await this.prisma.sprint.findMany({
            where: {
                progressStatus: {
                    in: ['active', 'planned'],
                },
            },
            select: {
                id: true,
                title: true,
                description: true,
                location: true,
                startDate: true,
                endDate: true,
                progressStatus: true,
                progress: true,
                platformAuthorizationStatus: true,
                governmentAuthorizationStatus: true,
                coordinatorId: true,
                coordinator: {
                    select: prisma_selects_1.COORDINATOR_SELECT,
                },
                tasks: {
                    select: {
                        id: true,
                        title: true,
                        status: true,
                        priority: true,
                        assignedTo: true,
                        dueDate: true,
                    },
                },
            },
            orderBy: { startDate: 'asc' },
        });
        return sprints;
    }
    async getSprintStats(sprintId) {
        const [totalTasks, completedTasks, inProgressTasks] = await Promise.all([
            this.prisma.task.count({ where: { sprintId } }),
            this.prisma.task.count({
                where: { sprintId, status: 'completed' },
            }),
            this.prisma.task.count({
                where: { sprintId, status: 'in_progress' },
            }),
        ]);
        const progress = totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;
        return {
            totalTasks,
            completedTasks,
            inProgressTasks,
            progress,
        };
    }
};
exports.DashboardService = DashboardService;
exports.DashboardService = DashboardService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], DashboardService);
//# sourceMappingURL=dashboard.service.js.map