import { Injectable } from '@nestjs/common';
import { Model } from 'objection';

@Injectable()
export class User extends Model {
    static get tableName() {
        return 'users';
    }
}