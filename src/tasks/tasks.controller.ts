import {
  Controller,
  Post,
  Put,
  Delete,
  Get,
  Body,
  Param,
  Headers,
  UnauthorizedException,
} from '@nestjs/common';
import { TasksService } from './tasks.service';
import { AuthService } from '../auth/auth.service';
import { CreateTaskDto, UpdateTaskDto, CreateCommentDto } from './dto/task.dto';

@Controller({ version: '1', path: 'tasks' })
export class TasksController {
  constructor(
    private tasksService: TasksService,
    private authService: AuthService,
  ) {}

  private async getUserFromAuth(authHeader: string) {
    const sessionId = authHeader?.replace('Bearer ', '');
    if (!sessionId) {
      throw new UnauthorizedException('Missing session token');
    }
    return this.authService.validateSession(sessionId);
  }

  @Post()
  async createTask(
    @Headers('authorization') authHeader: string,
    @Body() createTaskDto: CreateTaskDto,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.tasksService.createTask(user.id, createTaskDto);
  }

  @Put(':id')
  async updateTask(
    @Headers('authorization') authHeader: string,
    @Param('id') taskId: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.tasksService.updateTask(user.id, taskId, updateTaskDto);
  }

  @Delete(':id')
  async deleteTask(
    @Headers('authorization') authHeader: string,
    @Param('id') taskId: string,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.tasksService.deleteTask(user.id, taskId);
  }

  @Get(':id')
  async getTask(@Param('id') taskId: string) {
    return this.tasksService.getTaskById(taskId);
  }

  @Post(':id/comments')
  async addComment(
    @Headers('authorization') authHeader: string,
    @Param('id') taskId: string,
    @Body() createCommentDto: CreateCommentDto,
  ) {
    const user = await this.getUserFromAuth(authHeader);
    return this.tasksService.addComment(user.id, taskId, createCommentDto);
  }

  @Get(':id/comments')
  async getComments(@Param('id') taskId: string) {
    return this.tasksService.getComments(taskId);
  }

  @Get(':id/activities')
  async getActivities(@Param('id') taskId: string) {
    return this.tasksService.getActivities(taskId);
  }
}
