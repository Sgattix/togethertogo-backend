import { PrismaService } from '../prisma/prisma.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
export declare class NotificationsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createNotificationDto: CreateNotificationDto): Promise<any>;
    findAll(userId: string, skip?: number, take?: number): Promise<{
        data: any;
        total: any;
    }>;
    getUnreadCount(userId: string): Promise<any>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<any>;
    markAsRead(userId: string, notificationId: string): Promise<any>;
    markAsUnread(userId: string, notificationId: string): Promise<any>;
    markAllAsRead(userId: string): Promise<any>;
    delete(id: string): Promise<any>;
    deleteByUserId(userId: string): Promise<any>;
}
