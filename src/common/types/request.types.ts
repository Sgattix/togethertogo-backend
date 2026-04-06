import { User } from '../../../generated/prisma/client';

/**
 * Typed Request object for use in controllers
 * Extends Express Request with typed user property
 */

declare global {
  namespace Express {
    interface Request {
      user?: User;
    }
  }
}

export interface AuthenticatedRequest extends Express.Request {
  user: User;
}
