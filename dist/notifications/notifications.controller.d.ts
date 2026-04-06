import { NotificationsService } from './notifications.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { PrismaService } from '../prisma/prisma.service';
export declare class NotificationsController {
    private notificationsService;
    private prisma;
    constructor(notificationsService: NotificationsService, prisma: PrismaService);
    private getUserFromAuth;
    findAll(authHeader: string, skip?: string, take?: string): Promise<{
        data: any;
        total: any;
    }>;
    getUnreadCount(authHeader: string): Promise<{
        unreadCount: any;
    }>;
    create(createNotificationDto: CreateNotificationDto): Promise<any>;
    update(id: string, updateNotificationDto: UpdateNotificationDto): Promise<any>;
    markAsRead(authHeader: string, notificationId: string): Promise<any>;
    markAsUnread(authHeader: string, notificationId: string): Promise<any>;
    markAllAsRead(authHeader: string): Promise<any>;
    delete(id: string): Promise<any>;
}
