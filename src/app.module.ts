import { Module } from '@nestjs/common';
import { CacheModule } from '@core/cache/cache.module';
import { DatabaseModule } from '@core/database/database.module';
import { ConfigModule } from '@common/config/config.module';
import { HelperModule } from '@common/helpers/helper.module';
import { ContextService } from '@common/services/context.service';
import { MailerModule } from '@core/mailer/mailer.module';
import { UsersModule } from './modules/users/users.module';
import { AuthModule } from '@modules/auth/auth.module';
import { ClassesModule } from './modules/classes/classes.module';
import { ClassStudentsModule } from './modules/class_students/class_students.module';
import { ClassStudentsModule } from './modules/class_students/class_students.module';

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    CacheModule,
    HelperModule,
    MailerModule,
    // PayBillModule,
    // PayeeBillModule,
    AuthModule,
    UsersModule,
    ClassesModule,
    ClassStudentsModule,
  ],
  providers: [ContextService],
  exports: [ContextService],
})
export class AppModule {}
