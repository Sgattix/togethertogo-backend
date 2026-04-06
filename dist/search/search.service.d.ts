import { PrismaService } from '../prisma/prisma.service';
export declare class SearchService {
    private prisma;
    constructor(prisma: PrismaService);
    search(query: string): Promise<{
        sprints: any;
        tasks: any;
    }>;
}
