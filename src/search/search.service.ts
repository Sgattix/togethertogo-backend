import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SearchService {
  constructor(private prisma: PrismaService) {}

  async search(query: string) {
    const q = query.trim();
    if (!q) {
      return { sprints: [], tasks: [] };
    }

    const [sprints, tasks] = await Promise.all([
      this.prisma.sprint.findMany({
        where: {
          OR: [
            { title: { contains: q } },
            { description: { contains: q } },
            { location: { contains: q } },
          ],
        },
        include: {
          coordinator: { select: { id: true, name: true, email: true } },
          tasks: true,
        },
      }),
      this.prisma.task.findMany({
        where: {
          OR: [{ title: { contains: q } }, { description: { contains: q } }],
        },
        include: {
          sprint: true,
        },
      }),
    ]);

    return {
      sprints,
      tasks,
    };
  }
}
