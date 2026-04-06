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
exports.TasksService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const mailer_service_1 = require("../mailer/mailer.service");
const notifications_service_1 = require("../notifications/notifications.service");
const error_utils_1 = require("../common/utils/error.utils");
const email_utils_1 = require("../common/utils/email.utils");
let TasksService = class TasksService {
    constructor(prisma, mailerService, notificationsService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
        this.notificationsService = notificationsService;
    }
    async createTask(userId, data) {
        const sprint = await this.prisma.sprint.findUnique({
            where: { id: data.sprintId },
            include: { coordinator: true },
        });
        if (!sprint) {
            (0, error_utils_1.throwNotFound)('Sprint', data.sprintId);
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        if (sprint.coordinatorId !== userId && user.role !== 'ADMIN') {
            throw new Error('Only sprint coordinator or admin can create tasks');
        }
        const task = await this.prisma.task.create({
            data: {
                title: data.title,
                description: data.description,
                priority: data.priority,
                dueDate: new Date(data.dueDate),
                assignedTo: data.assignedTo,
                sprintId: data.sprintId,
            },
            include: {
                sprint: true,
            },
        });
        await this.logActivity({
            taskId: task.id,
            userId,
            userName: user.name,
            action: 'created',
            description: `Task created by ${user.name}`,
        });
        if (data.assignedTo) {
            const assignedVolunteer = await this.prisma.volunteer.findUnique({
                where: { id: data.assignedTo },
                include: { user: true },
            });
            if (assignedVolunteer) {
                await this.logActivity({
                    taskId: task.id,
                    userId,
                    userName: user.name,
                    action: 'assigned',
                    fieldName: 'assignedTo',
                    newValue: assignedVolunteer.name,
                    description: `Task assigned to ${assignedVolunteer.name}`,
                });
                await (0, email_utils_1.sendEmailSafely)(() => this.mailerService.sendTaskAssignmentEmail(assignedVolunteer.email, assignedVolunteer.name, task.title, task.sprint.title, task.dueDate), 'task-assignment');
                if (assignedVolunteer.user && assignedVolunteer.user.id) {
                    await this.notificationsService.create({
                        userId: assignedVolunteer.user.id,
                        type: 'task_assigned',
                        title: `New Task Assigned: ${task.title}`,
                        message: `You have been assigned a new task "${task.title}" by ${user.name}.`,
                        relatedTaskId: task.id,
                        relatedSprintId: data.sprintId,
                        metadata: {
                            assignedByName: user.name,
                        },
                    });
                }
            }
        }
        return task;
    }
    async updateTask(userId, taskId, data) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
            include: { sprint: { include: { coordinator: true } } },
        });
        if (!task) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        const isCoordinator = task.sprint.coordinatorId === userId;
        const isAdmin = user.role === 'ADMIN';
        const isAssignee = task.assignedTo === userId;
        if (!isCoordinator && !isAdmin && !isAssignee) {
            throw new Error('You do not have permission to update this task');
        }
        const changes = [];
        if (data.title && data.title !== task.title) {
            changes.push({
                field: 'title',
                oldValue: task.title,
                newValue: data.title,
            });
        }
        if (data.status && data.status !== task.status) {
            changes.push({
                field: 'status',
                oldValue: task.status,
                newValue: data.status,
            });
        }
        if (data.priority && data.priority !== task.priority) {
            changes.push({
                field: 'priority',
                oldValue: task.priority,
                newValue: data.priority,
            });
        }
        if (data.assignedTo && data.assignedTo !== task.assignedTo) {
            const oldAssignee = task.assignedTo
                ? await this.prisma.volunteer.findUnique({
                    where: { id: task.assignedTo },
                })
                : null;
            const newAssignee = await this.prisma.volunteer.findUnique({
                where: { id: data.assignedTo },
                include: { user: true },
            });
            changes.push({
                field: 'assignedTo',
                oldValue: oldAssignee?.name || 'Unassigned',
                newValue: newAssignee?.name || 'Unassigned',
            });
            if (newAssignee) {
                await (0, email_utils_1.sendEmailSafely)(() => this.mailerService.sendTaskAssignmentEmail(newAssignee.email, newAssignee.name, task.title, task.sprint.title, task.dueDate), 'task-assignment');
                if (newAssignee.user && newAssignee.user.id) {
                    await this.notificationsService.create({
                        userId: newAssignee.user.id,
                        type: 'task_assigned',
                        title: `New Task Assigned: ${task.title}`,
                        message: `You have been assigned a new task "${task.title}" by ${user.name}.`,
                        relatedTaskId: taskId,
                        relatedSprintId: task.sprintId,
                        metadata: {
                            assignedByName: user.name,
                        },
                    });
                }
            }
        }
        const updatedTask = await this.prisma.task.update({
            where: { id: taskId },
            data: {
                ...(data.title && { title: data.title }),
                ...(data.description !== undefined && {
                    description: data.description,
                }),
                ...(data.status && { status: data.status }),
                ...(data.priority && { priority: data.priority }),
                ...(data.dueDate && { dueDate: new Date(data.dueDate) }),
                ...(data.assignedTo !== undefined && { assignedTo: data.assignedTo }),
            },
            include: {
                sprint: true,
            },
        });
        for (const change of changes) {
            await this.logActivity({
                taskId,
                userId,
                userName: user.name,
                action: 'updated',
                fieldName: change.field,
                oldValue: change.oldValue,
                newValue: change.newValue,
                description: `${user.name} changed ${change.field} from "${change.oldValue}" to "${change.newValue}"`,
            });
            if (change.field === 'status' && task.assignedTo) {
                const assignedVolunteer = await this.prisma.volunteer.findUnique({
                    where: { id: task.assignedTo },
                    include: { user: true },
                });
                if (assignedVolunteer &&
                    assignedVolunteer.user &&
                    assignedVolunteer.user.id) {
                    await this.notificationsService.create({
                        userId: assignedVolunteer.user.id,
                        type: 'task_status_changed',
                        title: `Task Status Changed: ${updatedTask.title}`,
                        message: `Task "${updatedTask.title}" status has been changed to ${change.newValue} by ${user.name}.`,
                        relatedTaskId: taskId,
                        relatedSprintId: task.sprintId,
                        metadata: {
                            newStatus: change.newValue,
                            changedByName: user.name,
                        },
                    });
                }
            }
        }
        return updatedTask;
    }
    async deleteTask(userId, taskId) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
            include: { sprint: true },
        });
        if (!task) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        const isCoordinator = task.sprint.coordinatorId === userId;
        const isAdmin = user.role === 'ADMIN';
        if (!isCoordinator && !isAdmin) {
            throw new Error('Only sprint coordinator or admin can delete tasks');
        }
        await this.prisma.task.delete({
            where: { id: taskId },
        });
        return { message: 'Task deleted successfully' };
    }
    async getTaskById(taskId) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
            include: {
                sprint: {
                    include: {
                        coordinator: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
                comments: {
                    orderBy: { createdAt: 'desc' },
                },
                activities: {
                    orderBy: { createdAt: 'desc' },
                    take: 50,
                },
            },
        });
        if (!task) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        return task;
    }
    async addComment(userId, taskId, data) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
            include: { sprint: true },
        });
        if (!task) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        const comment = await this.prisma.taskComment.create({
            data: {
                taskId,
                userId,
                userName: user.name,
                userRole: user.role,
                content: data.content,
            },
        });
        await this.logActivity({
            taskId,
            userId,
            userName: user.name,
            action: 'commented',
            description: `${user.name} added a comment`,
        });
        if (task.assignedTo && task.assignedTo !== userId) {
            const assignedVolunteer = await this.prisma.volunteer.findUnique({
                where: { id: task.assignedTo },
                include: { user: true },
            });
            if (assignedVolunteer &&
                assignedVolunteer.user &&
                assignedVolunteer.user.id) {
                await this.notificationsService.create({
                    userId: assignedVolunteer.user.id,
                    type: 'comment',
                    title: `New Comment on ${task.title}`,
                    message: `${user.name} commented on the task "${task.title}"`,
                    relatedTaskId: taskId,
                    relatedSprintId: task.sprintId,
                    metadata: {
                        commenterName: user.name,
                        commentPreview: data.content.substring(0, 100),
                    },
                });
            }
        }
        return comment;
    }
    async getComments(taskId) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
        });
        if (!task) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        return this.prisma.taskComment.findMany({
            where: { taskId },
            orderBy: { createdAt: 'desc' },
        });
    }
    async getActivities(taskId) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
        });
        if (!task) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        return this.prisma.taskActivity.findMany({
            where: { taskId },
            orderBy: { createdAt: 'desc' },
            take: 100,
        });
    }
    async logActivity(data) {
        await this.prisma.taskActivity.create({
            data: {
                taskId: data.taskId,
                userId: data.userId,
                userName: data.userName,
                action: data.action,
                fieldName: data.fieldName,
                oldValue: data.oldValue,
                newValue: data.newValue,
                description: data.description,
            },
        });
    }
};
exports.TasksService = TasksService;
exports.TasksService = TasksService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService,
        notifications_service_1.NotificationsService])
], TasksService);
//# sourceMappingURL=tasks.service.js.map