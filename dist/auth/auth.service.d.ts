import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { TwoFactorAuthService } from './two-factor-auth.service';
import { LoginDto, RegisterDto, AuthResponseDto, SessionResponseDto, InterimLoginResponseDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private mailer;
    private twoFactorAuthService;
    private jwtService;
    private configService;
    private readonly logger;
    constructor(prisma: PrismaService, mailer: MailerService, twoFactorAuthService: TwoFactorAuthService, jwtService: JwtService, configService: ConfigService);
    private generateVerificationToken;
    register(data: RegisterDto): Promise<{
        email: string;
        message: string;
    }>;
    verifyEmail(email: string, token: string): Promise<AuthResponseDto>;
    resendVerificationToken(email: string): Promise<{
        message: string;
    }>;
    login(data: LoginDto, userAgent?: string, ipAddress?: string): Promise<AuthResponseDto | InterimLoginResponseDto>;
    private createSession;
    private parseUserAgent;
    validateSession(sessionId: string): Promise<any>;
    logout(sessionId: string): Promise<void>;
    isFirstUser(): Promise<boolean>;
    forgotPassword(email: string): Promise<{
        message: string;
    }>;
    resetPassword(email: string, token: string, newPassword: string): Promise<{
        message: string;
    }>;
    changeEmail(userId: string, newEmail: string, password: string): Promise<{
        message: string;
    }>;
    verifyEmailChange(userId: string, token: string): Promise<{
        message: string;
    }>;
    changePassword(userId: string, currentPassword: string, newPassword: string): Promise<{
        message: string;
    }>;
    deleteAccount(userId: string, password: string, forceDeleteSprints?: boolean): Promise<{
        message: string;
    }>;
    getActiveSessions(userId: string, currentSessionId: string): Promise<SessionResponseDto>;
    logoutSession(userId: string, sessionId: string): Promise<{
        message: string;
    }>;
    logoutAllDevices(userId: string): Promise<{
        message: string;
    }>;
    updateSessionActivity(sessionId: string): Promise<void>;
    validateAndRefreshSession(sessionId: string): Promise<{
        isValid: boolean;
        user?: any;
    }>;
    verify2FACode(interimToken: string, code: string, userAgent?: string, ipAddress?: string): Promise<AuthResponseDto>;
    setUpTwoFactorAuth(userId: string): Promise<{
        secret: string;
        qrCode: string;
        backupCodes: string[];
    }>;
    confirmTwoFactorSetup(userId: string, totpSecret: string, totpToken: string, backupCodes: string[]): Promise<{
        message: string;
    }>;
    disableTwoFactorAuth(userId: string, password: string, totpCode?: string): Promise<{
        message: string;
    }>;
    getTwoFactorStatus(userId: string): Promise<{
        isEnabled: boolean;
        backupCodesRemaining: number;
    }>;
    regenerateBackupCodes(userId: string): Promise<{
        backupCodes: string[];
        message: string;
    }>;
}
