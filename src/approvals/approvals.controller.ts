import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  UseGuards,
  Request,
  ForbiddenException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ApprovalsService } from './approvals.service';
import { ApproveApprovalDto } from './dto/approval.dto';
import { SessionGuard } from '../auth/guard/session.guard';
import { AuthenticatedRequest } from '../common/types/request.types';

@Controller({ version: '1', path: 'approvals' })
export class ApprovalsController {
  constructor(private approvalsService: ApprovalsService) {}

  @Get('pending')
  async findPending() {
    return this.approvalsService.findPendingApprovals();
  }

  @Get('user/:userId')
  async findByUser(@Param('userId') userId: string) {
    return this.approvalsService.findApprovalsByUser(userId);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.approvalsService.findOne(id);
  }

  @Post(':id/action')
  @UseGuards(SessionGuard)
  @HttpCode(HttpStatus.OK)
  async approveApproval(
    @Param('id') id: string,
    @Body() dto: ApproveApprovalDto,
    @Request() req: AuthenticatedRequest,
  ) {
    if (req.user.role !== 'ADMIN') {
      throw new ForbiddenException('Only admins can manage approvals');
    }

    return this.approvalsService.approveApproval(id, req.user.id, dto);
  }
}
