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
exports.SprintsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const mailer_service_1 = require("../mailer/mailer.service");
const prisma_selects_1 = require("../common/constants/prisma-selects");
const error_utils_1 = require("../common/utils/error.utils");
const auth_utils_1 = require("../common/utils/auth.utils");
const location_utils_1 = require("../common/utils/location.utils");
const sprints_filters_builder_1 = require("./filters/sprints-filters.builder");
let SprintsService = class SprintsService {
    constructor(prisma, mailerService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
    }
    async create(data, coordinatorId) {
        if (!(0, location_utils_1.isLocationValid)(data.location)) {
            (0, error_utils_1.throwBadRequest)('Location is required');
        }
        const location = (0, location_utils_1.normalizeLocation)(data.location);
        return this.prisma.sprint.create({
            data: {
                title: data.title,
                description: data.description,
                location,
                startDate: new Date(data.startDate),
                endDate: new Date(data.endDate),
                coordinatorId,
                progressStatus: 'planned',
                governmentAuthorizationStatus: 'reported',
                platformAuthorizationStatus: 'draft',
            },
        });
    }
    async findAll(filters) {
        const where = (0, sprints_filters_builder_1.sprintFilters)().fromDto(filters).build();
        return this.prisma.sprint.findMany({
            where,
            include: prisma_selects_1.SPRINT_INCLUDE,
        });
    }
    async findOne(id) {
        const sprint = await this.prisma.sprint.findUnique({
            where: { id },
            include: prisma_selects_1.SPRINT_DETAIL_INCLUDE,
        });
        if (!sprint) {
            (0, error_utils_1.throwNotFound)('Sprint', id);
        }
        return sprint;
    }
    async update(id, data, user) {
        const sprint = await this.findOne(id);
        (0, auth_utils_1.assertOwnerOrAdmin)(sprint.coordinatorId, user);
        const updateData = {};
        if (data.title !== undefined)
            updateData.title = data.title;
        if (data.description !== undefined)
            updateData.description = data.description;
        if (data.progressStatus !== undefined)
            updateData.progressStatus = data.progressStatus;
        if (data.governmentAuthorizationStatus !== undefined)
            updateData.governmentAuthorizationStatus =
                data.governmentAuthorizationStatus;
        if (data.platformAuthorizationStatus !== undefined)
            updateData.platformAuthorizationStatus = data.platformAuthorizationStatus;
        if (data.location !== undefined) {
            if (!(0, location_utils_1.isLocationValid)(data.location)) {
                (0, error_utils_1.throwBadRequest)('Location is required');
            }
            updateData.location = (0, location_utils_1.normalizeLocation)(data.location);
        }
        return this.prisma.sprint.update({
            where: { id },
            data: updateData,
            include: { tasks: true },
        });
    }
    async delete(id, user) {
        const sprint = await this.findOne(id);
        (0, auth_utils_1.assertOwnerOrAdmin)(sprint.coordinatorId, user);
        return this.prisma.sprint.delete({ where: { id } });
    }
    async createTask(sprintId, data, user) {
        const sprint = await this.findOne(sprintId);
        (0, auth_utils_1.assertCoordinatorOrAdmin)(user, sprint.coordinatorId);
        return this.prisma.task.create({
            data: {
                title: data.title,
                description: data.description,
                priority: data.priority || 'medium',
                dueDate: new Date(data.dueDate),
                sprintId,
            },
        });
    }
    async updateTask(sprintId, taskId, data, user) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
        });
        if (!task || task.sprintId !== sprintId) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        const sprint = await this.findOne(sprintId);
        (0, auth_utils_1.assertCoordinatorOrAdmin)(user, sprint.coordinatorId);
        return this.prisma.task.update({
            where: { id: taskId },
            data,
        });
    }
    async deleteTask(sprintId, taskId, user) {
        const task = await this.prisma.task.findUnique({
            where: { id: taskId },
        });
        if (!task || task.sprintId !== sprintId) {
            (0, error_utils_1.throwNotFound)('Task', taskId);
        }
        const sprint = await this.findOne(sprintId);
        (0, auth_utils_1.assertCoordinatorOrAdmin)(user, sprint.coordinatorId);
        return this.prisma.task.delete({ where: { id: taskId } });
    }
    async requestApproval(sprintId, user, data) {
        const sprint = await this.findOne(sprintId);
        (0, auth_utils_1.assertCoordinatorOrAdmin)(user, sprint.coordinatorId);
        if (sprint.governmentAuthorizationStatus === 'under-review') {
            (0, error_utils_1.throwBadRequest)('Approval already requested');
        }
        const updatedSprint = await this.prisma.sprint.update({
            where: { id: sprintId },
            data: {
                governmentAuthorizationStatus: 'under-review',
                platformAuthorizationStatus: 'submitted',
            },
            include: prisma_selects_1.SPRINT_INCLUDE,
        });
        const approval = await this.prisma.approvalHistory.create({
            data: {
                sprintId,
                requestedBy: user.id,
                notes: data.notes,
                status: 'pending',
            },
        });
        this.sendApprovalRequestEmails(sprint);
        return {
            success: true,
            sprint: updatedSprint,
            approval,
        };
    }
    async approveRequest(sprintId, action, user) {
        if (user.role !== 'ADMIN') {
            (0, error_utils_1.throwBadRequest)('Only admins can approve requests');
        }
        const approval = await this.prisma.approvalHistory.findFirst({
            where: { sprintId, status: 'pending' },
        });
        if (!approval) {
            (0, error_utils_1.throwNotFound)('Approval', sprintId);
        }
        const approvalStatus = action === 'approve' ? 'approved' : 'rejected';
        const sprintStatus = action === 'approve' ? 'authorized' : 'reported';
        const sprint = await this.findOne(sprintId);
        await this.prisma.approvalHistory.update({
            where: { id: approval.id },
            data: {
                status: approvalStatus,
                approvedAt: new Date(),
            },
        });
        const updated = await this.prisma.sprint.update({
            where: { id: sprintId },
            data: { governmentAuthorizationStatus: sprintStatus },
            include: prisma_selects_1.SPRINT_INCLUDE,
        });
        this.sendApprovalResponseEmail(sprint.coordinator.email, sprint.title, action === 'approve', approval.notes || undefined);
        return updated;
    }
    async sendApprovalRequestEmails(sprint) {
        try {
            const admins = await this.prisma.user.findMany({
                where: { role: 'ADMIN' },
                select: { email: true },
            });
            const coordinatorName = sprint.coordinator.name;
            for (const admin of admins) {
                try {
                    await this.mailerService.sendApprovalRequestEmail(admin.email, sprint.title, coordinatorName, sprint.id);
                }
                catch (error) {
                    console.error(`Failed to send approval request email to ${admin.email}:`, error);
                }
            }
        }
        catch (error) {
            console.error('Failed to send approval request emails:', error);
        }
    }
    async sendApprovalResponseEmail(email, sprintTitle, approved, notes) {
        try {
            await this.mailerService.sendApprovalResponseEmail(email, sprintTitle, approved, notes);
        }
        catch (error) {
            console.error(`Failed to send approval response email to ${email}:`, error);
        }
    }
};
exports.SprintsService = SprintsService;
exports.SprintsService = SprintsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService])
], SprintsService);
//# sourceMappingURL=sprints.service.js.map