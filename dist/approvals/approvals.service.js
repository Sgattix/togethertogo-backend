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
exports.ApprovalsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const mailer_service_1 = require("../mailer/mailer.service");
const approval_dto_1 = require("./dto/approval.dto");
const error_utils_1 = require("../common/utils/error.utils");
const email_utils_1 = require("../common/utils/email.utils");
const prisma_selects_1 = require("../common/constants/prisma-selects");
let ApprovalsService = class ApprovalsService {
    constructor(prisma, mailerService) {
        this.prisma = prisma;
        this.mailerService = mailerService;
    }
    async findPendingApprovals() {
        return this.prisma.approvalHistory.findMany({
            where: { status: 'pending' },
            include: {
                sprint: {
                    include: {
                        coordinator: { select: prisma_selects_1.COORDINATOR_SELECT },
                    },
                },
                requestedByUser: { select: prisma_selects_1.COORDINATOR_SELECT },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findApprovalsByUser(userId) {
        return this.prisma.approvalHistory.findMany({
            where: { requestedBy: userId },
            include: {
                sprint: { select: { id: true, title: true } },
                requestedByUser: { select: { id: true, name: true } },
            },
            orderBy: { createdAt: 'desc' },
        });
    }
    async findOne(id) {
        const approval = await this.prisma.approvalHistory.findUnique({
            where: { id },
            include: {
                sprint: {
                    include: {
                        coordinator: { select: prisma_selects_1.COORDINATOR_SELECT },
                        tasks: {
                            select: prisma_selects_1.TASK_DETAILED_SELECT,
                        },
                    },
                },
                requestedByUser: { select: prisma_selects_1.COORDINATOR_SELECT },
            },
        });
        if (!approval) {
            (0, error_utils_1.throwNotFound)('Approval request', id);
        }
        return approval;
    }
    async approveApproval(id, adminId, dto) {
        const approval = await this.findOne(id);
        if (approval.status !== 'pending') {
            (0, error_utils_1.throwBadRequest)(`Cannot ${dto.action} an approval that is already ${approval.status}`);
        }
        if (dto.action === approval_dto_1.ApprovalAction.APPROVE) {
            return this.handleApproveAction(approval, adminId, dto.adminNotes);
        }
        else if (dto.action === approval_dto_1.ApprovalAction.REJECT) {
            return this.handleRejectAction(approval, adminId, dto.adminNotes);
        }
        (0, error_utils_1.throwBadRequest)('Invalid approval action');
    }
    async handleApproveAction(approval, adminId, adminNotes) {
        const updatedApproval = await this.prisma.approvalHistory.update({
            where: { id: approval.id },
            data: {
                status: 'approved',
                approvedAt: new Date(),
                notes: adminNotes || approval.notes,
            },
            include: {
                sprint: {
                    include: {
                        coordinator: { select: prisma_selects_1.COORDINATOR_SELECT },
                    },
                },
                requestedByUser: { select: prisma_selects_1.COORDINATOR_SELECT },
            },
        });
        await this.prisma.sprint.update({
            where: { id: approval.sprintId },
            data: { platformAuthorizationStatus: 'approved' },
        });
        await (0, email_utils_1.sendEmailSafely)(() => this.mailerService.sendApprovalResponseEmail(approval.sprint.coordinator.email, approval.sprint.title, true, adminNotes), 'approval-response');
        return updatedApproval;
    }
    async handleRejectAction(approval, adminId, adminNotes) {
        const updatedApproval = await this.prisma.approvalHistory.update({
            where: { id: approval.id },
            data: {
                status: 'rejected',
                approvedAt: new Date(),
                notes: adminNotes || approval.notes,
            },
            include: {
                sprint: {
                    include: {
                        coordinator: { select: prisma_selects_1.COORDINATOR_SELECT },
                    },
                },
                requestedByUser: { select: prisma_selects_1.COORDINATOR_SELECT },
            },
        });
        await this.prisma.sprint.update({
            where: { id: approval.sprintId },
            data: { platformAuthorizationStatus: 'rejected' },
        });
        await (0, email_utils_1.sendEmailSafely)(() => this.mailerService.sendApprovalResponseEmail(approval.sprint.coordinator.email, approval.sprint.title, false, adminNotes), 'approval-response');
        return updatedApproval;
    }
};
exports.ApprovalsService = ApprovalsService;
exports.ApprovalsService = ApprovalsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService])
], ApprovalsService);
//# sourceMappingURL=approvals.service.js.map