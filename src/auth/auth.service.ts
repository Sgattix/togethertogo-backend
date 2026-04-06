import {
  Injectable,
  BadRequestException,
  UnauthorizedException,
  Logger,
  NotFoundException,
  ConflictException,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '../prisma/prisma.service';
import { MailerService } from '../mailer/mailer.service';
import { TwoFactorAuthService } from './two-factor-auth.service';
import {
  LoginDto,
  RegisterDto,
  AuthResponseDto,
  SessionDto,
  SessionResponseDto,
  InterimLoginResponseDto,
} from './dto/auth.dto';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private prisma: PrismaService,
    private mailer: MailerService,
    private twoFactorAuthService: TwoFactorAuthService,
    private jwtService: JwtService,
    private configService: ConfigService,
  ) {}

  private generateVerificationToken(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  async register(data: RegisterDto): Promise<{
    email: string;
    message: string;
  }> {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    const userCount = await this.prisma.user.count();
    const requestedRole = (data.role || 'VOLUNTEER').toUpperCase();
    const allowedRoles = ['ADMIN', 'COORDINATOR', 'VOLUNTEER'];

    if (!allowedRoles.includes(requestedRole)) {
      throw new BadRequestException('Invalid role');
    }

    if (requestedRole === 'ADMIN' && userCount > 0) {
      throw new BadRequestException(
        'Admin role is reserved for the first registered user',
      );
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);
    const verificationToken = this.generateVerificationToken();
    const verificationTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

    const newUser = await this.prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        name: data.name,
        role: requestedRole as any,
        verificationToken,
        verificationTokenExpiresAt,
      },
    });

    if (requestedRole === 'VOLUNTEER') {
      // Check if a volunteer with this email already exists
      const existingVolunteer = await this.prisma.volunteer.findUnique({
        where: { email: data.email },
      });

      if (existingVolunteer) {
        // Link the existing volunteer to the new user
        await this.prisma.volunteer.update({
          where: { id: existingVolunteer.id },
          data: {
            userId: newUser.id,
            name: data.name, // Update name in case it changed
          },
        });
      } else {
        // Create a new volunteer record
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
    } catch (error) {
      this.logger.error('Failed to send verification email:', error);
    }

    return {
      email: data.email,
      message: 'Registration successful. Please verify your email.',
    };
  }

  async verifyEmail(email: string, token: string): Promise<AuthResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.accountStatus === 'DELETED') {
      throw new UnauthorizedException('Account is deleted');
    }

    if (user.emailVerified) {
      throw new BadRequestException('Email already verified');
    }

    if (user.verificationToken !== token) {
      throw new BadRequestException('Invalid verification token');
    }

    if (
      !user.verificationTokenExpiresAt ||
      user.verificationTokenExpiresAt < new Date()
    ) {
      throw new BadRequestException('Verification token expired');
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
    } catch (error) {
      this.logger.error('Failed to send welcome email:', error);
    }

    return this.createSession(verifiedUser.id, verifiedUser);
  }

  async resendVerificationToken(email: string): Promise<{
    message: string;
  }> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new UnauthorizedException('User not found');
    }

    if (user.emailVerified) {
      throw new BadRequestException('Email already verified');
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

    // Send email with verification token
    try {
      const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:3000';
      const verificationLink = `${frontendUrl}/verify-email?email=${encodeURIComponent(email)}&token=${verificationToken}`;

      await this.mailer.sendVerificationEmail({
        to: email,
        name: user.name,
        verificationLink,
        verificationCode: verificationToken,
      });
    } catch (error) {
      this.logger.error('Failed to send verification email:', error);
    }

    return {
      message: 'Verification token sent. Check your email.',
    };
  }

  async login(
    data: LoginDto,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<AuthResponseDto | InterimLoginResponseDto> {
    const user = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (user.accountStatus === 'DELETED') {
      throw new UnauthorizedException('Account is deleted');
    }

    const passwordMatch = await bcrypt.compare(data.password, user.password);
    if (!passwordMatch) {
      throw new UnauthorizedException('Invalid credentials');
    }

    if (!user.emailVerified) {
      throw new UnauthorizedException(
        'Email not verified. Please verify your email first.',
      );
    }

    // Check if 2FA is enabled
    const twoFactorStatus = await this.twoFactorAuthService.getTwoFactorStatus(
      user.id,
    );

    if (twoFactorStatus.isEnabled) {
      // Generate interim token for 2FA verification
      const interimToken = this.jwtService.sign(
        {
          userId: user.id,
          type: 'interim',
        },
        {
          secret: this.configService.get('JWT_SECRET') || 'your-secret-key',
          expiresIn: '5m', // Short expiration for interim token
        },
      );

      return {
        interim_token: interimToken,
        message: '2FA verification required',
        requires2FA: true,
      };
    }

    return this.createSession(user.id, user, userAgent, ipAddress);
  }

  private async createSession(
    userId: string,
    user: any,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<AuthResponseDto> {
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    // Parse user agent to extract device info
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

  private parseUserAgent(userAgent: string): {
    browser?: string;
    os?: string;
    deviceType?: string;
  } {
    const deviceInfo: any = {};

    // Simple user agent parsing (can be enhanced with a library like useragent)
    if (userAgent.includes('Chrome')) {
      deviceInfo.browser = 'Chrome';
    } else if (userAgent.includes('Firefox')) {
      deviceInfo.browser = 'Firefox';
    } else if (userAgent.includes('Safari')) {
      deviceInfo.browser = 'Safari';
    } else if (userAgent.includes('Edge')) {
      deviceInfo.browser = 'Edge';
    }

    if (userAgent.includes('Windows')) {
      deviceInfo.os = 'Windows';
    } else if (userAgent.includes('Mac')) {
      deviceInfo.os = 'macOS';
    } else if (userAgent.includes('Linux')) {
      deviceInfo.os = 'Linux';
    } else if (userAgent.includes('Android')) {
      deviceInfo.os = 'Android';
    } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
      deviceInfo.os = 'iOS';
    }

    if (
      userAgent.includes('Mobile') ||
      userAgent.includes('Android') ||
      userAgent.includes('iPhone')
    ) {
      deviceInfo.deviceType = 'Mobile';
    } else {
      deviceInfo.deviceType = 'Desktop';
    }

    return deviceInfo;
  }

  async validateSession(sessionId: string) {
    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
      include: { user: true },
    });

    if (!session || session.expiresAt < new Date()) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    if (session.user.accountStatus === 'DELETED') {
      await this.prisma.session.deleteMany({
        where: { id: sessionId },
      });
      throw new UnauthorizedException('Account is deleted');
    }

    return session.user;
  }

  async logout(sessionId: string) {
    await this.prisma.session.deleteMany({
      where: { id: sessionId },
    });
  }

  async isFirstUser() {
    const userCount = await this.prisma.user.count();
    return userCount === 0;
  }

  async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      // Return success even if user not found (security best practice)
      return {
        message:
          'If an account with that email exists, a password reset link has been sent.',
      };
    }

    const resetToken = this.generateVerificationToken();
    const resetTokenExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

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
    } catch (error) {
      this.logger.error('Failed to send password reset email:', error);
    }

    return {
      message:
        'If an account with that email exists, a password reset link has been sent.',
    };
  }

  async resetPassword(
    email: string,
    token: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user || !user.resetToken) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    if (user.resetToken !== token) {
      throw new BadRequestException('Invalid reset token');
    }

    if (!user.resetTokenExpiresAt || user.resetTokenExpiresAt < new Date()) {
      throw new BadRequestException('Reset token expired');
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

    // Invalidate all existing sessions for security
    await this.prisma.session.deleteMany({
      where: { userId: user.id },
    });

    try {
      await this.mailer.sendPasswordChangedEmail(user.email, user.name);
    } catch (error) {
      this.logger.error('Failed to send password changed email:', error);
    }

    return {
      message:
        'Password reset successful. Please log in with your new password.',
    };
  }

  // Profile Management Methods

  async changeEmail(
    userId: string,
    newEmail: string,
    password: string,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Invalid password');
    }

    // Check if new email is already in use
    const existingUser = await this.prisma.user.findUnique({
      where: { email: newEmail },
    });

    if (existingUser && existingUser.id !== userId) {
      throw new BadRequestException('Email already in use');
    }

    // Generate email change token
    const emailChangeToken = this.generateVerificationToken();
    const emailChangeTokenExpiresAt = new Date(Date.now() + 15 * 60 * 1000); // 15 minutes

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
    } catch (error) {
      this.logger.error('Failed to send email change verification:', error);
    }

    return {
      message: 'Verification email sent to your new email address',
    };
  }

  async verifyEmailChange(
    userId: string,
    token: string,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (!user.pendingEmail) {
      throw new BadRequestException('No pending email change');
    }

    if (user.emailChangeToken !== token) {
      throw new BadRequestException('Invalid verification token');
    }

    if (
      !user.emailChangeTokenExpiresAt ||
      user.emailChangeTokenExpiresAt < new Date()
    ) {
      throw new BadRequestException('Verification token expired');
    }

    const oldEmail = user.email;
    const newEmail = user.pendingEmail;

    // Update user with new email
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        email: newEmail,
        pendingEmail: null,
        emailChangeToken: null,
        emailChangeTokenExpiresAt: null,
      },
    });

    // Update volunteer if exists
    await this.prisma.volunteer
      .update({
        where: { email: oldEmail },
        data: {
          email: newEmail,
        },
      })
      .catch(() => null); // Ignore if volunteer not found

    try {
      await this.mailer.sendEmailChangedConfirmation(newEmail, user.name);
    } catch (error) {
      this.logger.error('Failed to send email change confirmation:', error);
    }

    return {
      message: 'Email changed successfully',
    };
  }

  async changePassword(
    userId: string,
    currentPassword: string,
    newPassword: string,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify current password
    const passwordMatch = await bcrypt.compare(currentPassword, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Current password is incorrect');
    }

    // Hash new password
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Update password
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        password: hashedPassword,
      },
    });

    try {
      await this.mailer.sendPasswordChangedEmail(user.email, user.name);
    } catch (error) {
      this.logger.error('Failed to send password changed email:', error);
    }

    return {
      message: 'Password changed successfully',
    };
  }

  async deleteAccount(
    userId: string,
    password: string,
    forceDeleteSprints = false,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Invalid password');
    }

    const coordinatedSprintsCount = await this.prisma.sprint.count({
      where: { coordinatorId: userId },
    });

    if (coordinatedSprintsCount > 0 && !forceDeleteSprints) {
      throw new ConflictException({
        message:
          'You have coordinated sprints. Confirm to delete your account and those sprints.',
        coordinatedSprintsCount,
      });
    }

    // Delete user's sessions first (will cascade delete)
    await this.prisma.session.deleteMany({
      where: { userId },
    });

    // Delete volunteer record if exists
    await this.prisma.volunteer.deleteMany({
      where: { email: user.email },
    });

    if (coordinatedSprintsCount > 0) {
      await this.prisma.sprint.deleteMany({
        where: { coordinatorId: userId },
      });
    }

    const deletedPassword = await bcrypt.hash(
      `deleted-${userId}-${Date.now()}`,
      10,
    );

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

  // Session Management Methods

  async getActiveSessions(
    userId: string,
    currentSessionId: string,
  ): Promise<SessionResponseDto> {
    const sessions = await this.prisma.session.findMany({
      where: {
        userId,
        expiresAt: {
          gt: new Date(), // Only get non-expired sessions
        },
      },
      orderBy: {
        lastActivityAt: 'desc',
      },
    });

    const sessionDtos: SessionDto[] = sessions.map((session) => ({
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

  async logoutSession(
    userId: string,
    sessionId: string,
  ): Promise<{ message: string }> {
    const session = await this.prisma.session.findUnique({
      where: { id: sessionId },
    });

    if (!session) {
      throw new NotFoundException('Session not found');
    }

    if (session.userId !== userId) {
      throw new BadRequestException('Cannot logout from another user session');
    }

    await this.prisma.session.delete({
      where: { id: sessionId },
    });

    return {
      message: 'Logged out from device successfully',
    };
  }

  async logoutAllDevices(userId: string): Promise<{ message: string }> {
    await this.prisma.session.deleteMany({
      where: { userId },
    });

    return {
      message: 'Logged out from all devices successfully',
    };
  }

  async updateSessionActivity(sessionId: string): Promise<void> {
    await this.prisma.session.update({
      where: { id: sessionId },
      data: {
        lastActivityAt: new Date(),
        updatedAt: new Date(),
      },
    });
  }

  async validateAndRefreshSession(sessionId: string): Promise<{
    isValid: boolean;
    user?: any;
  }> {
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

    // Update last activity
    await this.updateSessionActivity(sessionId);

    return {
      isValid: true,
      user: session.user,
    };
  }

  // Two-Factor Authentication Methods

  async verify2FACode(
    interimToken: string,
    code: string,
    userAgent?: string,
    ipAddress?: string,
  ): Promise<AuthResponseDto> {
    try {
      const decoded = this.jwtService.verify(interimToken, {
        secret: this.configService.get('JWT_SECRET') || 'your-secret-key',
      });

      if (decoded.type !== 'interim') {
        throw new UnauthorizedException('Invalid token type');
      }

      const userId = decoded.userId;
      const user = await this.prisma.user.findUnique({
        where: { id: userId },
      });

      if (!user) {
        throw new UnauthorizedException('User not found');
      }

      // Verify the 2FA code
      const verification = await this.twoFactorAuthService.verifyTwoFactorToken(
        userId,
        code,
      );

      if (!verification.valid) {
        throw new BadRequestException('Invalid 2FA code');
      }

      // Create session after successful 2FA verification
      return this.createSession(userId, user, userAgent, ipAddress);
    } catch (error) {
      if (error.name === 'TokenExpiredError') {
        throw new UnauthorizedException('2FA token expired');
      }
      throw error;
    }
  }

  async setUpTwoFactorAuth(userId: string): Promise<{
    secret: string;
    qrCode: string;
    backupCodes: string[];
  }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.twoFactorAuthService.generateTwoFactorSetup(userId, user.email);
  }

  async confirmTwoFactorSetup(
    userId: string,
    totpSecret: string,
    totpToken: string,
    backupCodes: string[],
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify the token matches the secret
    if (!this.twoFactorAuthService.verifyTotpToken(totpSecret, totpToken)) {
      throw new BadRequestException(
        'Invalid TOTP token. Please try again with a code from your authenticator app.',
      );
    }

    // Save the 2FA setup
    await this.twoFactorAuthService.enableTwoFactorAuth(
      userId,
      totpSecret,
      backupCodes,
    );

    return {
      message:
        '2FA has been enabled successfully. Save your backup codes in a safe place.',
    };
  }

  async disableTwoFactorAuth(
    userId: string,
    password: string,
    totpCode?: string,
  ): Promise<{ message: string }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new BadRequestException('Invalid password');
    }

    // Optionally verify 2FA code if provided
    if (totpCode) {
      const twoFactorStatus =
        await this.twoFactorAuthService.getTwoFactorStatus(userId);
      if (twoFactorStatus.isEnabled) {
        const verification =
          await this.twoFactorAuthService.verifyTwoFactorToken(
            userId,
            totpCode,
          );
        if (!verification.valid) {
          throw new BadRequestException('Invalid 2FA code');
        }
      }
    }

    await this.twoFactorAuthService.disableTwoFactorAuth(userId);

    return {
      message: '2FA has been disabled',
    };
  }

  async getTwoFactorStatus(userId: string): Promise<{
    isEnabled: boolean;
    backupCodesRemaining: number;
  }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return this.twoFactorAuthService.getTwoFactorStatus(userId);
  }

  async regenerateBackupCodes(userId: string): Promise<{
    backupCodes: string[];
    message: string;
  }> {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    const backupCodes =
      await this.twoFactorAuthService.regenerateBackupCodes(userId);

    return {
      backupCodes,
      message:
        'Backup codes regenerated successfully. Save them in a safe place.',
    };
  }
}
