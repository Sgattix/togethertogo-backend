import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from '../auth/dto/auth.dto';
export declare class VolunteersService {
    private prisma;
    constructor(prisma: PrismaService);
    findAll(filters?: {
        name?: string;
        skills?: string;
    }): Promise<any>;
    findOne(id: string): Promise<any>;
    getProfile(userId: string): Promise<any>;
    updateProfile(userId: string, data: UpdateProfileDto): Promise<any>;
}
