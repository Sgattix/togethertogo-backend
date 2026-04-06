export declare class LoginDto {
    email: string;
    password: string;
}
export declare class RegisterDto {
    email: string;
    password: string;
    name: string;
    role?: string;
    skills?: string;
}
export declare class VerifyEmailDto {
    email: string;
    token: string;
}
export declare class ResendVerificationDto {
    email: string;
}
export declare class ForgotPasswordDto {
    email: string;
}
export declare class ResetPasswordDto {
    email: string;
    token: string;
    password: string;
}
export declare class AuthResponseDto {
    sessionId: string;
    user: {
        id: string;
        email: string;
        name: string;
        role: string;
    };
    expiresAt: string;
}
export declare class UpdateProfileDto {
    name?: string;
    skills?: string;
}
export declare class ChangeEmailDto {
    newEmail: string;
    password: string;
}
export declare class VerifyEmailChangeDto {
    token: string;
}
export declare class ChangePasswordDto {
    currentPassword: string;
    newPassword: string;
}
export declare class DeleteAccountDto {
    password: string;
    forceDeleteSprints?: boolean;
}
export declare class SessionDto {
    id: string;
    deviceInfo?: any;
    ipAddress?: string;
    location?: any;
    lastActivityAt: string;
    createdAt: string;
    expiresAt: string;
    isCurrent?: boolean;
}
export declare class SessionResponseDto {
    sessions: SessionDto[];
    currentSessionId: string;
}
export declare class LogoutAllDevicesDto {
    password?: string;
}
export declare class GenerateTwoFactorSetupDto {
    secret: string;
    qrCode: string;
    backupCodes: string[];
}
export declare class EnableTwoFactorDto {
    totpToken: string;
    secret: string;
}
export declare class VerifyTwoFactorDto {
    email: string;
    sessionToken: string;
    code: string;
}
export declare class DisableTwoFactorDto {
    password: string;
    totpCode?: string;
}
export declare class TwoFactorStatusDto {
    isEnabled: boolean;
    backupCodesRemaining: number;
}
export declare class BackupCodesResponseDto {
    backupCodes: string[];
    message: string;
}
export declare class InterimLoginResponseDto {
    interim_token: string;
    message: string;
    requires2FA: boolean;
}
