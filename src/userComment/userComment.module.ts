import { Module } from '@nestjs/common';
import { UserCommentService } from './userComment.service';
import { UserCommentController } from './userComment.controller';
import {UserCommentValidator} from "./userComment.validator";
import { DatabaseModule } from '../database/database.module';
import { UserModule } from '../user/user.module';
import { ProfileModule} from '../profile/profile.module';

@Module({
  providers: [UserCommentService, UserCommentValidator],
  controllers: [UserCommentController],
  imports: [DatabaseModule, UserModule, ProfileModule]
})
export class UserCommentModule {}
