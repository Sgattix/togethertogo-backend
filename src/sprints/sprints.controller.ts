import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  Headers,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { SprintsService } from './sprints.service';
import {
  CreateSprintDto,
  UpdateSprintDto,
  FilterSprintsDto,
  RequestApprovalDto,
  ApproveApprovalDto,
} from './dto/sprint.dto';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { AuthService } from '../auth/auth.service';

@Controller({ version: '1', path: 'sprints' })
export class SprintsController {
  constructor(
    private sprintsService: SprintsService,
    private authService: AuthService,
  ) {}

  private async getUser(authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new Error('Missing authentication');
    }
    return this.authService.validateSession(sessionId);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(
    @Body() createSprintDto: CreateSprintDto,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.create(createSprintDto, user.id);
  }

  @Get()
  async findAll(@Query() filters: FilterSprintsDto) {
    return this.sprintsService.findAll(filters);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.sprintsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSprintDto: UpdateSprintDto,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.update(id, updateSprintDto, user);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(
    @Param('id') id: string,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.delete(id, user);
  }

  // Task endpoints
  @Post(':sprintId/tasks')
  @HttpCode(HttpStatus.CREATED)
  async createTask(
    @Param('sprintId') sprintId: string,
    @Body() createTaskDto: CreateTaskDto,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.createTask(sprintId, createTaskDto, user);
  }

  @Put(':sprintId/tasks/:taskId')
  async updateTask(
    @Param('sprintId') sprintId: string,
    @Param('taskId') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.updateTask(
      sprintId,
      taskId,
      updateTaskDto,
      user,
    );
  }

  @Delete(':sprintId/tasks/:taskId')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTask(
    @Param('sprintId') sprintId: string,
    @Param('taskId') taskId: string,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.deleteTask(sprintId, taskId, user);
  }

  // Approval endpoints
  @Post(':id/request-approval')
  @HttpCode(HttpStatus.OK)
  async requestApproval(
    @Param('id') sprintId: string,
    @Body() data: RequestApprovalDto,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.requestApproval(sprintId, user, data);
  }

  @Post(':id/approve')
  @HttpCode(HttpStatus.OK)
  async approve(
    @Param('id') sprintId: string,
    @Body() data: ApproveApprovalDto,
    @Headers('authorization') authHeader: string,
  ) {
    const user = await this.getUser(authHeader);
    return this.sprintsService.approveRequest(sprintId, data.action, user);
  }
}
