import { Injectable } from '@nestjs/common';
import { IUserProfileBody, ICreatedUserProfileResponse } from '../interfaces/userProfile.interface';

@Injectable()
export class UserProfileService {

    async createUserProfile(userProfile: IUserProfileBody) : Promise<ICreatedUserProfileResponse> {
        return {userId:1, profileId: 1}
    }
}
