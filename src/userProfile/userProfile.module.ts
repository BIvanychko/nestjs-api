import { Module } from '@nestjs/common';
import { UserProfileController } from './userProfile.controller';
import { UserProfileService } from './userProfile.service';
import { UserProfileValidator } from './userProfile.validator';

@Module({
  controllers: [UserProfileController],
  providers: [UserProfileService, UserProfileValidator]
})
export class UserProfileModule {}
