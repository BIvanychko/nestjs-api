import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserValidator } from './user.validator';
import { DatabaseModule } from '../database/database.module';

@Module({
  controllers: [UserController],
  providers: [UserService, UserValidator],
  imports: [DatabaseModule]
})
export class UserModule {}
