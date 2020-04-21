import { Model } from 'objection';
import * as Knex from 'knex';
import {Injectable} from "@nestjs/common";
import { IDbConfig } from '../interfaces/config.inteface';

@Injectable()
export class DatabaseService {
    initDb(dbConfig: IDbConfig) : void {
        const knex = Knex({
            client: 'pg',
            connection: dbConfig
        });
        Model.knex(knex);
    }
}
