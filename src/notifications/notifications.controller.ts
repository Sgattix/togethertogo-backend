import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  Headers,
  Query,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';

@Controller('v1/notifications')
export class NotificationsController {
  constructor(
    private notificationsService: NotificationsService,
    private prisma: PrismaService,
  ) {}

  private async getUserFromAuth(authHeader: string) {
    const token = authHeader?.replace('Bearer ', '');
    if (!token) {
      throw new Error('Unauthorized');
    }

    const user = await this.prisma.user.findFirst({
      where: {
        sessions: {
          some: {
            id: token,
          },
        },
      },
    });

    if (!user) {
      throw new Error('Unauthorized');
    }

    return user;
  }

  @Get()
  async findAll(
    @Headers('authorization') authHeader: string,
    @Query('skip') skip?: string,
    @Query('take') take?: string,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.notificationsService.findAll(
      user.id,
      skip ? parseInt(skip) : 0,
      take ? parseInt(take) : 20,
    );
  }

  @Get('unread-count')
  async getUnreadCount(@Headers('authorization') authHeader: string) {
    const user = await this.getUserFromAuth(authHeader);
    const unreadCount = await this.notificationsService.getUnreadCount(user.id);
    return { unreadCount };
  }

  @Post()
  async create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationsService.create(createNotificationDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateNotificationDto: UpdateNotificationDto,
  ) {
    return this.notificationsService.update(id, updateNotificationDto);
  }

  @Post(':id/mark-read')
  async markAsRead(
    @Headers('authorization') authHeader: string,
    @Param('id') notificationId: string,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.notificationsService.markAsRead(user.id, notificationId);
  }

  @Post(':id/mark-unread')
  async markAsUnread(
    @Headers('authorization') authHeader: string,
    @Param('id') notificationId: string,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.notificationsService.markAsUnread(user.id, notificationId);
  }

  @Post('mark-all-read')
  async markAllAsRead(@Headers('authorization') authHeader: string) {
    const user = await this.getUserFromAuth(authHeader);
    return this.notificationsService.markAllAsRead(user.id);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    return this.notificationsService.delete(id);
  }
}
