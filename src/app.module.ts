import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { UserCommentModule } from './userComment/userComment.module';
import { DatabaseModule } from './database/database.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [UserModule, UserCommentModule, DatabaseModule, ProfileModule]
})

export class AppModule {}