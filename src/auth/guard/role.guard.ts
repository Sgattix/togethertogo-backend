import {
  Injectable,
  CanActivate,
  ExecutionContext,
  ForbiddenException,
} from '@nestjs/common';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private allowedRoles: string[]) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;

    if (!user || !user.role) {
      throw new ForbiddenException('User role not found');
    }

    if (!this.allowedRoles.includes(user.role)) {
      throw new ForbiddenException(
        `This action is only available for: ${this.allowedRoles.join(', ')}`,
      );
    }

    return true;
  }
}

export function Roles(...roles: string[]) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    Reflect.metadata('roles', roles);
    return descriptor;
  };
}
