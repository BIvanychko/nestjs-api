import { Module } from '@nestjs/common';
import { UsersProfilesModule } from './userProfile/userProfile.module';
import { UsersCommentsModule } from './userComment/userComment.module';

@Module({
  imports: [UsersProfilesModule, UsersCommentsModule]
})

export class AppModule {}
