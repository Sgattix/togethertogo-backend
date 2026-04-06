import { ForbiddenException } from '@nestjs/common';

/**
 * Shared authorization utilities
 * Centralize permission checks across services
 */

export interface AuthUser {
  id: string;
  role:
    | 'ADMIN'
    | 'COORDINATOR'
    | 'VOLUNTEER'
    | 'GOVERNMENT_OFFICIAL'
    | 'PLATFORM_OPERATOR';
}

/**
 * Check if user is admin or coordinator
 */
export function isAdminOrCoordinator(user: AuthUser): boolean {
  return user?.role === 'ADMIN' || user?.role === 'COORDINATOR';
}

/**
 * Check if user owns resource, or is admin
 */
export function isOwnerOrAdmin(
  userId: string,
  resourceOwnerId: string,
  user: AuthUser,
): boolean {
  return user.id === userId || user.role === 'ADMIN';
}

/**
 * Check if user is coordinator and owns sprint, or is admin
 */
export function isCoordinatorOwnerOrAdmin(
  coordinatorId: string,
  userId: string,
  user: AuthUser,
): boolean {
  return (
    user.id === userId || (user.role === 'ADMIN' && coordinatorId === userId)
  );
}

/**
 * Assert coordinator or admin role with optional owner check
 */
export function assertCoordinatorOrAdmin(
  user: AuthUser,
  resourceOwnerId?: string,
): void {
  if (!isAdminOrCoordinator(user)) {
    throw new ForbiddenException(
      'Only COORDINATOR and ADMIN can perform this action',
    );
  }

  if (
    resourceOwnerId &&
    user.role === 'COORDINATOR' &&
    user.id !== resourceOwnerId
  ) {
    throw new ForbiddenException(
      'You can only manage resources in your own account',
    );
  }
}

/**
 * Assert admin role
 */
export function assertAdmin(user: AuthUser): void {
  if (!user || user.role !== 'ADMIN') {
    throw new ForbiddenException('Only admins can perform this action');
  }
}

/**
 * Assert ownership or admin role
 */
export function assertOwnerOrAdmin(userId: string, user: AuthUser): void {
  if (user.id !== userId && user.role !== 'ADMIN') {
    throw new ForbiddenException('You can only manage your own resources');
  }
}
