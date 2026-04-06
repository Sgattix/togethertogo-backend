import {
  Injectable,
  CanActivate,
  ExecutionContext,
  UnauthorizedException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SessionGuard implements CanActivate {
  constructor(private prisma: PrismaService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new UnauthorizedException('Missing authorization header');
    }

    const token = authHeader.replace('Bearer ', '');

    if (!token) {
      throw new UnauthorizedException('Invalid authorization header format');
    }

    // Try to validate as session ID
    const session = await this.prisma.session.findUnique({
      where: { id: token },
      include: {
        user: true,
      },
    });

    if (!session) {
      throw new UnauthorizedException('Invalid session token');
    }

    // Check if session has expired
    if (session.expiresAt < new Date()) {
      throw new UnauthorizedException('Session expired');
    }

    // Attach user to request
    request.user = session.user;

    return true;
  }
}
