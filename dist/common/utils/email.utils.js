"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.emailHandlers = void 0;
exports.sendEmailSafely = sendEmailSafely;
exports.sendEmailsSafely = sendEmailsSafely;
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('EmailHandler');
async function sendEmailSafely(emailFn, context) {
    try {
        await emailFn();
    }
    catch (error) {
        logger.error(`Failed to send email (${context}):`, error);
    }
}
async function sendEmailsSafely(emailFns) {
    const results = await Promise.allSettled(emailFns.map((item) => sendEmailSafely(item.fn, item.context)));
    const failed = results.filter((r) => r.status === 'rejected');
    if (failed.length > 0) {
        logger.warn(`${failed.length}/${emailFns.length} emails failed to send`);
    }
}
exports.emailHandlers = {
    taskAssignment: (mailerService, email, volunteerName, taskTitle, sprintTitle, dueDate) => sendEmailSafely(() => mailerService.sendTaskAssignmentEmail(email, volunteerName, taskTitle, sprintTitle, dueDate), 'task-assignment'),
    approvalResponse: (mailerService, email, sprintTitle, approved, adminNotes) => sendEmailSafely(() => mailerService.sendApprovalResponseEmail(email, sprintTitle, approved, adminNotes), 'approval-response'),
};
//# sourceMappingURL=email.utils.js.map