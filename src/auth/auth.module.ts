import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategy/jwt.strategy';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PrismaService } from 'src/prisma/prisma.service';
import { MailerModule } from 'src/mailer/mailer.module';
import { TwoFactorAuthService } from './two-factor-auth.service';

@Module({
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, TwoFactorAuthService],
  imports: [
    ConfigModule,
    PassportModule,
    JwtModule.register({}),
    PrismaModule,
    MailerModule,
  ],
  exports: [AuthService, TwoFactorAuthService],
})
export class AuthModule {}
