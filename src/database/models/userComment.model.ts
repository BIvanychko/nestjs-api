import { Model } from 'objection';
import { IUSerCommentUpsertData } from '../../interfaces/userComment.interface';

export class UserComment extends Model {
    static get tableName() {
        return 'user_comments';
    }

    async createUserComment(userComment: IUSerCommentUpsertData) {
        return await UserComment.fromJson({
            userId: userComment.userId,
            profileId: userComment.profileId,
            comment: userComment.comment
        }).$query().insert();
    }
}