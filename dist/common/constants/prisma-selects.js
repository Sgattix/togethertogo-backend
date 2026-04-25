"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SPRINT_BASIC_SELECT = exports.APPROVAL_BASIC_SELECT = exports.APPROVAL_WITH_COORDINATOR_SELECT = exports.TASK_DETAILED_SELECT = exports.APPROVAL_HISTORY_SELECT = exports.TASK_SELECT = exports.SPRINT_DETAIL_INCLUDE = exports.SPRINT_INCLUDE = exports.COORDINATOR_SELECT = exports.ADMIN_LIST_SELECT = exports.ADMIN_SELECT = exports.USER_SELECT = exports.VOLUNTEER_STATS_SELECT = exports.VOLUNTEER_PROFILE_SELECT = exports.VOLUNTEER_SELECT = void 0;
exports.VOLUNTEER_SELECT = {
    id: true,
    name: true,
    email: true,
    emailVisible: true,
    skills: true,
    reputation: true,
    completedTasks: true,
    joinedDate: true,
};
exports.VOLUNTEER_PROFILE_SELECT = {
    id: true,
    email: true,
    name: true,
    role: true,
    createdAt: true,
};
exports.VOLUNTEER_STATS_SELECT = {
    id: true,
    email: true,
    emailVisible: true,
    skills: true,
    reputation: true,
    completedTasks: true,
    joinedDate: true,
};
exports.USER_SELECT = {
    id: true,
    email: true,
    name: true,
    role: true,
    createdAt: true,
};
exports.ADMIN_SELECT = {
    id: true,
    email: true,
    name: true,
    role: true,
    accountStatus: true,
};
exports.ADMIN_LIST_SELECT = {
    id: true,
    email: true,
    name: true,
    role: true,
    accountStatus: true,
    emailVerified: true,
    createdAt: true,
    updatedAt: true,
    deletedAt: true,
    _count: {
        select: {
            sprints: true,
            sessions: true,
            notifications: true,
        },
    },
};
exports.COORDINATOR_SELECT = {
    id: true,
    name: true,
    email: true,
};
exports.SPRINT_INCLUDE = {
    coordinator: { select: exports.COORDINATOR_SELECT },
    tasks: true,
};
exports.SPRINT_DETAIL_INCLUDE = {
    coordinator: { select: exports.COORDINATOR_SELECT },
    tasks: true,
    approvalHistory: true,
};
exports.TASK_SELECT = {
    id: true,
    title: true,
};
exports.APPROVAL_HISTORY_SELECT = {
    id: true,
    progressStatus: true,
    progress: true,
};
exports.TASK_DETAILED_SELECT = {
    id: true,
    title: true,
    description: true,
    status: true,
    priority: true,
    dueDate: true,
    assignedTo: true,
};
exports.APPROVAL_WITH_COORDINATOR_SELECT = {
    id: true,
    status: true,
    createdAt: true,
    sprint: {
        select: {
            id: true,
            title: true,
            coordinator: { select: exports.COORDINATOR_SELECT },
        },
    },
    requestedByUser: { select: exports.COORDINATOR_SELECT },
};
exports.APPROVAL_BASIC_SELECT = {
    id: true,
    title: true,
    status: true,
    createdAt: true,
    sprint: {
        select: {
            id: true,
            title: true,
        },
    },
    requestedByUser: { select: { id: true, name: true } },
};
exports.SPRINT_BASIC_SELECT = {
    id: true,
    title: true,
};
//# sourceMappingURL=prisma-selects.js.map