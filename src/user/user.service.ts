import { Injectable } from '@nestjs/common';
import { IUserProfileBody, ICreatedUserProfileResponse } from '../interfaces/userProfile.interface';
import {Profile} from '../database/models/profile.model';

@Injectable()
export class UserService {
    constructor(
      private readonly profileModel: Profile
    ){}

    async createUserProfile(userProfile: IUserProfileBody) : Promise<ICreatedUserProfileResponse> {
        const lol = await this.profileModel.createProfile();

        return {userId:1, profileId: 1}
    }
}
