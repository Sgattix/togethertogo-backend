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
exports.DashboardController = void 0;
const common_1 = require("@nestjs/common");
const dashboard_service_1 = require("./dashboard.service");
const session_guard_1 = require("../auth/guard/session.guard");
let DashboardController = class DashboardController {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
    }
    async getAdminDashboard(req) {
        if (req.user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException('Only admins can access this dashboard');
        }
        return this.dashboardService.getAdminDashboard();
    }
    async getCoordinatorDashboard(req) {
        if (req.user.role !== 'COORDINATOR') {
            throw new common_1.ForbiddenException('Only coordinators can access this dashboard');
        }
        return this.dashboardService.getCoordinatorDashboard(req.user.id);
    }
    async getVolunteerDashboard(req) {
        if (req.user.role !== 'VOLUNTEER') {
            throw new common_1.ForbiddenException('Only volunteers can access this dashboard');
        }
        return this.dashboardService.getVolunteerDashboard(req.user.id);
    }
    async getSprintStats(sprintId, req) {
        if (req.user.role !== 'COORDINATOR' && req.user.role !== 'ADMIN') {
            throw new common_1.ForbiddenException('Only coordinators and admins can view sprint stats');
        }
        return this.dashboardService.getSprintStats(sprintId);
    }
};
exports.DashboardController = DashboardController;
__decorate([
    (0, common_1.Get)('admin'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getAdminDashboard", null);
__decorate([
    (0, common_1.Get)('coordinator'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getCoordinatorDashboard", null);
__decorate([
    (0, common_1.Get)('volunteer'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getVolunteerDashboard", null);
__decorate([
    (0, common_1.Get)('sprint/:sprintId/stats'),
    (0, common_1.UseGuards)(session_guard_1.SessionGuard),
    __param(0, (0, common_1.Param)('sprintId')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], DashboardController.prototype, "getSprintStats", null);
exports.DashboardController = DashboardController = __decorate([
    (0, common_1.Controller)({ version: '1', path: 'dashboard' }),
    __metadata("design:paramtypes", [dashboard_service_1.DashboardService])
], DashboardController);
//# sourceMappingURL=dashboard.controller.js.map