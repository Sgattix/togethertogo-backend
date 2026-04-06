import {
  Controller,
  Get,
  Param,
  Query,
  Post,
  Put,
  Delete,
  Body,
  Headers,
  BadRequestException,
} from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { AuthService } from '../auth/auth.service';
import {
  UpdateProfileDto,
  ChangeEmailDto,
  VerifyEmailChangeDto,
  ChangePasswordDto,
  DeleteAccountDto,
} from '../auth/dto/auth.dto';

@Controller({ version: '1', path: 'volunteers' })
export class VolunteersController {
  constructor(
    private volunteersService: VolunteersService,
    private authService: AuthService,
  ) {}

  @Get()
  async findAll(
    @Query('name') name?: string,
    @Query('skills') skills?: string,
  ) {
    return this.volunteersService.findAll({ name, skills });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.volunteersService.findOne(id);
  }

  // Helper method to extract user ID from session
  private async getUserIdFromSession(authHeader: string): Promise<string> {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new BadRequestException('Missing session token');
    }

    try {
      const user = await this.authService.validateSession(sessionId);
      return user.id;
    } catch (error) {
      throw new BadRequestException('Invalid or expired session');
    }
  }

  // Profile Management Endpoints

  @Get('profile/me')
  async getProfile(@Headers('authorization') authHeader: string) {
    const userId = await this.getUserIdFromSession(authHeader);
    return this.volunteersService.getProfile(userId);
  }

  @Put('profile/me')
  async updateProfile(
    @Headers('authorization') authHeader: string,
    @Body() data: UpdateProfileDto,
  ) {
    const userId = await this.getUserIdFromSession(authHeader);
    return this.volunteersService.updateProfile(userId, data);
  }

  @Post('profile/change-email')
  async changeEmail(
    @Headers('authorization') authHeader: string,
    @Body() data: ChangeEmailDto,
  ) {
    const userId = await this.getUserIdFromSession(authHeader);
    return this.authService.changeEmail(userId, data.newEmail, data.password);
  }

  @Post('profile/verify-email-change')
  async verifyEmailChange(
    @Headers('authorization') authHeader: string,
    @Body() data: VerifyEmailChangeDto,
  ) {
    const userId = await this.getUserIdFromSession(authHeader);
    return this.authService.verifyEmailChange(userId, data.token);
  }

  @Post('profile/change-password')
  async changePassword(
    @Headers('authorization') authHeader: string,
    @Body() data: ChangePasswordDto,
  ) {
    const userId = await this.getUserIdFromSession(authHeader);
    return this.authService.changePassword(
      userId,
      data.currentPassword,
      data.newPassword,
    );
  }

  @Delete('profile/account')
  async deleteAccount(
    @Headers('authorization') authHeader: string,
    @Body() data: DeleteAccountDto,
  ) {
    const userId = await this.getUserIdFromSession(authHeader);
    return this.authService.deleteAccount(
      userId,
      data.password,
      data.forceDeleteSprints,
    );
  }
}
