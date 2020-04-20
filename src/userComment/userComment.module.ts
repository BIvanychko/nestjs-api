import { Module } from '@nestjs/common';
import { UserCommentService } from './userComment.service';
import { UserCommentController } from './userComment.controller';
import {UserCommentValidator} from "./userComment.validator";

@Module({
  providers: [UserCommentService, UserCommentValidator],
  controllers: [UserCommentController]
})
export class UserCommentModule {}
