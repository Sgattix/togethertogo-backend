export declare const VOLUNTEER_SELECT: {
    readonly id: true;
    readonly name: true;
    readonly email: true;
    readonly emailVisible: true;
    readonly skills: true;
    readonly reputation: true;
    readonly completedTasks: true;
    readonly joinedDate: true;
};
export declare const VOLUNTEER_PROFILE_SELECT: {
    readonly id: true;
    readonly email: true;
    readonly name: true;
    readonly role: true;
    readonly createdAt: true;
};
export declare const VOLUNTEER_STATS_SELECT: {
    readonly id: true;
    readonly email: true;
    readonly emailVisible: true;
    readonly skills: true;
    readonly reputation: true;
    readonly completedTasks: true;
    readonly joinedDate: true;
};
export declare const USER_SELECT: {
    readonly id: true;
    readonly email: true;
    readonly name: true;
    readonly role: true;
    readonly createdAt: true;
};
export declare const ADMIN_SELECT: {
    readonly id: true;
    readonly email: true;
    readonly name: true;
    readonly role: true;
    readonly accountStatus: true;
};
export declare const ADMIN_LIST_SELECT: {
    readonly id: true;
    readonly email: true;
    readonly name: true;
    readonly role: true;
    readonly accountStatus: true;
    readonly emailVerified: true;
    readonly createdAt: true;
    readonly updatedAt: true;
    readonly deletedAt: true;
    readonly _count: {
        readonly select: {
            readonly sprints: true;
            readonly sessions: true;
            readonly notifications: true;
        };
    };
};
export declare const COORDINATOR_SELECT: {
    readonly id: true;
    readonly name: true;
    readonly email: true;
};
export declare const SPRINT_INCLUDE: {
    readonly coordinator: {
        readonly select: {
            readonly id: true;
            readonly name: true;
            readonly email: true;
        };
    };
    readonly tasks: true;
};
export declare const SPRINT_DETAIL_INCLUDE: {
    readonly coordinator: {
        readonly select: {
            readonly id: true;
            readonly name: true;
            readonly email: true;
        };
    };
    readonly tasks: true;
    readonly approvalHistory: true;
};
export declare const TASK_SELECT: {
    readonly id: true;
    readonly title: true;
};
export declare const APPROVAL_HISTORY_SELECT: {
    readonly id: true;
    readonly progressStatus: true;
    readonly progress: true;
};
export declare const TASK_DETAILED_SELECT: {
    readonly id: true;
    readonly title: true;
    readonly description: true;
    readonly status: true;
    readonly priority: true;
    readonly dueDate: true;
    readonly assignedTo: true;
};
export declare const APPROVAL_WITH_COORDINATOR_SELECT: {
    readonly id: true;
    readonly status: true;
    readonly createdAt: true;
    readonly sprint: {
        readonly select: {
            readonly id: true;
            readonly title: true;
            readonly coordinator: {
                readonly select: {
                    readonly id: true;
                    readonly name: true;
                    readonly email: true;
                };
            };
        };
    };
    readonly requestedByUser: {
        readonly select: {
            readonly id: true;
            readonly name: true;
            readonly email: true;
        };
    };
};
export declare const APPROVAL_BASIC_SELECT: {
    readonly id: true;
    readonly title: true;
    readonly status: true;
    readonly createdAt: true;
    readonly sprint: {
        readonly select: {
            readonly id: true;
            readonly title: true;
        };
    };
    readonly requestedByUser: {
        readonly select: {
            readonly id: true;
            readonly name: true;
        };
    };
};
export declare const SPRINT_BASIC_SELECT: {
    readonly id: true;
    readonly title: true;
};
