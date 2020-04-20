import { Model } from 'objection';

export class UserComment extends Model {
    static get tableName() {
        return 'user_comments';
    }
}