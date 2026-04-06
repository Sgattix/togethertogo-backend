export interface AuthUser {
    id: string;
    role: 'ADMIN' | 'COORDINATOR' | 'VOLUNTEER' | 'GOVERNMENT_OFFICIAL' | 'PLATFORM_OPERATOR';
}
export declare function isAdminOrCoordinator(user: AuthUser): boolean;
export declare function isOwnerOrAdmin(userId: string, resourceOwnerId: string, user: AuthUser): boolean;
export declare function isCoordinatorOwnerOrAdmin(coordinatorId: string, userId: string, user: AuthUser): boolean;
export declare function assertCoordinatorOrAdmin(user: AuthUser, resourceOwnerId?: string): void;
export declare function assertAdmin(user: AuthUser): void;
export declare function assertOwnerOrAdmin(userId: string, user: AuthUser): void;
