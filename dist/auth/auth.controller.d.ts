import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto, RegisterDto, VerifyEmailDto, ResendVerificationDto, ForgotPasswordDto, ResetPasswordDto, LogoutAllDevicesDto, EnableTwoFactorDto, VerifyTwoFactorDto, DisableTwoFactorDto } from './dto/auth.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(registerDto: RegisterDto): Promise<{
        email: string;
        message: string;
    }>;
    verifyEmail(verifyEmailDto: VerifyEmailDto): Promise<import("./dto/auth.dto").AuthResponseDto>;
    resendVerification(resendDto: ResendVerificationDto): Promise<{
        message: string;
    }>;
    login(loginDto: LoginDto, req: Request): Promise<import("./dto/auth.dto").AuthResponseDto | import("./dto/auth.dto").InterimLoginResponseDto>;
    firstUser(): Promise<{
        isFirstUser: boolean;
    }>;
    validateSession(authHeader: string): Promise<{
        user: any;
    }>;
    logout(authHeader: string): Promise<{
        message: string;
    }>;
    forgotPassword(forgotPasswordDto: ForgotPasswordDto): Promise<{
        message: string;
    }>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<{
        message: string;
    }>;
    getActiveSessions(authHeader: string, req: Request): Promise<import("./dto/auth.dto").SessionResponseDto>;
    logoutSession(authHeader: string, sessionId: string): Promise<{
        message: string;
    }>;
    logoutAllDevices(authHeader: string, body?: LogoutAllDevicesDto): Promise<{
        message: string;
    }>;
    verify2FACode(verifyTwoFactorDto: VerifyTwoFactorDto, req: Request): Promise<import("./dto/auth.dto").AuthResponseDto>;
    setupTwoFactorAuth(authHeader: string): Promise<{
        secret: string;
        qrCode: string;
        backupCodes: string[];
    }>;
    confirmTwoFactorSetup(authHeader: string, enableTwoFactorDto: EnableTwoFactorDto): Promise<{
        message: string;
    }>;
    getTwoFactorStatus(authHeader: string): Promise<{
        isEnabled: boolean;
        backupCodesRemaining: number;
    }>;
    disableTwoFactorAuth(authHeader: string, disableTwoFactorDto: DisableTwoFactorDto): Promise<{
        message: string;
    }>;
    regenerateBackupCodes(authHeader: string): Promise<{
        backupCodes: string[];
        message: string;
    }>;
}
