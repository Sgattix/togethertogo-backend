"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VALID_ACCOUNT_STATUSES = exports.VALID_ROLES = exports.AccountStatus = exports.UserRole = void 0;
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "ADMIN";
    UserRole["COORDINATOR"] = "COORDINATOR";
    UserRole["VOLUNTEER"] = "VOLUNTEER";
})(UserRole || (exports.UserRole = UserRole = {}));
var AccountStatus;
(function (AccountStatus) {
    AccountStatus["ACTIVE"] = "ACTIVE";
    AccountStatus["SUSPENDED"] = "SUSPENDED";
    AccountStatus["PENDING"] = "PENDING";
    AccountStatus["INACTIVE"] = "INACTIVE";
})(AccountStatus || (exports.AccountStatus = AccountStatus = {}));
exports.VALID_ROLES = Object.values(UserRole);
exports.VALID_ACCOUNT_STATUSES = Object.values(AccountStatus);
//# sourceMappingURL=user-roles.js.map