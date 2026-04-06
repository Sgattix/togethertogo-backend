import {
  Controller,
  Post,
  Body,
  Get,
  Headers,
  HttpCode,
  HttpStatus,
  Delete,
  Param,
  Req,
  UseGuards,
  UnauthorizedException,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { TwoFactorAuthService } from './two-factor-auth.service';
import {
  LoginDto,
  RegisterDto,
  VerifyEmailDto,
  ResendVerificationDto,
  ForgotPasswordDto,
  ResetPasswordDto,
  LogoutAllDevicesDto,
  EnableTwoFactorDto,
  VerifyTwoFactorDto,
  DisableTwoFactorDto,
} from './dto/auth.dto';

@Controller({ version: '1', path: 'auth' })
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  async register(@Body() registerDto: RegisterDto) {
    return this.authService.register(registerDto);
  }

  @Post('verify-email')
  @HttpCode(HttpStatus.OK)
  async verifyEmail(@Body() verifyEmailDto: VerifyEmailDto) {
    return this.authService.verifyEmail(
      verifyEmailDto.email,
      verifyEmailDto.token,
    );
  }

  @Post('resend-verification')
  @HttpCode(HttpStatus.OK)
  async resendVerification(@Body() resendDto: ResendVerificationDto) {
    return this.authService.resendVerificationToken(resendDto.email);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginDto: LoginDto, @Req() req: Request) {
    const userAgent = req.headers['user-agent'] || '';
    const ipAddress =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      req.socket.remoteAddress ||
      'unknown';

    return this.authService.login(loginDto, userAgent, ipAddress);
  }

  @Get('first-user')
  async firstUser() {
    const isFirstUser = await this.authService.isFirstUser();
    return { isFirstUser };
  }

  @Get('session')
  async validateSession(@Headers('authorization') authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }
    const user = await this.authService.validateSession(sessionId);
    return { user };
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  async logout(@Headers('authorization') authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (sessionId) {
      await this.authService.logout(sessionId);
    }
    return { message: 'Logged out' };
  }

  @Post('forgot-password')
  @HttpCode(HttpStatus.OK)
  async forgotPassword(@Body() forgotPasswordDto: ForgotPasswordDto) {
    return this.authService.forgotPassword(forgotPasswordDto.email);
  }

  @Post('reset-password')
  @HttpCode(HttpStatus.OK)
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.authService.resetPassword(
      resetPasswordDto.email,
      resetPasswordDto.token,
      resetPasswordDto.password,
    );
  }

  // Session Management Endpoints

  @Get('sessions')
  @HttpCode(HttpStatus.OK)
  async getActiveSessions(
    @Headers('authorization') authHeader: string,
    @Req() req: Request,
  ) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.getActiveSessions(userId, sessionId);
  }

  @Delete('sessions/:sessionId')
  @HttpCode(HttpStatus.OK)
  async logoutSession(
    @Headers('authorization') authHeader: string,
    @Param('sessionId') sessionId: string,
  ) {
    const currentSessionId = authHeader?.replace('Bearer ', '');
    if (!currentSessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(currentSessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.logoutSession(userId, sessionId);
  }

  @Post('logout-all-devices')
  @HttpCode(HttpStatus.OK)
  async logoutAllDevices(
    @Headers('authorization') authHeader: string,
    @Body() body?: LogoutAllDevicesDto,
  ) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.logoutAllDevices(userId);
  }

  // Two-Factor Authentication Endpoints

  @Post('2fa/verify')
  @HttpCode(HttpStatus.OK)
  async verify2FACode(
    @Body() verifyTwoFactorDto: VerifyTwoFactorDto,
    @Req() req: Request,
  ) {
    const userAgent = req.headers['user-agent'] || '';
    const ipAddress =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0] ||
      req.socket.remoteAddress ||
      'unknown';

    return this.authService.verify2FACode(
      verifyTwoFactorDto.sessionToken,
      verifyTwoFactorDto.code,
      userAgent,
      ipAddress,
    );
  }

  @Post('2fa/setup')
  @HttpCode(HttpStatus.OK)
  async setupTwoFactorAuth(@Headers('authorization') authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.setUpTwoFactorAuth(userId);
  }

  @Post('2fa/confirm')
  @HttpCode(HttpStatus.OK)
  async confirmTwoFactorSetup(
    @Headers('authorization') authHeader: string,
    @Body() enableTwoFactorDto: EnableTwoFactorDto,
  ) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;

    // Extract backup codes from the setup response (they're passed separately in real implementation)
    // For now, we'll expect them to be stored in the request
    const backupCodes = (enableTwoFactorDto as any).backupCodes || [];

    return this.authService.confirmTwoFactorSetup(
      userId,
      enableTwoFactorDto.secret,
      enableTwoFactorDto.totpToken,
      backupCodes,
    );
  }

  @Get('2fa/status')
  @HttpCode(HttpStatus.OK)
  async getTwoFactorStatus(@Headers('authorization') authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.getTwoFactorStatus(userId);
  }

  @Post('2fa/disable')
  @HttpCode(HttpStatus.OK)
  async disableTwoFactorAuth(
    @Headers('authorization') authHeader: string,
    @Body() disableTwoFactorDto: DisableTwoFactorDto,
  ) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new UnauthorizedException('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.disableTwoFactorAuth(
      userId,
      disableTwoFactorDto.password,
      disableTwoFactorDto.totpCode,
    );
  }

  @Post('2fa/regenerate-backup-codes')
  @HttpCode(HttpStatus.OK)
  async regenerateBackupCodes(@Headers('authorization') authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new Error('Missing session token');
    }

    const validationResult =
      await this.authService.validateAndRefreshSession(sessionId);
    if (!validationResult.isValid) {
      throw new Error('Invalid or expired session');
    }

    const userId = validationResult.user.id;
    return this.authService.regenerateBackupCodes(userId);
  }
}
