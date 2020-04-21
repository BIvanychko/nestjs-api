import { Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { Profile } from './models/profile.model';
import { UserComment } from './models/userComment.model';
import { User } from './models/user.model';

@Module({
    providers: [DatabaseService, Profile, User, UserComment],
    exports: [DatabaseService, Profile, User, UserComment]
})
export class DatabaseModule {}
