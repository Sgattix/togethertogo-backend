import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Query,
  Body,
  Headers,
  BadRequestException,
  ForbiddenException,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { AuthService } from '../auth/auth.service';

@Controller({ version: '1', path: 'admin' })
export class AdminController {
  constructor(
    private adminService: AdminService,
    private authService: AuthService,
  ) {}

  // Helper method to extract and validate admin user
  private async getAdminUser(authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new BadRequestException('Missing session token');
    }

    const user = await this.authService.validateSession(sessionId);
    if (user.role !== 'ADMIN') {
      throw new ForbiddenException('Only admins can access this endpoint');
    }

    return user;
  }

  /**
   * Get all users with optional filters
   */
  @Get('users')
  async getAllUsers(
    @Headers('authorization') authHeader: string,
    @Query('role') role?: string,
    @Query('accountStatus') accountStatus?: string,
    @Query('search') search?: string,
  ) {
    await this.getAdminUser(authHeader);

    return this.adminService.getAllUsers({
      role,
      accountStatus,
      search,
    });
  }

  /**
   * Get single user details
   */
  @Get('users/:userId')
  async getUserDetails(
    @Headers('authorization') authHeader: string,
    @Param('userId') userId: string,
  ) {
    await this.getAdminUser(authHeader);

    return this.adminService.getUserDetails(userId);
  }

  /**
   * Get user activity logs
   */
  @Get('users/:userId/activity')
  async getUserActivityLogs(
    @Headers('authorization') authHeader: string,
    @Param('userId') userId: string,
    @Query('limit') limit?: string,
  ) {
    await this.getAdminUser(authHeader);

    const limitNum = limit ? parseInt(limit, 10) : 50;
    return this.adminService.getUserActivityLogs(userId, limitNum);
  }

  /**
   * Suspend user
   */
  @Post('users/:userId/suspend')
  async suspendUser(
    @Headers('authorization') authHeader: string,
    @Param('userId') userId: string,
    @Body() body: { reason?: string },
  ) {
    const adminUser = await this.getAdminUser(authHeader);

    return this.adminService.suspendUser(adminUser.id, userId, body.reason);
  }

  /**
   * Reactivate user
   */
  @Post('users/:userId/reactivate')
  async reactivateUser(
    @Headers('authorization') authHeader: string,
    @Param('userId') userId: string,
  ) {
    const adminUser = await this.getAdminUser(authHeader);

    return this.adminService.reactivateUser(adminUser.id, userId);
  }

  /**
   * Change user role
   */
  @Put('users/:userId/role')
  async changeUserRole(
    @Headers('authorization') authHeader: string,
    @Param('userId') userId: string,
    @Body() body: { role: 'ADMIN' | 'COORDINATOR' | 'VOLUNTEER' },
  ) {
    const adminUser = await this.getAdminUser(authHeader);

    return this.adminService.changeUserRole(adminUser.id, userId, body.role);
  }
}
