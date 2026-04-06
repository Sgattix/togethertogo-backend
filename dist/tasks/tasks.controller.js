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
exports.TasksController = void 0;
const common_1 = require("@nestjs/common");
const tasks_service_1 = require("./tasks.service");
const auth_service_1 = require("../auth/auth.service");
const task_dto_1 = require("./dto/task.dto");
let TasksController = class TasksController {
    constructor(tasksService, authService) {
        this.tasksService = tasksService;
        this.authService = authService;
    }
    async getUserFromAuth(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        return this.authService.validateSession(sessionId);
    }
    async createTask(authHeader, createTaskDto) {
        const user = await this.getUserFromAuth(authHeader);
        return this.tasksService.createTask(user.id, createTaskDto);
    }
    async updateTask(authHeader, taskId, updateTaskDto) {
        const user = await this.getUserFromAuth(authHeader);
        return this.tasksService.updateTask(user.id, taskId, updateTaskDto);
    }
    async deleteTask(authHeader, taskId) {
        const user = await this.getUserFromAuth(authHeader);
        return this.tasksService.deleteTask(user.id, taskId);
    }
    async getTask(taskId) {
        return this.tasksService.getTaskById(taskId);
    }
    async addComment(authHeader, taskId, createCommentDto) {
        const user = await this.getUserFromAuth(authHeader);
        return this.tasksService.addComment(user.id, taskId, createCommentDto);
    }
    async getComments(taskId) {
        return this.tasksService.getComments(taskId);
    }
    async getActivities(taskId) {
        return this.tasksService.getActivities(taskId);
    }
};
exports.TasksController = TasksController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, task_dto_1.CreateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "createTask", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, task_dto_1.UpdateTaskDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "updateTask", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "deleteTask", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getTask", null);
__decorate([
    (0, common_1.Post)(':id/comments'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, task_dto_1.CreateCommentDto]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "addComment", null);
__decorate([
    (0, common_1.Get)(':id/comments'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getComments", null);
__decorate([
    (0, common_1.Get)(':id/activities'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TasksController.prototype, "getActivities", null);
exports.TasksController = TasksController = __decorate([
    (0, common_1.Controller)({ version: '1', path: 'tasks' }),
    __metadata("design:paramtypes", [tasks_service_1.TasksService,
        auth_service_1.AuthService])
], TasksController);
//# sourceMappingURL=tasks.controller.js.map