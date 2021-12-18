import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { OauthModule } from './modules/oauth/oauth.module';
import { RoleModule } from './modules/role/role.module';
import { PrismaModule } from './prisma/prisma.module';
import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: process.env.NODE_ENV === 'test' ? '.test.env' : '.env',
    }),
    SharedModule,
    PrismaModule,
    AuthModule,
    OauthModule,
    RoleModule,
  ],
})
export class AppModule {}
