import { Model } from 'objection';
import { IUserUpsertData } from "../../interfaces/user.interface";

export class User extends Model {
    static get tableName() {
        return 'users';
    }

    async createUser(user: IUserUpsertData) {
        return await User.fromJson({
            email: user.email,
            active: user.active,
            ban: user.ban,
            profileId: user.profileId
        }).$query().insert();
    }

    async getUserById(userId: number) {
        return await User.query().findById(userId);
    }
}