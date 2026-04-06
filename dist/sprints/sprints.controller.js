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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SprintsController = void 0;
const common_1 = require("@nestjs/common");
const sprints_service_1 = require("./sprints.service");
const sprint_dto_1 = require("./dto/sprint.dto");
const task_dto_1 = require("./dto/task.dto");
const auth_service_1 = require("../auth/auth.service");
let SprintsController = class SprintsController {
    constructor(sprintsService, authService) {
        this.sprintsService = sprintsService;
        this.authService = authService;
    }
    async getUser(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new Error('Missing authentication');
        }
        return this.authService.validateSession(sessionId);
    }
    async create(createSprintDto, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.create(createSprintDto, user.id);
    }
    async findAll(filters) {
        return this.sprintsService.findAll(filters);
    }
    async findOne(id) {
        return this.sprintsService.findOne(id);
    }
    async update(id, updateSprintDto, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.update(id, updateSprintDto, user);
    }
    async delete(id, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.delete(id, user);
    }
    async createTask(sprintId, createTaskDto, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.createTask(sprintId, createTaskDto, user);
    }
    async updateTask(sprintId, taskId, updateTaskDto, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.updateTask(sprintId, taskId, updateTaskDto, user);
    }
    async deleteTask(sprintId, taskId, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.deleteTask(sprintId, taskId, user);
    }
    async requestApproval(sprintId, data, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.requestApproval(sprintId, user, data);
    }
    async approve(sprintId, data, authHeader) {
        const user = await this.getUser(authHeader);
        return this.sprintsService.approveRequest(sprintId, data.action, user);
    }
};
exports.SprintsController = SprintsController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sprint_dto_1.CreateSprintDto, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [sprint_dto_1.FilterSprintsDto]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sprint_dto_1.UpdateSprintDto, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "delete", null);
__decorate([
    (0, common_1.Post)(':sprintId/tasks'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('sprintId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, task_dto_1.CreateTaskDto, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "createTask", null);
__decorate([
    (0, common_1.Put)(':sprintId/tasks/:taskId'),
    __param(0, (0, common_1.Param)('sprintId')),
    __param(1, (0, common_1.Param)('taskId')),
    __param(2, (0, common_1.Body)()),
    __param(3, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, task_dto_1.UpdateTaskDto, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':sprintId/tasks/:taskId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    __param(0, (0, common_1.Param)('sprintId')),
    __param(1, (0, common_1.Param)('taskId')),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Post)(':id/request-approval'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sprint_dto_1.RequestApprovalDto, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "requestApproval", null);
__decorate([
    (0, common_1.Post)(':id/approve'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, sprint_dto_1.ApproveApprovalDto, String]),
    __metadata("design:returntype", Promise)
], SprintsController.prototype, "approve", null);
exports.SprintsController = SprintsController = __decorate([
    (0, common_1.Controller)({ version: '1', path: 'sprints' }),
    __metadata("design:paramtypes", [sprints_service_1.SprintsService,
        auth_service_1.AuthService])
], SprintsController);
//# sourceMappingURL=sprints.controller.js.map