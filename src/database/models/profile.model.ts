import { Injectable } from '@nestjs/common';
import { Model } from 'objection';

@Injectable()
export class Profile extends Model {
    static get tableName() {
        return 'profiles';
    }
}