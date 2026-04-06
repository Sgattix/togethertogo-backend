import { Logger } from '@nestjs/common';

/**
 * Email Error Handler
 * Safely handles email sending failures without breaking operations
 */

const logger = new Logger('EmailHandler');

/**
 * Safely send email with error handling
 * Logs error but doesn't throw - for operations that shouldn't fail if email fails
 */
export async function sendEmailSafely(
  emailFn: () => Promise<void>,
  context: string,
): Promise<void> {
  try {
    await emailFn();
  } catch (error) {
    logger.error(`Failed to send email (${context}):`, error);
    // Don't throw - email failures shouldn't break main operations
  }
}

/**
 * Send multiple emails safely
 */
export async function sendEmailsSafely(
  emailFns: Array<{ fn: () => Promise<void>; context: string }>,
): Promise<void> {
  const results = await Promise.allSettled(
    emailFns.map((item) => sendEmailSafely(item.fn, item.context)),
  );

  const failed = results.filter((r) => r.status === 'rejected');
  if (failed.length > 0) {
    logger.warn(`${failed.length}/${emailFns.length} emails failed to send`);
  }
}

/**
 * Convenience wrapper for common use cases
 */
export const emailHandlers = {
  /**
   * Handle task assignment email
   */
  taskAssignment: (
    mailerService: any,
    email: string,
    volunteerName: string,
    taskTitle: string,
    sprintTitle: string,
    dueDate: Date,
  ) =>
    sendEmailSafely(
      () =>
        mailerService.sendTaskAssignmentEmail(
          email,
          volunteerName,
          taskTitle,
          sprintTitle,
          dueDate,
        ),
      'task-assignment',
    ),

  /**
   * Handle approval response email
   */
  approvalResponse: (
    mailerService: any,
    email: string,
    sprintTitle: string,
    approved: boolean,
    adminNotes?: string,
  ) =>
    sendEmailSafely(
      () =>
        mailerService.sendApprovalResponseEmail(
          email,
          sprintTitle,
          approved,
          adminNotes,
        ),
      'approval-response',
    ),
};
