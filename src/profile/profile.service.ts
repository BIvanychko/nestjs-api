import { Injectable } from '@nestjs/common';
import { IProfileUpsertData } from '../interfaces/profile.interface';
import { Profile } from '../database/models/profile.model';

@Injectable()
export class ProfileService {
    constructor(
        private readonly profileModel: Profile
    ) {}

    async createProfile(profile: IProfileUpsertData) {
        return await this.profileModel.createProfile(profile);
    }

    async getProfileById(profileId: number) {
        return await this.profileModel.getProfileById(profileId);
    }
}
