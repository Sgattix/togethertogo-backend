import { ApprovalsService } from './approvals.service';
import { ApproveApprovalDto } from './dto/approval.dto';
import { AuthenticatedRequest } from '../common/types/request.types';
export declare class ApprovalsController {
    private approvalsService;
    constructor(approvalsService: ApprovalsService);
    findPending(): Promise<any>;
    findByUser(userId: string): Promise<any>;
    findOne(id: string): Promise<any>;
    approveApproval(id: string, dto: ApproveApprovalDto, req: AuthenticatedRequest): Promise<any>;
}
