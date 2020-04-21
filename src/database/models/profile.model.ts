import { Model } from 'objection';
import {Injectable} from "@nestjs/common";

@Injectable()
export class Profile extends Model {
    static get tableName() {
        return 'profiles';
    }

    async createProfile() {
        await Profile.fromJson({ firstName: 'Jennifer', lastName: 'ddfdf', nickName: 'fddfdfdfdf' })
            .$query()
            .insert();
    }
}