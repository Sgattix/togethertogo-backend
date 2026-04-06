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
exports.AdminService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const error_utils_1 = require("../common/utils/error.utils");
const user_roles_1 = require("../common/constants/user-roles");
let AdminService = class AdminService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async getAllUsers(filters) {
        const where = {
            ...(filters?.role && { role: filters.role }),
            ...(filters?.accountStatus && {
                accountStatus: filters.accountStatus,
            }),
            ...(filters?.search && {
                OR: [
                    { name: { contains: filters.search } },
                    { email: { contains: filters.search } },
                ],
            }),
        };
        const users = await this.prisma.user.findMany({
            where,
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                accountStatus: true,
                emailVerified: true,
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
                _count: {
                    select: {
                        sprints: true,
                        sessions: true,
                        notifications: true,
                    },
                },
            },
            orderBy: { createdAt: 'desc' },
        });
        return users;
    }
    async getUserDetails(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                accountStatus: true,
                emailVerified: true,
                createdAt: true,
                updatedAt: true,
                deletedAt: true,
                pendingEmail: true,
                sprints: {
                    select: {
                        id: true,
                        title: true,
                        progressStatus: true,
                        createdAt: true,
                    },
                    take: 10,
                    orderBy: { createdAt: 'desc' },
                },
                sessions: {
                    select: {
                        id: true,
                        deviceInfo: true,
                        ipAddress: true,
                        location: true,
                        lastActivityAt: true,
                        createdAt: true,
                    },
                    take: 10,
                    orderBy: { lastActivityAt: 'desc' },
                },
                notifications: {
                    select: {
                        id: true,
                        type: true,
                        title: true,
                        isRead: true,
                        createdAt: true,
                    },
                    take: 20,
                    orderBy: { createdAt: 'desc' },
                },
            },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        return user;
    }
    async getUserActivityLogs(userId, limit = 50) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        const taskActivities = await this.prisma.taskActivity.findMany({
            where: { userId },
            include: {
                task: {
                    select: {
                        id: true,
                        title: true,
                        sprintId: true,
                    },
                },
            },
            take: limit,
            orderBy: { createdAt: 'desc' },
        });
        const sessions = await this.prisma.session.findMany({
            where: { userId },
            select: {
                id: true,
                deviceInfo: true,
                ipAddress: true,
                location: true,
                lastActivityAt: true,
                createdAt: true,
                expiresAt: true,
            },
            take: limit,
            orderBy: { lastActivityAt: 'desc' },
        });
        const approvals = user.role === user_roles_1.UserRole.COORDINATOR || user.role === user_roles_1.UserRole.ADMIN
            ? await this.prisma.approvalHistory.findMany({
                where: { requestedBy: userId },
                include: {
                    sprint: {
                        select: {
                            id: true,
                            title: true,
                        },
                    },
                },
                take: limit,
                orderBy: { createdAt: 'desc' },
            })
            : [];
        return {
            taskActivities,
            sessions,
            approvals,
        };
    }
    async suspendUser(adminUserId, targetUserId, reason) {
        const adminUser = await this.prisma.user.findUnique({
            where: { id: adminUserId },
        });
        if (!adminUser || adminUser.role !== user_roles_1.UserRole.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can suspend users');
        }
        if (adminUserId === targetUserId) {
            throw new common_1.ForbiddenException('Cannot suspend your own account');
        }
        const targetUser = await this.prisma.user.findUnique({
            where: { id: targetUserId },
        });
        if (!targetUser) {
            (0, error_utils_1.throwNotFound)('User', targetUserId);
        }
        const updatedUser = await this.prisma.user.update({
            where: { id: targetUserId },
            data: {
                accountStatus: user_roles_1.AccountStatus.SUSPENDED,
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                accountStatus: true,
            },
        });
        await this.prisma.session.deleteMany({
            where: { userId: targetUserId },
        });
        return {
            user: updatedUser,
            message: `User ${targetUser.name} has been suspended${reason ? `: ${reason}` : ''}`,
        };
    }
    async reactivateUser(adminUserId, targetUserId) {
        const adminUser = await this.prisma.user.findUnique({
            where: { id: adminUserId },
        });
        if (!adminUser || adminUser.role !== user_roles_1.UserRole.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can reactivate users');
        }
        const targetUser = await this.prisma.user.findUnique({
            where: { id: targetUserId },
        });
        if (!targetUser) {
            (0, error_utils_1.throwNotFound)('User', targetUserId);
        }
        if (targetUser.accountStatus !== user_roles_1.AccountStatus.SUSPENDED) {
            throw new common_1.ForbiddenException('User account is not suspended');
        }
        const updatedUser = await this.prisma.user.update({
            where: { id: targetUserId },
            data: {
                accountStatus: user_roles_1.AccountStatus.ACTIVE,
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                accountStatus: true,
            },
        });
        return {
            user: updatedUser,
            message: `User ${targetUser.name} has been reactivated`,
        };
    }
    async changeUserRole(adminUserId, targetUserId, newRole) {
        const adminUser = await this.prisma.user.findUnique({
            where: { id: adminUserId },
        });
        if (!adminUser || adminUser.role !== user_roles_1.UserRole.ADMIN) {
            throw new common_1.ForbiddenException('Only admins can change user roles');
        }
        if (adminUserId === targetUserId && newRole !== user_roles_1.UserRole.ADMIN) {
            throw new common_1.ForbiddenException('Cannot demote your own admin account');
        }
        const targetUser = await this.prisma.user.findUnique({
            where: { id: targetUserId },
        });
        if (!targetUser) {
            (0, error_utils_1.throwNotFound)('User', targetUserId);
        }
        const updatedUser = await this.prisma.user.update({
            where: { id: targetUserId },
            data: {
                role: newRole,
            },
            select: {
                id: true,
                email: true,
                name: true,
                role: true,
                accountStatus: true,
            },
        });
        return {
            user: updatedUser,
            message: `User ${targetUser.name} role changed to ${newRole}`,
        };
    }
};
exports.AdminService = AdminService;
exports.AdminService = AdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], AdminService);
//# sourceMappingURL=admin.service.js.map