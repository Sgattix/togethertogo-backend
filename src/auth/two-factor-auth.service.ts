import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import * as speakeasy from 'speakeasy';
import * as QRCode from 'qrcode';
import * as bcrypt from 'bcrypt';
import { PrismaService } from '../prisma/prisma.service';

interface GenerateTwoFactorSetupResponse {
  secret: string;
  qrCode: string;
  backupCodes: string[];
}

@Injectable()
export class TwoFactorAuthService {
  private readonly logger = new Logger(TwoFactorAuthService.name);
  private readonly BACKUP_CODES_COUNT = 10;

  constructor(private prisma: PrismaService) {}

  /**
   * Generate TOTP secret and QR code for initial 2FA setup
   */
  async generateTwoFactorSetup(
    userId: string,
    userEmail: string,
  ): Promise<GenerateTwoFactorSetupResponse> {
    // Generate secret
    const secret = speakeasy.generateSecret({
      name: `TogetherToGo (${userEmail})`,
      issuer: 'TogetherToGo',
      length: 32, // Longer secret for better security
    });

    // Generate QR code
    const qrCode = await QRCode.toDataURL(secret.otpauth_url);

    // Generate backup codes
    const backupCodes = this.generateBackupCodes(this.BACKUP_CODES_COUNT);

    return {
      secret: secret.base32,
      qrCode,
      backupCodes,
    };
  }

  /**
   * Verify TOTP token
   */
  verifyTotpToken(secret: string, token: string): boolean {
    try {
      return speakeasy.totp.verify({
        secret: secret,
        encoding: 'base32',
        token: token,
        window: 2, // Allow 2 time windows (±30 seconds)
      });
    } catch (error) {
      this.logger.error('Error verifying TOTP token', error);
      return false;
    }
  }

  /**
   * Enable 2FA for a user
   */
  async enableTwoFactorAuth(
    userId: string,
    totpSecret: string,
    backupCodes: string[],
  ): Promise<void> {
    // Hash backup codes before storing
    const hashedBackupCodes = await Promise.all(
      backupCodes.map((code) => bcrypt.hash(code, 10)),
    );

    // Encrypt the TOTP secret (in a real app, you'd use proper encryption)
    // For now, we'll store it as-is, but in production, use a proper encryption library
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
    } else {
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

  /**
   * Disable 2FA for a user
   */
  async disableTwoFactorAuth(userId: string): Promise<void> {
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

  /**
   * Get 2FA status for a user
   */
  async getTwoFactorStatus(userId: string): Promise<{
    isEnabled: boolean;
    backupCodesRemaining: number;
  }> {
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

  /**
   * Verify 2FA token (TOTP or backup code)
   */
  async verifyTwoFactorToken(
    userId: string,
    token: string,
  ): Promise<{ valid: boolean; type: 'totp' | 'backup' | null }> {
    const auth = await this.prisma.twoFactorAuth.findUnique({
      where: { userId },
    });

    if (!auth || !auth.isEnabled) {
      throw new BadRequestException('2FA not enabled for this user');
    }

    // Remove any spaces from token
    const cleanToken = token.replace(/\s/g, '');

    // First try TOTP verification
    if (auth.totpSecret && this.verifyTotpToken(auth.totpSecret, cleanToken)) {
      return { valid: true, type: 'totp' };
    }

    // If TOTP fails, try backup codes
    if (auth.backupCodes) {
      const result = await this.verifyBackupCode(userId, cleanToken);
      if (result) {
        return { valid: true, type: 'backup' };
      }
    }

    return { valid: false, type: null };
  }

  /**
   * Verify and consume a backup code
   */
  private async verifyBackupCode(
    userId: string,
    code: string,
  ): Promise<boolean> {
    const auth = await this.prisma.twoFactorAuth.findUnique({
      where: { userId },
    });

    if (!auth || !auth.backupCodes) {
      return false;
    }

    const backupCodes = JSON.parse(auth.backupCodes) as string[];
    const usedCodes = auth.backupCodesUsed
      ? JSON.parse(auth.backupCodesUsed)
      : [];

    // Check if code matches any of the hashed backup codes and hasn't been used
    for (let i = 0; i < backupCodes.length; i++) {
      if (!usedCodes.includes(i)) {
        // Code at index i hasn't been used yet
        const codeMatch = await bcrypt.compare(code, backupCodes[i]);
        if (codeMatch) {
          // Mark this code as used
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

  /**
   * Generate new backup codes
   */
  private generateBackupCodes(count: number): string[] {
    const codes: string[] = [];
    for (let i = 0; i < count; i++) {
      // Generate 8-digit backup codes
      const code = Math.random().toString(36).substring(2, 10).toUpperCase();
      codes.push(code.padEnd(8, '0'));
    }
    return codes;
  }

  /**
   * Regenerate backup codes
   */
  async regenerateBackupCodes(userId: string): Promise<string[]> {
    const auth = await this.prisma.twoFactorAuth.findUnique({
      where: { userId },
    });

    if (!auth) {
      throw new BadRequestException('2FA not setup for this user');
    }

    const newBackupCodes = this.generateBackupCodes(this.BACKUP_CODES_COUNT);
    const hashedBackupCodes = await Promise.all(
      newBackupCodes.map((code) => bcrypt.hash(code, 10)),
    );

    await this.prisma.twoFactorAuth.update({
      where: { userId },
      data: {
        backupCodes: JSON.stringify(hashedBackupCodes),
        backupCodesUsed: JSON.stringify([]),
      },
    });

    return newBackupCodes;
  }
}
