import { Module } from '@nestjs/common';
import { ApprovalsService } from './approvals.service';
import { ApprovalsController } from './approvals.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { MailerModule } from '../mailer/mailer.module';

@Module({
  providers: [ApprovalsService],
  controllers: [ApprovalsController],
  imports: [PrismaModule, MailerModule],
})
export class ApprovalsModule {}
