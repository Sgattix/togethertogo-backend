import { PrismaService } from '../prisma/prisma.service';
interface GenerateTwoFactorSetupResponse {
    secret: string;
    qrCode: string;
    backupCodes: string[];
}
export declare class TwoFactorAuthService {
    private prisma;
    private readonly logger;
    private readonly BACKUP_CODES_COUNT;
    constructor(prisma: PrismaService);
    generateTwoFactorSetup(userId: string, userEmail: string): Promise<GenerateTwoFactorSetupResponse>;
    verifyTotpToken(secret: string, token: string): boolean;
    enableTwoFactorAuth(userId: string, totpSecret: string, backupCodes: string[]): Promise<void>;
    disableTwoFactorAuth(userId: string): Promise<void>;
    getTwoFactorStatus(userId: string): Promise<{
        isEnabled: boolean;
        backupCodesRemaining: number;
    }>;
    verifyTwoFactorToken(userId: string, token: string): Promise<{
        valid: boolean;
        type: 'totp' | 'backup' | null;
    }>;
    private verifyBackupCode;
    private generateBackupCodes;
    regenerateBackupCodes(userId: string): Promise<string[]>;
}
export {};
