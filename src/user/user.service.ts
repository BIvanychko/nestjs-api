import { Injectable, BadRequestException } from '@nestjs/common';
import { IUserProfileBody, ICreatedUserProfileResponse } from '../interfaces/user.interface';
import { User } from '../database/models/user.model';
import { ProfileService } from '../profile/profile.service';

@Injectable()
export class UserService {
    constructor(
      private readonly userModel: User,
      private readonly profileService: ProfileService
    ){}

    async createUserProfile(userProfile: IUserProfileBody) : Promise<ICreatedUserProfileResponse> {
        if(userProfile.active && userProfile.ban || !userProfile.active && !userProfile.ban) {
            throw new BadRequestException('Ban and Active cannot be equal');
        }

        const profile = await this.profileService.createProfile({
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            nickName: userProfile.nickName
        });
        const profileId = profile.$id();

        const user = await this.userModel.createUser({
           email: userProfile.email,
           active: userProfile.active,
           ban: userProfile.ban,
           profileId: profileId
        });

        return {userId: user.$id(), profileId: profileId}
    }

    async getUserById(userId: number) {
        return await this.userModel.getUserById(userId);
    }
}
