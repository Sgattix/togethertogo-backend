import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { SprintsModule } from './sprints/sprints.module';
import { VolunteersModule } from './volunteers/volunteers.module';
import { ApprovalsModule } from './approvals/approvals.module';
import { ConfigModule } from '@nestjs/config';
import { SearchModule } from './search/search.module';
import { MailerModule } from './mailer/mailer.module';
import { TasksModule } from './tasks/tasks.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NotificationsModule } from './notifications/notifications.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    AuthModule,
    SprintsModule,
    VolunteersModule,
    ApprovalsModule,
    SearchModule,
    MailerModule,
    TasksModule,
    DashboardModule,
    NotificationsModule,
    AdminModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
