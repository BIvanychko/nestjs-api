import { Module } from '@nestjs/common';
import { UsersCommentsService } from './userComment.service';
import { UsersCommentsController } from './userComment.controller';

@Module({
  providers: [UsersCommentsService],
  controllers: [UsersCommentsController]
})
export class UsersCommentsModule {}
