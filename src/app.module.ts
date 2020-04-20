import { Module } from '@nestjs/common';
import { UserProfileModule } from './userProfile/userProfile.module';
import { UserCommentModule } from './userComment/userComment.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserProfileModule, UserCommentModule, DatabaseModule],
})

export class AppModule {}
