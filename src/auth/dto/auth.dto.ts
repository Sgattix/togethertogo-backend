import {
  IsEmail,
  IsString,
  MinLength,
  IsOptional,
  IsBoolean,
} from 'class-validator';

export class LoginDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class RegisterDto {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(6)
  password: string;

  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  role?: string;

  @IsOptional()
  @IsString()
  skills?: string;
}

export class VerifyEmailDto {
  @IsEmail()
  email: string;

  @IsString()
  token: string;
}

export class ResendVerificationDto {
  @IsEmail()
  email: string;
}

export class ForgotPasswordDto {
  @IsEmail()
  email: string;
}

export class ResetPasswordDto {
  @IsEmail()
  email: string;

  @IsString()
  token: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class AuthResponseDto {
  sessionId: string;
  user: {
    id: string;
    email: string;
    name: string;
    role: string;
  };
  expiresAt: string;
}

// Profile DTOs
export class UpdateProfileDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  skills?: string;

  @IsOptional()
  @IsBoolean()
  emailVisible?: boolean;
}

export class ChangeEmailDto {
  @IsEmail()
  newEmail: string;

  @IsString()
  @MinLength(6)
  password: string;
}

export class VerifyEmailChangeDto {
  @IsString()
  token: string;
}

export class ChangePasswordDto {
  @IsString()
  @MinLength(6)
  currentPassword: string;

  @IsString()
  @MinLength(6)
  newPassword: string;
}

export class DeleteAccountDto {
  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsBoolean()
  forceDeleteSprints?: boolean;
}

// Session Management DTOs
export class SessionDto {
  id: string;
  deviceInfo?: any; // Parsed device information
  ipAddress?: string;
  location?: any; // Parsed location information
  lastActivityAt: string;
  createdAt: string;
  expiresAt: string;
  isCurrent?: boolean;
}

export class SessionResponseDto {
  sessions: SessionDto[];
  currentSessionId: string;
}

export class LogoutAllDevicesDto {
  @IsOptional()
  @IsString()
  password?: string; // Optional for extra security
}

// Two-Factor Authentication DTOs
export class GenerateTwoFactorSetupDto {
  secret: string;
  qrCode: string;
  backupCodes: string[];
}

export class EnableTwoFactorDto {
  @IsString()
  totpToken: string;

  @IsString()
  secret: string;
}

export class VerifyTwoFactorDto {
  @IsString()
  email: string;

  @IsString()
  sessionToken: string; // Temporary session after password verification

  @IsString()
  code: string; // TOTP code or backup code
}

export class DisableTwoFactorDto {
  @IsString()
  @MinLength(6)
  password: string;

  @IsOptional()
  @IsString()
  totpCode?: string; // Optional TOTP code for extra verification
}

export class TwoFactorStatusDto {
  isEnabled: boolean;
  backupCodesRemaining: number;
}

export class BackupCodesResponseDto {
  backupCodes: string[];
  message: string;
}

export class InterimLoginResponseDto {
  interim_token: string;
  message: string;
  requires2FA: boolean;
}
