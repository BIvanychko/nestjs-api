import { Model } from 'objection';
import {Injectable} from "@nestjs/common";
import { IProfileUpsertData } from '../../interfaces/profile.interface';

@Injectable()
export class Profile extends Model {
    static get tableName() {
        return 'profiles';
    }

    async createProfile(profile: IProfileUpsertData) {
        return await Profile.fromJson({
            firstName: profile.firstName,
            lastName: profile.lastName,
            nickName: profile.nickName
        }).$query().insert();
    }

    async getProfileById(profileId: number) {
        return await Profile.query().findById(profileId);
    }
}