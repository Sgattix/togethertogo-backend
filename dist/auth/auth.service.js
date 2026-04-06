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
var AuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const prisma_service_1 = require("../prisma/prisma.service");
const mailer_service_1 = require("../mailer/mailer.service");
const two_factor_auth_service_1 = require("./two-factor-auth.service");
let AuthService = AuthService_1 = class AuthService {
    constructor(prisma, mailer, twoFactorAuthService, jwtService, configService) {
        this.prisma = prisma;
        this.mailer = mailer;
        this.twoFactorAuthService = twoFactorAuthService;
        this.jwtService = jwtService;
        this.configService = configService;
        this.logger = new common_1.Logger(AuthService_1.name);
    }
    generateVerificationToken() {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }
    async register(data) {
        const existingUser = await this.prisma.user.findUnique({
            where: { email: data.email },
        });
        if (existingUser) {
            throw new common_1.BadRequestException('Email already registered');
        }
        const userCount = await this.prisma.user.count();
        const requestedRole = (data.role || 'VOLUNTEER').toUpperCase();
        const allowedRoles = ['ADMIN', 'COORDINATOR', 'VOLUNTEER'];
        if (!allowedRoles.includes(requestedRole)) {
            throw new common_1.BadRequestException('Invalid role');
        }
        if (requestedRole === 'ADMIN' && userCount > 0) {
            throw new common_1.BadRequestException('Admin role is reserved for the first registered user');
        }
        const hashedPassword = await bcrypt.hash(data.password, 10);
        const verificationToken = this.generateVerificationToken();
        const verificationTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
        const newUser = await this.prisma.user.create({
            data: {
                email: data.email,
                password: hashedPassword,
                name: data.name,
                role: requestedRole,
                verificationToken,
                verificationTokenExpiresAt,
            },
        });
        if (requestedRole === 'VOLUNTEER') {
            const existingVolunteer = await this.prisma.volunteer.findUnique({
                where: { email: data.email },
            });
            if (existingVolunteer) {
                await this.prisma.volunteer.update({
                    where: { id: existingVolunteer.id },
                    data: {
                        userId: newUser.id,
                        name: data.name,
                    },
                });
            }
            else {
                await this.prisma.volunteer.create({
                    data: {
                        userId: newUser.id,
                        name: data.name,
                        email: data.email,
                        skills: data.skills || null,
                    },
                });
            }
        }
        try {
            const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            const verificationLink = `${frontendUrl}/verify-email?email=${encodeURIComponent(data.email)}&token=${verificationToken}`;
            await this.mailer.sendVerificationEmail({
                to: data.email,
                name: data.name,
                verificationLink,
                verificationCode: verificationToken,
            });
        }
        catch (error) {
            this.logger.error('Failed to send verification email:', error);
        }
        return {
            email: data.email,
            message: 'Registration successful. Please verify your email.',
        };
    }
    async verifyEmail(email, token) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        if (user.accountStatus === 'DELETED') {
            throw new common_1.UnauthorizedException('Account is deleted');
        }
        if (user.emailVerified) {
            throw new common_1.BadRequestException('Email already verified');
        }
        if (user.verificationToken !== token) {
            throw new common_1.BadRequestException('Invalid verification token');
        }
        if (!user.verificationTokenExpiresAt ||
            user.verificationTokenExpiresAt < new Date()) {
            throw new common_1.BadRequestException('Verification token expired');
        }
        const verifiedUser = await this.prisma.user.update({
            where: { id: user.id },
            data: {
                emailVerified: true,
                verificationToken: null,
                verificationTokenExpiresAt: null,
            },
        });
        try {
            await this.mailer.sendWelcomeEmail(verifiedUser.email, verifiedUser.name);
        }
        catch (error) {
            this.logger.error('Failed to send welcome email:', error);
        }
        return this.createSession(verifiedUser.id, verifiedUser);
    }
    async resendVerificationToken(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        if (user.emailVerified) {
            throw new common_1.BadRequestException('Email already verified');
        }
        const verificationToken = this.generateVerificationToken();
        const verificationTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                verificationToken,
                verificationTokenExpiresAt,
            },
        });
        try {
            const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            const verificationLink = `${frontendUrl}/verify-email?email=${encodeURIComponent(email)}&token=${verificationToken}`;
            await this.mailer.sendVerificationEmail({
                to: email,
                name: user.name,
                verificationLink,
                verificationCode: verificationToken,
            });
        }
        catch (error) {
            this.logger.error('Failed to send verification email:', error);
        }
        return {
            message: 'Verification token sent. Check your email.',
        };
    }
    async login(data, userAgent, ipAddress) {
        const user = await this.prisma.user.findUnique({
            where: { email: data.email },
        });
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (user.accountStatus === 'DELETED') {
            throw new common_1.UnauthorizedException('Account is deleted');
        }
        const passwordMatch = await bcrypt.compare(data.password, user.password);
        if (!passwordMatch) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        if (!user.emailVerified) {
            throw new common_1.UnauthorizedException('Email not verified. Please verify your email first.');
        }
        const twoFactorStatus = await this.twoFactorAuthService.getTwoFactorStatus(user.id);
        if (twoFactorStatus.isEnabled) {
            const interimToken = this.jwtService.sign({
                userId: user.id,
                type: 'interim',
            }, {
                secret: this.configService.get('JWT_SECRET') || 'your-secret-key',
                expiresIn: '5m',
            });
            return {
                interim_token: interimToken,
                message: '2FA verification required',
                requires2FA: true,
            };
        }
        return this.createSession(user.id, user, userAgent, ipAddress);
    }
    async createSession(userId, user, userAgent, ipAddress) {
        const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
        const deviceInfo = this.parseUserAgent(userAgent || '');
        const session = await this.prisma.session.create({
            data: {
                userId,
                expiresAt,
                deviceInfo: JSON.stringify(deviceInfo),
                ipAddress: ipAddress || 'unknown',
                lastActivityAt: new Date(),
                updatedAt: new Date(),
            },
        });
        return {
            sessionId: session.id,
            user: {
                id: user.id,
                email: user.email,
                name: user.name,
                role: user.role,
            },
            expiresAt: expiresAt.toISOString(),
        };
    }
    parseUserAgent(userAgent) {
        const deviceInfo = {};
        if (userAgent.includes('Chrome')) {
            deviceInfo.browser = 'Chrome';
        }
        else if (userAgent.includes('Firefox')) {
            deviceInfo.browser = 'Firefox';
        }
        else if (userAgent.includes('Safari')) {
            deviceInfo.browser = 'Safari';
        }
        else if (userAgent.includes('Edge')) {
            deviceInfo.browser = 'Edge';
        }
        if (userAgent.includes('Windows')) {
            deviceInfo.os = 'Windows';
        }
        else if (userAgent.includes('Mac')) {
            deviceInfo.os = 'macOS';
        }
        else if (userAgent.includes('Linux')) {
            deviceInfo.os = 'Linux';
        }
        else if (userAgent.includes('Android')) {
            deviceInfo.os = 'Android';
        }
        else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
            deviceInfo.os = 'iOS';
        }
        if (userAgent.includes('Mobile') ||
            userAgent.includes('Android') ||
            userAgent.includes('iPhone')) {
            deviceInfo.deviceType = 'Mobile';
        }
        else {
            deviceInfo.deviceType = 'Desktop';
        }
        return deviceInfo;
    }
    async validateSession(sessionId) {
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
            include: { user: true },
        });
        if (!session || session.expiresAt < new Date()) {
            throw new common_1.UnauthorizedException('Invalid or expired session');
        }
        if (session.user.accountStatus === 'DELETED') {
            await this.prisma.session.deleteMany({
                where: { id: sessionId },
            });
            throw new common_1.UnauthorizedException('Account is deleted');
        }
        return session.user;
    }
    async logout(sessionId) {
        await this.prisma.session.deleteMany({
            where: { id: sessionId },
        });
    }
    async isFirstUser() {
        const userCount = await this.prisma.user.count();
        return userCount === 0;
    }
    async forgotPassword(email) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user) {
            return {
                message: 'If an account with that email exists, a password reset link has been sent.',
            };
        }
        const resetToken = this.generateVerificationToken();
        const resetTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000);
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                resetToken,
                resetTokenExpiresAt,
            },
        });
        try {
            const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            const resetLink = `${frontendUrl}/reset-password?email=${encodeURIComponent(email)}&token=${resetToken}`;
            await this.mailer.sendPasswordResetEmail({
                to: email,
                name: user.name,
                resetLink,
                resetCode: resetToken,
            });
        }
        catch (error) {
            this.logger.error('Failed to send password reset email:', error);
        }
        return {
            message: 'If an account with that email exists, a password reset link has been sent.',
        };
    }
    async resetPassword(email, token, newPassword) {
        const user = await this.prisma.user.findUnique({
            where: { email },
        });
        if (!user || !user.resetToken) {
            throw new common_1.BadRequestException('Invalid or expired reset token');
        }
        if (user.resetToken !== token) {
            throw new common_1.BadRequestException('Invalid reset token');
        }
        if (!user.resetTokenExpiresAt || user.resetTokenExpiresAt < new Date()) {
            throw new common_1.BadRequestException('Reset token expired');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await this.prisma.user.update({
            where: { id: user.id },
            data: {
                password: hashedPassword,
                resetToken: null,
                resetTokenExpiresAt: null,
            },
        });
        await this.prisma.session.deleteMany({
            where: { userId: user.id },
        });
        try {
            await this.mailer.sendPasswordChangedEmail(user.email, user.name);
        }
        catch (error) {
            this.logger.error('Failed to send password changed email:', error);
        }
        return {
            message: 'Password reset successful. Please log in with your new password.',
        };
    }
    async changeEmail(userId, newEmail, password) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Invalid password');
        }
        const existingUser = await this.prisma.user.findUnique({
            where: { email: newEmail },
        });
        if (existingUser && existingUser.id !== userId) {
            throw new common_1.BadRequestException('Email already in use');
        }
        const emailChangeToken = this.generateVerificationToken();
        const emailChangeTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                pendingEmail: newEmail,
                emailChangeToken,
                emailChangeTokenExpiresAt,
            },
        });
        try {
            const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
            const verificationLink = `${frontendUrl}/verify-email-change?email=${encodeURIComponent(newEmail)}&token=${emailChangeToken}`;
            await this.mailer.sendEmailChangeVerification({
                to: newEmail,
                name: user.name,
                verificationLink,
                verificationCode: emailChangeToken,
            });
        }
        catch (error) {
            this.logger.error('Failed to send email change verification:', error);
        }
        return {
            message: 'Verification email sent to your new email address',
        };
    }
    async verifyEmailChange(userId, token) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!user.pendingEmail) {
            throw new common_1.BadRequestException('No pending email change');
        }
        if (user.emailChangeToken !== token) {
            throw new common_1.BadRequestException('Invalid verification token');
        }
        if (!user.emailChangeTokenExpiresAt ||
            user.emailChangeTokenExpiresAt < new Date()) {
            throw new common_1.BadRequestException('Verification token expired');
        }
        const oldEmail = user.email;
        const newEmail = user.pendingEmail;
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                email: newEmail,
                pendingEmail: null,
                emailChangeToken: null,
                emailChangeTokenExpiresAt: null,
            },
        });
        await this.prisma.volunteer
            .update({
            where: { email: oldEmail },
            data: {
                email: newEmail,
            },
        })
            .catch(() => null);
        try {
            await this.mailer.sendEmailChangedConfirmation(newEmail, user.name);
        }
        catch (error) {
            this.logger.error('Failed to send email change confirmation:', error);
        }
        return {
            message: 'Email changed successfully',
        };
    }
    async changePassword(userId, currentPassword, newPassword) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const passwordMatch = await bcrypt.compare(currentPassword, user.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Current password is incorrect');
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                password: hashedPassword,
            },
        });
        try {
            await this.mailer.sendPasswordChangedEmail(user.email, user.name);
        }
        catch (error) {
            this.logger.error('Failed to send password changed email:', error);
        }
        return {
            message: 'Password changed successfully',
        };
    }
    async deleteAccount(userId, password, forceDeleteSprints = false) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Invalid password');
        }
        const coordinatedSprintsCount = await this.prisma.sprint.count({
            where: { coordinatorId: userId },
        });
        if (coordinatedSprintsCount > 0 && !forceDeleteSprints) {
            throw new common_1.ConflictException({
                message: 'You have coordinated sprints. Confirm to delete your account and those sprints.',
                coordinatedSprintsCount,
            });
        }
        await this.prisma.session.deleteMany({
            where: { userId },
        });
        await this.prisma.volunteer.deleteMany({
            where: { email: user.email },
        });
        if (coordinatedSprintsCount > 0) {
            await this.prisma.sprint.deleteMany({
                where: { coordinatorId: userId },
            });
        }
        const deletedPassword = await bcrypt.hash(`deleted-${userId}-${Date.now()}`, 10);
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                accountStatus: 'DELETED',
                deletedAt: new Date(),
                password: deletedPassword,
                emailVerified: false,
                verificationToken: null,
                verificationTokenExpiresAt: null,
                resetToken: null,
                resetTokenExpiresAt: null,
                emailChangeToken: null,
                emailChangeTokenExpiresAt: null,
                pendingEmail: null,
            },
        });
        return {
            message: 'Account deleted successfully',
        };
    }
    async getActiveSessions(userId, currentSessionId) {
        const sessions = await this.prisma.session.findMany({
            where: {
                userId,
                expiresAt: {
                    gt: new Date(),
                },
            },
            orderBy: {
                lastActivityAt: 'desc',
            },
        });
        const sessionDtos = sessions.map((session) => ({
            id: session.id,
            deviceInfo: session.deviceInfo ? JSON.parse(session.deviceInfo) : null,
            ipAddress: session.ipAddress || undefined,
            location: session.location ? JSON.parse(session.location) : null,
            lastActivityAt: session.lastActivityAt.toISOString(),
            createdAt: session.createdAt.toISOString(),
            expiresAt: session.expiresAt.toISOString(),
            isCurrent: session.id === currentSessionId,
        }));
        return {
            sessions: sessionDtos,
            currentSessionId,
        };
    }
    async logoutSession(userId, sessionId) {
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
        });
        if (!session) {
            throw new common_1.NotFoundException('Session not found');
        }
        if (session.userId !== userId) {
            throw new common_1.BadRequestException('Cannot logout from another user session');
        }
        await this.prisma.session.delete({
            where: { id: sessionId },
        });
        return {
            message: 'Logged out from device successfully',
        };
    }
    async logoutAllDevices(userId) {
        await this.prisma.session.deleteMany({
            where: { userId },
        });
        return {
            message: 'Logged out from all devices successfully',
        };
    }
    async updateSessionActivity(sessionId) {
        await this.prisma.session.update({
            where: { id: sessionId },
            data: {
                lastActivityAt: new Date(),
                updatedAt: new Date(),
            },
        });
    }
    async validateAndRefreshSession(sessionId) {
        const session = await this.prisma.session.findUnique({
            where: { id: sessionId },
            include: { user: true },
        });
        if (!session || session.expiresAt < new Date()) {
            return { isValid: false };
        }
        if (session.user.accountStatus === 'DELETED') {
            await this.prisma.session.deleteMany({
                where: { id: sessionId },
            });
            return { isValid: false };
        }
        await this.updateSessionActivity(sessionId);
        return {
            isValid: true,
            user: session.user,
        };
    }
    async verify2FACode(interimToken, code, userAgent, ipAddress) {
        try {
            const decoded = this.jwtService.verify(interimToken, {
                secret: this.configService.get('JWT_SECRET') || 'your-secret-key',
            });
            if (decoded.type !== 'interim') {
                throw new common_1.UnauthorizedException('Invalid token type');
            }
            const userId = decoded.userId;
            const user = await this.prisma.user.findUnique({
                where: { id: userId },
            });
            if (!user) {
                throw new common_1.UnauthorizedException('User not found');
            }
            const verification = await this.twoFactorAuthService.verifyTwoFactorToken(userId, code);
            if (!verification.valid) {
                throw new common_1.BadRequestException('Invalid 2FA code');
            }
            return this.createSession(userId, user, userAgent, ipAddress);
        }
        catch (error) {
            if (error.name === 'TokenExpiredError') {
                throw new common_1.UnauthorizedException('2FA token expired');
            }
            throw error;
        }
    }
    async setUpTwoFactorAuth(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.twoFactorAuthService.generateTwoFactorSetup(userId, user.email);
    }
    async confirmTwoFactorSetup(userId, totpSecret, totpToken, backupCodes) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (!this.twoFactorAuthService.verifyTotpToken(totpSecret, totpToken)) {
            throw new common_1.BadRequestException('Invalid TOTP token. Please try again with a code from your authenticator app.');
        }
        await this.twoFactorAuthService.enableTwoFactorAuth(userId, totpSecret, backupCodes);
        return {
            message: '2FA has been enabled successfully. Save your backup codes in a safe place.',
        };
    }
    async disableTwoFactorAuth(userId, password, totpCode) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const passwordMatch = await bcrypt.compare(password, user.password);
        if (!passwordMatch) {
            throw new common_1.BadRequestException('Invalid password');
        }
        if (totpCode) {
            const twoFactorStatus = await this.twoFactorAuthService.getTwoFactorStatus(userId);
            if (twoFactorStatus.isEnabled) {
                const verification = await this.twoFactorAuthService.verifyTwoFactorToken(userId, totpCode);
                if (!verification.valid) {
                    throw new common_1.BadRequestException('Invalid 2FA code');
                }
            }
        }
        await this.twoFactorAuthService.disableTwoFactorAuth(userId);
        return {
            message: '2FA has been disabled',
        };
    }
    async getTwoFactorStatus(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return this.twoFactorAuthService.getTwoFactorStatus(userId);
    }
    async regenerateBackupCodes(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const backupCodes = await this.twoFactorAuthService.regenerateBackupCodes(userId);
        return {
            backupCodes,
            message: 'Backup codes regenerated successfully. Save them in a safe place.',
        };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = AuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        mailer_service_1.MailerService,
        two_factor_auth_service_1.TwoFactorAuthService,
        jwt_1.JwtService,
        config_1.ConfigService])
], AuthService);
//# sourceMappingURL=auth.service.js.map