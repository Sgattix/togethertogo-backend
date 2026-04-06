import { Module } from '@nestjs/common';
import { SprintsService } from './sprints.service';
import { SprintsController } from './sprints.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { AuthModule } from '../auth/auth.module';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  providers: [SprintsService],
  controllers: [SprintsController],
  imports: [PrismaModule, AuthModule, MailerModule],
})
export class SprintsModule {}
