import { Model } from 'objection';
import * as Knex from 'knex';
import {Injectable} from "@nestjs/common";
import { IDbConfig } from '../interfaces/config.inteface';

@Injectable()
export class DatabaseService {
    constructor(
       private readonly dbConfig: IDbConfig
    ) {}

    initDb() : void {
        const knex = Knex({
            client: 'pg',
            connection: this.dbConfig
        });
        Model.knex(knex);
    }
}
