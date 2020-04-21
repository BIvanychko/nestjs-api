import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserValidator } from './user.validator';
import { DatabaseModule } from '../database/database.module';
import { ProfileModule } from '../profile/profile.module';

@Module({
  controllers: [UserController],
  providers: [UserService, UserValidator],
  imports: [DatabaseModule, ProfileModule],
  exports: [UserService]
})
export class UserModule {}
