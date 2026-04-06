export declare class CreateSprintDto {
    title: string;
    description?: string;
    location: string;
    startDate: Date;
    endDate: Date;
}
export declare class UpdateSprintDto {
    title?: string;
    description?: string;
    location?: string;
    progressStatus?: string;
    governmentAuthorizationStatus?: string;
    platformAuthorizationStatus?: string;
}
export declare class FilterSprintsDto {
    progressStatus?: string;
    governmentAuthorizationStatus?: string;
    platformAuthorizationStatus?: string;
    location?: string;
    dateFrom?: string;
    dateTo?: string;
}
export declare class RequestApprovalDto {
    sprintId: string;
    notes?: string;
}
export declare class ApproveApprovalDto {
    action: 'approve' | 'reject';
    notes?: string;
}
