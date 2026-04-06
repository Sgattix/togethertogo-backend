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
exports.AdminController = void 0;
const common_1 = require("@nestjs/common");
const admin_service_1 = require("./admin.service");
const auth_service_1 = require("../auth/auth.service");
let AdminController = class AdminController {
    constructor(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
    }
    async getAdminUser(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.BadRequestException('Missing session token');
        }
        const user = await this.authService.validateSession(sessionId);
        if (user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException('Only admins can access this endpoint');
        }
        return user;
    }
    async getAllUsers(authHeader, role, accountStatus, search) {
        await this.getAdminUser(authHeader);
        return this.adminService.getAllUsers({
            role,
            accountStatus,
            search,
        });
    }
    async getUserDetails(authHeader, userId) {
        await this.getAdminUser(authHeader);
        return this.adminService.getUserDetails(userId);
    }
    async getUserActivityLogs(authHeader, userId, limit) {
        await this.getAdminUser(authHeader);
        const limitNum = limit ? parseInt(limit, 10) : 50;
        return this.adminService.getUserActivityLogs(userId, limitNum);
    }
    async suspendUser(authHeader, userId, body) {
        const adminUser = await this.getAdminUser(authHeader);
        return this.adminService.suspendUser(adminUser.id, userId, body.reason);
    }
    async reactivateUser(authHeader, userId) {
        const adminUser = await this.getAdminUser(authHeader);
        return this.adminService.reactivateUser(adminUser.id, userId);
    }
    async changeUserRole(authHeader, userId, body) {
        const adminUser = await this.getAdminUser(authHeader);
        return this.adminService.changeUserRole(adminUser.id, userId, body.role);
    }
};
exports.AdminController = AdminController;
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Query)('role')),
    __param(2, (0, common_1.Query)('accountStatus')),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Get)('users/:userId'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUserDetails", null);
__decorate([
    (0, common_1.Get)('users/:userId/activity'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "getUserActivityLogs", null);
__decorate([
    (0, common_1.Post)('users/:userId/suspend'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "suspendUser", null);
__decorate([
    (0, common_1.Post)('users/:userId/reactivate'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "reactivateUser", null);
__decorate([
    (0, common_1.Put)('users/:userId/role'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('userId')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], AdminController.prototype, "changeUserRole", null);
exports.AdminController = AdminController = __decorate([
    (0, common_1.Controller)({ version: '1', path: 'admin' }),
    __metadata("design:paramtypes", [admin_service_1.AdminService,
        auth_service_1.AuthService])
], AdminController);
//# sourceMappingURL=admin.controller.js.map