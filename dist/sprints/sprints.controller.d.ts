import { SprintsService } from './sprints.service';
import { CreateSprintDto, UpdateSprintDto, FilterSprintsDto, RequestApprovalDto, ApproveApprovalDto } from './dto/sprint.dto';
import { CreateTaskDto, UpdateTaskDto } from './dto/task.dto';
import { AuthService } from '../auth/auth.service';
export declare class SprintsController {
    private sprintsService;
    private authService;
    constructor(sprintsService: SprintsService, authService: AuthService);
    private getUser;
    create(createSprintDto: CreateSprintDto, authHeader: string): Promise<any>;
    findAll(filters: FilterSprintsDto): Promise<any>;
    findOne(id: string): Promise<any>;
    update(id: string, updateSprintDto: UpdateSprintDto, authHeader: string): Promise<any>;
    delete(id: string, authHeader: string): Promise<any>;
    createTask(sprintId: string, createTaskDto: CreateTaskDto, authHeader: string): Promise<any>;
    updateTask(sprintId: string, taskId: string, updateTaskDto: UpdateTaskDto, authHeader: string): Promise<any>;
    deleteTask(sprintId: string, taskId: string, authHeader: string): Promise<any>;
    requestApproval(sprintId: string, data: RequestApprovalDto, authHeader: string): Promise<{
        success: boolean;
        sprint: any;
        approval: any;
    }>;
    approve(sprintId: string, data: ApproveApprovalDto, authHeader: string): Promise<any>;
}
