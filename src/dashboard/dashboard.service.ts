import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import {
  COORDINATOR_SELECT,
  TASK_SELECT,
} from '../common/constants/prisma-selects';

@Injectable()
export class DashboardService {
  constructor(private prisma: PrismaService) {}

  // ========== ADMIN DASHBOARD ==========
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

  private async getPendingApprovals() {
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
          select: COORDINATOR_SELECT,
        },
      },
      orderBy: { createdAt: 'desc' },
      take: 10,
    });
  }

  private async getUserStats() {
    const [totalUsers, adminCount, coordinatorCount, volunteerCount] =
      await Promise.all([
        this.prisma.user.count(),
        this.prisma.user.count({ where: { role: 'ADMIN' } }),
        this.prisma.user.count({ where: { role: 'COORDINATOR' } }),
        this.prisma.user.count({ where: { role: 'VOLUNTEER' } }),
      ]);

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
      byRole: {
        admin: adminCount,
        coordinator: coordinatorCount,
        volunteer: volunteerCount,
      },
    };
  }

  private async getRecentActivity() {
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
        task: { select: TASK_SELECT },
      },
      orderBy: { createdAt: 'desc' },
      take: 5,
    });

    return {
      sprintsCreated: sprints,
      taskActivities,
    };
  }

  // ========== COORDINATOR DASHBOARD ==========
  async getCoordinatorDashboard(coordinatorId: string) {
    const [mySprints, sprintStatusOverview] = await Promise.all([
      this.getCoordinatorSprints(coordinatorId),
      this.getCoordinatorSprintStatus(coordinatorId),
    ]);

    return {
      mySprints,
      sprintStatusOverview,
    };
  }

  private async getCoordinatorSprints(coordinatorId: string) {
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

  private async getCoordinatorSprintStatus(coordinatorId: string) {
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

    const averageProgress =
      sprints.length > 0
        ? sprints.reduce((acc, s) => acc + s.progress, 0) / sprints.length
        : 0;

    return {
      totalSprints: sprints.length,
      statusBreakdown: statusCount,
      averageProgress: Math.round(averageProgress),
    };
  }

  // ========== VOLUNTEER DASHBOARD ==========
  async getVolunteerDashboard(userId: string) {
    // Get volunteer ID from user ID
    const volunteer = await this.prisma.volunteer.findUnique({
      where: { userId },
      select: { id: true },
    });

    if (!volunteer) {
      // Return empty data if volunteer not found
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

  private async getVolunteerAssignedTasks(volunteerId: string) {
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
            coordinator: { select: COORDINATOR_SELECT },
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

  private async getAvailableSprints() {
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
          select: COORDINATOR_SELECT,
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

  // Helper to get sprint stats
  async getSprintStats(sprintId: string) {
    const [totalTasks, completedTasks, inProgressTasks] = await Promise.all([
      this.prisma.task.count({ where: { sprintId } }),
      this.prisma.task.count({
        where: { sprintId, status: 'completed' },
      }),
      this.prisma.task.count({
        where: { sprintId, status: 'in_progress' },
      }),
    ]);

    const progress =
      totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

    return {
      totalTasks,
      completedTasks,
      inProgressTasks,
      progress,
    };
  }
}
