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
exports.VolunteersController = void 0;
const common_1 = require("@nestjs/common");
const volunteers_service_1 = require("./volunteers.service");
const auth_service_1 = require("../auth/auth.service");
const auth_dto_1 = require("../auth/dto/auth.dto");
let VolunteersController = class VolunteersController {
    constructor(volunteersService, authService) {
        this.volunteersService = volunteersService;
        this.authService = authService;
    }
    async findAll(name, skills) {
        return this.volunteersService.findAll({ name, skills });
    }
    async findOne(id) {
        return this.volunteersService.findOne(id);
    }
    async getUserIdFromSession(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.BadRequestException('Missing session token');
        }
        try {
            const user = await this.authService.validateSession(sessionId);
            return user.id;
        }
        catch (error) {
            throw new common_1.BadRequestException('Invalid or expired session');
        }
    }
    async getProfile(authHeader) {
        const userId = await this.getUserIdFromSession(authHeader);
        return this.volunteersService.getProfile(userId);
    }
    async updateProfile(authHeader, data) {
        const userId = await this.getUserIdFromSession(authHeader);
        return this.volunteersService.updateProfile(userId, data);
    }
    async changeEmail(authHeader, data) {
        const userId = await this.getUserIdFromSession(authHeader);
        return this.authService.changeEmail(userId, data.newEmail, data.password);
    }
    async verifyEmailChange(authHeader, data) {
        const userId = await this.getUserIdFromSession(authHeader);
        return this.authService.verifyEmailChange(userId, data.token);
    }
    async changePassword(authHeader, data) {
        const userId = await this.getUserIdFromSession(authHeader);
        return this.authService.changePassword(userId, data.currentPassword, data.newPassword);
    }
    async deleteAccount(authHeader, data) {
        const userId = await this.getUserIdFromSession(authHeader);
        return this.authService.deleteAccount(userId, data.password, data.forceDeleteSprints);
    }
};
exports.VolunteersController = VolunteersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('name')),
    __param(1, (0, common_1.Query)('skills')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('profile/me'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "getProfile", null);
__decorate([
    (0, common_1.Put)('profile/me'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "updateProfile", null);
__decorate([
    (0, common_1.Post)('profile/change-email'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.ChangeEmailDto]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "changeEmail", null);
__decorate([
    (0, common_1.Post)('profile/verify-email-change'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.VerifyEmailChangeDto]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "verifyEmailChange", null);
__decorate([
    (0, common_1.Post)('profile/change-password'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.ChangePasswordDto]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "changePassword", null);
__decorate([
    (0, common_1.Delete)('profile/account'),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.DeleteAccountDto]),
    __metadata("design:returntype", Promise)
], VolunteersController.prototype, "deleteAccount", null);
exports.VolunteersController = VolunteersController = __decorate([
    (0, common_1.Controller)({ version: '1', path: 'volunteers' }),
    __metadata("design:paramtypes", [volunteers_service_1.VolunteersService,
        auth_service_1.AuthService])
], VolunteersController);
//# sourceMappingURL=volunteers.controller.js.map