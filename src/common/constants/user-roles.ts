/**
 * User Roles
 * Centralized user role constants to avoid duplication
 */

export enum UserRole {
  ADMIN = 'ADMIN',
  COORDINATOR = 'COORDINATOR',
  VOLUNTEER = 'VOLUNTEER',
}

/**
 * Account Status
 * Centralized account status constants
 */
export enum AccountStatus {
  ACTIVE = 'ACTIVE',
  SUSPENDED = 'SUSPENDED',
  PENDING = 'PENDING',
  INACTIVE = 'INACTIVE',
}

/**
 * Valid role values
 */
export const VALID_ROLES = Object.values(UserRole);

/**
 * Valid account status values
 */
export const VALID_ACCOUNT_STATUSES = Object.values(AccountStatus);

/**
 * Type for user role
 */
export type IUserRole = keyof typeof UserRole;

/**
 * Type for account status
 */
export type IAccountStatus = keyof typeof AccountStatus;
