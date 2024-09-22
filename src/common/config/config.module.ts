import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import app from '@common/config/app.config';
import database from '@common/config/database.config';
import { validate } from '@common/config/env.validation';

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      validate,
      load: [app, database],
    }),
  ],
  exports: [],
})
export class ConfigModule {}
