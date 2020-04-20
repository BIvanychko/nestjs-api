import { Module } from '@nestjs/common';
import { UserProfileController } from './userProfile.controller';
import { UserProfileService } from './userProfile.service';
import { UserProfileValidator } from './userProfile.validator';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [UserProfileController],
  providers: [UserProfileService, UserProfileValidator],
  imports: [DatabaseModule]
})
export class UserProfileModule {}
