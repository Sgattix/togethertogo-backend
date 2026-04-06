export class CreateSprintDto {
  title: string;
  description?: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

export class UpdateSprintDto {
  title?: string;
  description?: string;
  location?: string;
  progressStatus?: string;
  governmentAuthorizationStatus?: string;
  platformAuthorizationStatus?: string;
}

export class FilterSprintsDto {
  progressStatus?: string;
  governmentAuthorizationStatus?: string;
  platformAuthorizationStatus?: string;
  location?: string;
  dateFrom?: string;
  dateTo?: string;
}

export class RequestApprovalDto {
  sprintId: string;
  notes?: string;
}

export class ApproveApprovalDto {
  action: 'approve' | 'reject';
  notes?: string;
}
