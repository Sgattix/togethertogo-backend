import { Module } from '@nestjs/common';
import { VolunteersService } from './volunteers.service';
import { VolunteersController } from './volunteers.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [VolunteersService],
  controllers: [VolunteersController],
  imports: [PrismaModule, AuthModule],
})
export class VolunteersModule {}
