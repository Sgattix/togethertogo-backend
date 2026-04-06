"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VolunteersService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const prisma_selects_1 = require("../common/constants/prisma-selects");
const error_utils_1 = require("../common/utils/error.utils");
let VolunteersService = class VolunteersService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async findAll(filters) {
        const nameFilter = filters?.name?.trim();
        const skillsFilter = filters?.skills?.trim();
        const where = nameFilter || skillsFilter
            ? {
                AND: [
                    ...(nameFilter
                        ? [
                            {
                                name: {
                                    contains: nameFilter,
                                },
                            },
                        ]
                        : []),
                    ...(skillsFilter
                        ? [
                            {
                                skills: {
                                    contains: skillsFilter,
                                },
                            },
                        ]
                        : []),
                ],
            }
            : undefined;
        return this.prisma.volunteer.findMany({
            select: prisma_selects_1.VOLUNTEER_SELECT,
            where,
        });
    }
    async findOne(id) {
        const volunteer = await this.prisma.volunteer.findUnique({
            where: { id },
            select: prisma_selects_1.VOLUNTEER_SELECT,
        });
        if (!volunteer) {
            (0, error_utils_1.throwNotFound)('Volunteer', id);
        }
        return volunteer;
    }
    async getProfile(userId) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
            select: prisma_selects_1.USER_SELECT,
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        let volunteer = null;
        if (user.role === 'VOLUNTEER') {
            volunteer = await this.prisma.volunteer.findUnique({
                where: { email: user.email },
                select: prisma_selects_1.VOLUNTEER_STATS_SELECT,
            });
        }
        return {
            ...user,
            volunteer,
        };
    }
    async updateProfile(userId, data) {
        const user = await this.prisma.user.findUnique({
            where: { id: userId },
        });
        if (!user) {
            (0, error_utils_1.throwNotFound)('User', userId);
        }
        const updatedUser = await this.prisma.user.update({
            where: { id: userId },
            data: {
                name: data.name ?? user.name,
            },
            select: prisma_selects_1.USER_SELECT,
        });
        if (user.role === 'VOLUNTEER' && data.skills !== undefined) {
            await this.prisma.volunteer.update({
                where: { email: user.email },
                data: {
                    name: data.name ?? user.name,
                    skills: data.skills,
                },
            });
        }
        return updatedUser;
    }
};
exports.VolunteersService = VolunteersService;
exports.VolunteersService = VolunteersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], VolunteersService);
//# sourceMappingURL=volunteers.service.js.map