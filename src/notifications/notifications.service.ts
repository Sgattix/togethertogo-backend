import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Injectable()
export class NotificationsService {
  constructor(private prisma: PrismaService) {}

  async create(createNotificationDto: CreateNotificationDto) {
    return this.prisma.notification.create({
      data: {
        userId: createNotificationDto.userId,
        type: createNotificationDto.type,
        title: createNotificationDto.title,
        message: createNotificationDto.message,
        relatedTaskId: createNotificationDto.relatedTaskId,
        relatedSprintId: createNotificationDto.relatedSprintId,
        metadata: createNotificationDto.metadata
          ? JSON.stringify(createNotificationDto.metadata)
          : null,
      },
    });
  }

  async findAll(userId: string, skip?: number, take?: number) {
    const [notifications, total] = await Promise.all([
      this.prisma.notification.findMany({
        where: {
          userId,
        },
        orderBy: {
          createdAt: 'desc',
        },
        skip: skip || 0,
        take: take || 20,
      }),
      this.prisma.notification.count({
        where: {
          userId,
        },
      }),
    ]);

    return {
      data: notifications.map((n) => ({
        ...n,
        metadata: n.metadata ? JSON.parse(n.metadata) : null,
      })),
      total,
    };
  }

  async getUnreadCount(userId: string) {
    return this.prisma.notification.count({
      where: {
        userId,
        isRead: false,
      },
    });
  }

  async update(id: string, updateNotificationDto: UpdateNotificationDto) {
    return this.prisma.notification.update({
      where: { id },
      data: updateNotificationDto,
    });
  }

  async markAsRead(userId: string, notificationId: string) {
    return this.prisma.notification.update({
      where: {
        id: notificationId,
      },
      data: {
        isRead: true,
      },
    });
  }

  async markAsUnread(userId: string, notificationId: string) {
    return this.prisma.notification.update({
      where: {
        id: notificationId,
      },
      data: {
        isRead: false,
      },
    });
  }

  async markAllAsRead(userId: string) {
    return this.prisma.notification.updateMany({
      where: {
        userId,
        isRead: false,
      },
      data: {
        isRead: true,
      },
    });
  }

  async delete(id: string) {
    return this.prisma.notification.delete({
      where: { id },
    });
  }

  async deleteByUserId(userId: string) {
    return this.prisma.notification.deleteMany({
      where: {
        userId,
      },
    });
  }
}
