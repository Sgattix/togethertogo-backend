export declare function sendEmailSafely(emailFn: () => Promise<void>, context: string): Promise<void>;
export declare function sendEmailsSafely(emailFns: Array<{
    fn: () => Promise<void>;
    context: string;
}>): Promise<void>;
export declare const emailHandlers: {
    taskAssignment: (mailerService: any, email: string, volunteerName: string, taskTitle: string, sprintTitle: string, dueDate: Date) => Promise<void>;
    approvalResponse: (mailerService: any, email: string, sprintTitle: string, approved: boolean, adminNotes?: string) => Promise<void>;
};
