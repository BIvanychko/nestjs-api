import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserCommentModule } from './userComment/userComment.module';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './profile/profile.module';
import { LoggerMiddleware } from './logger.middleware';

@Module({
  imports: [UserModule, UserCommentModule, DatabaseModule, ProfileModule]
})

export class AppModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
            .apply(LoggerMiddleware)
            .forRoutes({ path: '*' , method: RequestMethod.ALL});
    }
}