import { Injectable, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { throwNotFound } from '../common/utils/error.utils';
import { UserRole, AccountStatus } from '../common/constants/user-roles';

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  /**
   * Get all users with optional filters
   */
  async getAllUsers(filters?: {
    role?: string;
    accountStatus?: string;
    search?: string;
  }) {
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

  /**
   * Get single user details with activity
   */
  async getUserDetails(userId: string) {
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
      throwNotFound('User', userId);
    }

    return user;
  }

  /**
   * Get user activity logs
   */
  async getUserActivityLogs(userId: string, limit = 50) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    // Get task activities where user was involved
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

    // Get session history
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

    // Get approval history if coordinator/admin
    const approvals =
      user.role === UserRole.COORDINATOR || user.role === UserRole.ADMIN
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

  /**
   * Suspend user account
   */
  async suspendUser(
    adminUserId: string,
    targetUserId: string,
    reason?: string,
  ) {
    // Check admin permissions
    const adminUser = await this.prisma.user.findUnique({
      where: { id: adminUserId },
    });

    if (!adminUser || adminUser.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can suspend users');
    }

    // Prevent self-suspension
    if (adminUserId === targetUserId) {
      throw new ForbiddenException('Cannot suspend your own account');
    }

    const targetUser = await this.prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!targetUser) {
      throwNotFound('User', targetUserId);
    }

    // Update user status
    const updatedUser = await this.prisma.user.update({
      where: { id: targetUserId },
      data: {
        accountStatus: AccountStatus.SUSPENDED,
      },
      select: {
        id: true,
        email: true,
        name: true,
        role: true,
        accountStatus: true,
      },
    });

    // Invalidate all active sessions for suspended user
    await this.prisma.session.deleteMany({
      where: { userId: targetUserId },
    });

    return {
      user: updatedUser,
      message: `User ${targetUser.name} has been suspended${reason ? `: ${reason}` : ''}`,
    };
  }

  /**
   * Reactivate suspended user account
   */
  async reactivateUser(adminUserId: string, targetUserId: string) {
    // Check admin permissions
    const adminUser = await this.prisma.user.findUnique({
      where: { id: adminUserId },
    });

    if (!adminUser || adminUser.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can reactivate users');
    }

    const targetUser = await this.prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!targetUser) {
      throwNotFound('User', targetUserId);
    }

    if (targetUser.accountStatus !== AccountStatus.SUSPENDED) {
      throw new ForbiddenException('User account is not suspended');
    }

    // Update user status
    const updatedUser = await this.prisma.user.update({
      where: { id: targetUserId },
      data: {
        accountStatus: AccountStatus.ACTIVE,
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

  /**
   * Change user role (admin only)
   */
  async changeUserRole(
    adminUserId: string,
    targetUserId: string,
    newRole: 'ADMIN' | 'COORDINATOR' | 'VOLUNTEER',
  ) {
    // Check admin permissions
    const adminUser = await this.prisma.user.findUnique({
      where: { id: adminUserId },
    });

    if (!adminUser || adminUser.role !== UserRole.ADMIN) {
      throw new ForbiddenException('Only admins can change user roles');
    }

    // Prevent self-demotion from admin
    if (adminUserId === targetUserId && newRole !== UserRole.ADMIN) {
      throw new ForbiddenException('Cannot demote your own admin account');
    }

    const targetUser = await this.prisma.user.findUnique({
      where: { id: targetUserId },
    });

    if (!targetUser) {
      throwNotFound('User', targetUserId);
    }

    // Update user role
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
}
