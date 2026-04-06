export declare enum UserRole {
    ADMIN = "ADMIN",
    COORDINATOR = "COORDINATOR",
    VOLUNTEER = "VOLUNTEER"
}
export declare enum AccountStatus {
    ACTIVE = "ACTIVE",
    SUSPENDED = "SUSPENDED",
    PENDING = "PENDING",
    INACTIVE = "INACTIVE"
}
export declare const VALID_ROLES: UserRole[];
export declare const VALID_ACCOUNT_STATUSES: AccountStatus[];
export type IUserRole = keyof typeof UserRole;
export type IAccountStatus = keyof typeof AccountStatus;
