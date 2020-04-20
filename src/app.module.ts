import { Module } from '@nestjs/common';
import { UserProfileModule } from './userProfile/userProfile.module';
import { UserCommentModule } from './userComment/userComment.module';

@Module({
  imports: [UserProfileModule, UserCommentModule]
})

export class AppModule {}
