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
var TwoFactorAuthService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoFactorAuthService = void 0;
const common_1 = require("@nestjs/common");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const bcrypt = require("bcrypt");
const prisma_service_1 = require("../prisma/prisma.service");
let TwoFactorAuthService = TwoFactorAuthService_1 = class TwoFactorAuthService {
    constructor(prisma) {
        this.prisma = prisma;
        this.logger = new common_1.Logger(TwoFactorAuthService_1.name);
        this.BACKUP_CODES_COUNT = 10;
    }
    async generateTwoFactorSetup(userId, userEmail) {
        const secret = speakeasy.generateSecret({
            name: `CivicSprint (${userEmail})`,
            issuer: 'CivicSprint',
            length: 32,
        });
        const qrCode = await QRCode.toDataURL(secret.otpauth_url);
        const backupCodes = this.generateBackupCodes(this.BACKUP_CODES_COUNT);
        return {
            secret: secret.base32,
            qrCode,
            backupCodes,
        };
    }
    verifyTotpToken(secret, token) {
        try {
            return speakeasy.totp.verify({
                secret: secret,
                encoding: 'base32',
                token: token,
                window: 2,
            });
        }
        catch (error) {
            this.logger.error('Error verifying TOTP token', error);
            return false;
        }
    }
    async enableTwoFactorAuth(userId, totpSecret, backupCodes) {
        const hashedBackupCodes = await Promise.all(backupCodes.map((code) => bcrypt.hash(code, 10)));
        const existingAuth = await this.prisma.twoFactorAuth.findUnique({
            where: { userId },
        });
        if (existingAuth) {
            await this.prisma.twoFactorAuth.update({
                where: { userId },
                data: {
                    isEnabled: true,
                    totpSecret,
                    backupCodes: JSON.stringify(hashedBackupCodes),
                    backupCodesUsed: JSON.stringify([]),
                },
            });
        }
        else {
            await this.prisma.twoFactorAuth.create({
                data: {
                    userId,
                    isEnabled: true,
                    totpSecret,
                    backupCodes: JSON.stringify(hashedBackupCodes),
                    backupCodesUsed: JSON.stringify([]),
                },
            });
        }
    }
    async disableTwoFactorAuth(userId) {
        await this.prisma.twoFactorAuth.update({
            where: { userId },
            data: {
                isEnabled: false,
                totpSecret: null,
                backupCodes: null,
                backupCodesUsed: null,
            },
        });
    }
    async getTwoFactorStatus(userId) {
        if (!this.prisma) {
            this.logger.error('Prisma service not initialized');
            return {
                isEnabled: false,
                backupCodesRemaining: 0,
            };
        }
        const auth = await this.prisma.twoFactorAuth.findUnique({
            where: { userId },
        });
        if (!auth) {
            return {
                isEnabled: false,
                backupCodesRemaining: 0,
            };
        }
        let backupCodesRemaining = 0;
        if (auth.backupCodes && auth.backupCodesUsed) {
            const totalCodes = JSON.parse(auth.backupCodes).length;
            const usedCodes = JSON.parse(auth.backupCodesUsed).length;
            backupCodesRemaining = totalCodes - usedCodes;
        }
        return {
            isEnabled: auth.isEnabled,
            backupCodesRemaining,
        };
    }
    async verifyTwoFactorToken(userId, token) {
        const auth = await this.prisma.twoFactorAuth.findUnique({
            where: { userId },
        });
        if (!auth || !auth.isEnabled) {
            throw new common_1.BadRequestException('2FA not enabled for this user');
        }
        const cleanToken = token.replace(/\s/g, '');
        if (auth.totpSecret && this.verifyTotpToken(auth.totpSecret, cleanToken)) {
            return { valid: true, type: 'totp' };
        }
        if (auth.backupCodes) {
            const result = await this.verifyBackupCode(userId, cleanToken);
            if (result) {
                return { valid: true, type: 'backup' };
            }
        }
        return { valid: false, type: null };
    }
    async verifyBackupCode(userId, code) {
        const auth = await this.prisma.twoFactorAuth.findUnique({
            where: { userId },
        });
        if (!auth || !auth.backupCodes) {
            return false;
        }
        const backupCodes = JSON.parse(auth.backupCodes);
        const usedCodes = auth.backupCodesUsed
            ? JSON.parse(auth.backupCodesUsed)
            : [];
        for (let i = 0; i < backupCodes.length; i++) {
            if (!usedCodes.includes(i)) {
                const codeMatch = await bcrypt.compare(code, backupCodes[i]);
                if (codeMatch) {
                    usedCodes.push(i);
                    await this.prisma.twoFactorAuth.update({
                        where: { userId },
                        data: {
                            backupCodesUsed: JSON.stringify(usedCodes),
                        },
                    });
                    return true;
                }
            }
        }
        return false;
    }
    generateBackupCodes(count) {
        const codes = [];
        for (let i = 0; i < count; i++) {
            const code = Math.random().toString(36).substring(2, 10).toUpperCase();
            codes.push(code.padEnd(8, '0'));
        }
        return codes;
    }
    async regenerateBackupCodes(userId) {
        const auth = await this.prisma.twoFactorAuth.findUnique({
            where: { userId },
        });
        if (!auth) {
            throw new common_1.BadRequestException('2FA not setup for this user');
        }
        const newBackupCodes = this.generateBackupCodes(this.BACKUP_CODES_COUNT);
        const hashedBackupCodes = await Promise.all(newBackupCodes.map((code) => bcrypt.hash(code, 10)));
        await this.prisma.twoFactorAuth.update({
            where: { userId },
            data: {
                backupCodes: JSON.stringify(hashedBackupCodes),
                backupCodesUsed: JSON.stringify([]),
            },
        });
        return newBackupCodes;
    }
};
exports.TwoFactorAuthService = TwoFactorAuthService;
exports.TwoFactorAuthService = TwoFactorAuthService = TwoFactorAuthService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], TwoFactorAuthService);
//# sourceMappingURL=two-factor-auth.service.js.map