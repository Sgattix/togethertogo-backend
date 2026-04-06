import { User } from '../../../generated/prisma/client';
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
