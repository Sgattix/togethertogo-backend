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
exports.NotificationsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let NotificationsService = class NotificationsService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(createNotificationDto) {
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
    async findAll(userId, skip, take) {
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
    async getUnreadCount(userId) {
        return this.prisma.notification.count({
            where: {
                userId,
                isRead: false,
            },
        });
    }
    async update(id, updateNotificationDto) {
        return this.prisma.notification.update({
            where: { id },
            data: updateNotificationDto,
        });
    }
    async markAsRead(userId, notificationId) {
        return this.prisma.notification.update({
            where: {
                id: notificationId,
            },
            data: {
                isRead: true,
            },
        });
    }
    async markAsUnread(userId, notificationId) {
        return this.prisma.notification.update({
            where: {
                id: notificationId,
            },
            data: {
                isRead: false,
            },
        });
    }
    async markAllAsRead(userId) {
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
    async delete(id) {
        return this.prisma.notification.delete({
            where: { id },
        });
    }
    async deleteByUserId(userId) {
        return this.prisma.notification.deleteMany({
            where: {
                userId,
            },
        });
    }
};
exports.NotificationsService = NotificationsService;
exports.NotificationsService = NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], NotificationsService);
//# sourceMappingURL=notifications.service.js.map