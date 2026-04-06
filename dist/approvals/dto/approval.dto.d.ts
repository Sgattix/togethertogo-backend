export declare enum ApprovalAction {
    APPROVE = "approve",
    REJECT = "reject"
}
export declare class ApproveApprovalDto {
    action: ApprovalAction;
    adminNotes?: string;
}
