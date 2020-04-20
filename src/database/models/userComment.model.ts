import { Injectable } from '@nestjs/common';
import { Model } from 'objection';

@Injectable()
export class UserComment extends Model {
    static get tableName() {
        return 'user_comments';
    }
}