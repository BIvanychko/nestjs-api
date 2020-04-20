import { Module } from '@nestjs/common';
import { UsersProfilesController } from './userProfile.controller';
import { UsersProfilesService } from './userProfile.service';

@Module({
  controllers: [UsersProfilesController],
  providers: [UsersProfilesService]
})
export class UsersProfilesModule {}
