/**
 * Prisma Select Patterns
 * Centralized select patterns to avoid duplication across services
 */

export const VOLUNTEER_SELECT = {
  id: true,
  name: true,
  email: true,
  emailVisible: true,
  skills: true,
  reputation: true,
  completedTasks: true,
  joinedDate: true,
} as const;

export const VOLUNTEER_PROFILE_SELECT = {
  id: true,
  email: true,
  name: true,
  role: true,
  createdAt: true,
} as const;

export const VOLUNTEER_STATS_SELECT = {
  id: true,
  email: true,
  emailVisible: true,
  skills: true,
  reputation: true,
  completedTasks: true,
  joinedDate: true,
} as const;

export const USER_SELECT = {
  id: true,
  email: true,
  name: true,
  role: true,
  createdAt: true,
} as const;

export const ADMIN_SELECT = {
  id: true,
  email: true,
  name: true,
  role: true,
  accountStatus: true,
} as const;

export const ADMIN_LIST_SELECT = {
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
} as const;

export const COORDINATOR_SELECT = {
  id: true,
  name: true,
  email: true,
} as const;

export const SPRINT_INCLUDE = {
  coordinator: { select: COORDINATOR_SELECT },
  tasks: true,
} as const;

export const SPRINT_DETAIL_INCLUDE = {
  coordinator: { select: COORDINATOR_SELECT },
  tasks: true,
  approvalHistory: true,
} as const;

export const TASK_SELECT = {
  id: true,
  title: true,
} as const;

export const APPROVAL_HISTORY_SELECT = {
  id: true,
  progressStatus: true,
  progress: true,
} as const;

export const TASK_DETAILED_SELECT = {
  id: true,
  title: true,
  description: true,
  status: true,
  priority: true,
  dueDate: true,
  assignedTo: true,
} as const;

export const APPROVAL_WITH_COORDINATOR_SELECT = {
  id: true,
  status: true,
  createdAt: true,
  sprint: {
    select: {
      id: true,
      title: true,
      coordinator: { select: COORDINATOR_SELECT },
    },
  },
  requestedByUser: { select: COORDINATOR_SELECT },
} as const;

export const APPROVAL_BASIC_SELECT = {
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
} as const;

export const SPRINT_BASIC_SELECT = {
  id: true,
  title: true,
} as const;
