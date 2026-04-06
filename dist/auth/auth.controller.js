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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDto) {
        return this.authService.register(registerDto);
    }
    async verifyEmail(verifyEmailDto) {
        return this.authService.verifyEmail(verifyEmailDto.email, verifyEmailDto.token);
    }
    async resendVerification(resendDto) {
        return this.authService.resendVerificationToken(resendDto.email);
    }
    async login(loginDto, req) {
        const userAgent = req.headers['user-agent'] || '';
        const ipAddress = req.headers['x-forwarded-for']?.split(',')[0] ||
            req.socket.remoteAddress ||
            'unknown';
        return this.authService.login(loginDto, userAgent, ipAddress);
    }
    async firstUser() {
        const isFirstUser = await this.authService.isFirstUser();
        return { isFirstUser };
    }
    async validateSession(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const user = await this.authService.validateSession(sessionId);
        return { user };
    }
    async logout(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (sessionId) {
            await this.authService.logout(sessionId);
        }
        return { message: 'Logged out' };
    }
    async forgotPassword(forgotPasswordDto) {
        return this.authService.forgotPassword(forgotPasswordDto.email);
    }
    async resetPassword(resetPasswordDto) {
        return this.authService.resetPassword(resetPasswordDto.email, resetPasswordDto.token, resetPasswordDto.password);
    }
    async getActiveSessions(authHeader, req) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.getActiveSessions(userId, sessionId);
    }
    async logoutSession(authHeader, sessionId) {
        const currentSessionId = authHeader?.replace('Bearer ', '');
        if (!currentSessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(currentSessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.logoutSession(userId, sessionId);
    }
    async logoutAllDevices(authHeader, body) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.logoutAllDevices(userId);
    }
    async verify2FACode(verifyTwoFactorDto, req) {
        const userAgent = req.headers['user-agent'] || '';
        const ipAddress = req.headers['x-forwarded-for']?.split(',')[0] ||
            req.socket.remoteAddress ||
            'unknown';
        return this.authService.verify2FACode(verifyTwoFactorDto.sessionToken, verifyTwoFactorDto.code, userAgent, ipAddress);
    }
    async setupTwoFactorAuth(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.setUpTwoFactorAuth(userId);
    }
    async confirmTwoFactorSetup(authHeader, enableTwoFactorDto) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        const backupCodes = enableTwoFactorDto.backupCodes || [];
        return this.authService.confirmTwoFactorSetup(userId, enableTwoFactorDto.secret, enableTwoFactorDto.totpToken, backupCodes);
    }
    async getTwoFactorStatus(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.getTwoFactorStatus(userId);
    }
    async disableTwoFactorAuth(authHeader, disableTwoFactorDto) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new common_1.UnauthorizedException('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.disableTwoFactorAuth(userId, disableTwoFactorDto.password, disableTwoFactorDto.totpCode);
    }
    async regenerateBackupCodes(authHeader) {
        const sessionId = authHeader?.replace('Bearer ', '');
        if (!sessionId) {
            throw new Error('Missing session token');
        }
        const validationResult = await this.authService.validateAndRefreshSession(sessionId);
        if (!validationResult.isValid) {
            throw new Error('Invalid or expired session');
        }
        const userId = validationResult.user.id;
        return this.authService.regenerateBackupCodes(userId);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.RegisterDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('verify-email'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyEmailDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyEmail", null);
__decorate([
    (0, common_1.Post)('resend-verification'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResendVerificationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resendVerification", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('first-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "firstUser", null);
__decorate([
    (0, common_1.Get)('session'),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "validateSession", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Post)('forgot-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ForgotPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('sessions'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getActiveSessions", null);
__decorate([
    (0, common_1.Delete)('sessions/:sessionId'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Param)('sessionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutSession", null);
__decorate([
    (0, common_1.Post)('logout-all-devices'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.LogoutAllDevicesDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "logoutAllDevices", null);
__decorate([
    (0, common_1.Post)('2fa/verify'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.VerifyTwoFactorDto, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verify2FACode", null);
__decorate([
    (0, common_1.Post)('2fa/setup'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "setupTwoFactorAuth", null);
__decorate([
    (0, common_1.Post)('2fa/confirm'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.EnableTwoFactorDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "confirmTwoFactorSetup", null);
__decorate([
    (0, common_1.Get)('2fa/status'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "getTwoFactorStatus", null);
__decorate([
    (0, common_1.Post)('2fa/disable'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, auth_dto_1.DisableTwoFactorDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "disableTwoFactorAuth", null);
__decorate([
    (0, common_1.Post)('2fa/regenerate-backup-codes'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Headers)('authorization')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "regenerateBackupCodes", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)({ version: '1', path: 'auth' }),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map