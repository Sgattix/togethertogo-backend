import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from '../auth/dto/auth.dto';
import {
  VOLUNTEER_SELECT,
  VOLUNTEER_PROFILE_SELECT,
  VOLUNTEER_STATS_SELECT,
  USER_SELECT,
} from '../common/constants/prisma-selects';
import { throwNotFound } from '../common/utils/error.utils';

@Injectable()
export class VolunteersService {
  constructor(private prisma: PrismaService) {}

  async findAll(filters?: { name?: string; skills?: string }) {
    const nameFilter = filters?.name?.trim();
    const skillsFilter = filters?.skills?.trim();

    const where =
      nameFilter || skillsFilter
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
      select: VOLUNTEER_SELECT,
      where,
    });
  }

  async findOne(id: string) {
    const volunteer = await this.prisma.volunteer.findUnique({
      where: { id },
      select: VOLUNTEER_SELECT,
    });

    if (!volunteer) {
      throwNotFound('Volunteer', id);
    }

    return volunteer;
  }

  async getProfile(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: USER_SELECT,
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    // Get volunteer-specific data if user is a volunteer
    let volunteer = null;
    if (user.role === 'VOLUNTEER') {
      volunteer = await this.prisma.volunteer.findUnique({
        where: { email: user.email },
        select: VOLUNTEER_STATS_SELECT,
      });
    }

    return {
      ...user,
      volunteer,
    };
  }

  async updateProfile(userId: string, data: UpdateProfileDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      throwNotFound('User', userId);
    }

    // Update user
    const updatedUser = await this.prisma.user.update({
      where: { id: userId },
      data: {
        name: data.name ?? user.name,
      },
      select: USER_SELECT,
    });

    // Update volunteer if user is a volunteer
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
}
