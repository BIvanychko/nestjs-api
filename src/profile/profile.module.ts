import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  providers: [ProfileService],
  exports: [ProfileService],
  imports: [DatabaseModule]
})
export class ProfileModule {}
