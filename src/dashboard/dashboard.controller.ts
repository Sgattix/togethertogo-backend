import {
  Controller,
  Get,
  ForbiddenException,
  UseGuards,
  Request,
  Param,
} from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { SessionGuard } from '../auth/guard/session.guard';
import { AuthenticatedRequest } from '../common/types/request.types';

@Controller({ version: '1', path: 'dashboard' })
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Get('admin')
  @UseGuards(SessionGuard)
  async getAdminDashboard(@Request() req: AuthenticatedRequest) {
    if (req.user.role !== 'ADMIN') {
      throw new ForbiddenException('Only admins can access this dashboard');
    }
    return this.dashboardService.getAdminDashboard();
  }

  @Get('coordinator')
  @UseGuards(SessionGuard)
  async getCoordinatorDashboard(@Request() req: AuthenticatedRequest) {
    if (req.user.role !== 'COORDINATOR') {
      throw new ForbiddenException(
        'Only coordinators can access this dashboard',
      );
    }
    return this.dashboardService.getCoordinatorDashboard(req.user.id);
  }

  @Get('volunteer')
  @UseGuards(SessionGuard)
  async getVolunteerDashboard(@Request() req: AuthenticatedRequest) {
    if (req.user.role !== 'VOLUNTEER') {
      throw new ForbiddenException('Only volunteers can access this dashboard');
    }
    return this.dashboardService.getVolunteerDashboard(req.user.id);
  }

  @Get('sprint/:sprintId/stats')
  @UseGuards(SessionGuard)
  async getSprintStats(
    @Param('sprintId') sprintId: string,
    @Request() req: AuthenticatedRequest,
  ) {
    if (req.user.role !== 'COORDINATOR' && req.user.role !== 'ADMIN') {
      throw new ForbiddenException(
        'Only coordinators and admins can view sprint stats',
      );
    }
    return this.dashboardService.getSprintStats(sprintId);
  }
}
