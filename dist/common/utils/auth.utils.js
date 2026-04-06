"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAdminOrCoordinator = isAdminOrCoordinator;
exports.isOwnerOrAdmin = isOwnerOrAdmin;
exports.isCoordinatorOwnerOrAdmin = isCoordinatorOwnerOrAdmin;
exports.assertCoordinatorOrAdmin = assertCoordinatorOrAdmin;
exports.assertAdmin = assertAdmin;
exports.assertOwnerOrAdmin = assertOwnerOrAdmin;
const common_1 = require("@nestjs/common");
function isAdminOrCoordinator(user) {
    return user?.role === 'ADMIN' || user?.role === 'COORDINATOR';
}
function isOwnerOrAdmin(userId, resourceOwnerId, user) {
    return user.id === userId || user.role === 'ADMIN';
}
function isCoordinatorOwnerOrAdmin(coordinatorId, userId, user) {
    return (user.id === userId || (user.role === 'ADMIN' && coordinatorId === userId));
}
function assertCoordinatorOrAdmin(user, resourceOwnerId) {
    if (!isAdminOrCoordinator(user)) {
        throw new common_1.ForbiddenException('Only COORDINATOR and ADMIN can perform this action');
    }
    if (resourceOwnerId &&
        user.role === 'COORDINATOR' &&
        user.id !== resourceOwnerId) {
        throw new common_1.ForbiddenException('You can only manage resources in your own account');
    }
}
function assertAdmin(user) {
    if (!user || user.role !== 'ADMIN') {
        throw new common_1.ForbiddenException('Only admins can perform this action');
    }
}
function assertOwnerOrAdmin(userId, user) {
    if (user.id !== userId && user.role !== 'ADMIN') {
        throw new common_1.ForbiddenException('You can only manage your own resources');
    }
}
//# sourceMappingURL=auth.utils.js.map