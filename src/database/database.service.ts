import { Injectable } from '@nestjs/common';
import { Model } from 'objection';
import * as Knex from 'knex';

@Injectable()
export class DatabaseService {
    constructor() {
        const knex = Knex({
            client: 'pg',
            connection: {
                host: 'localhost',
                port: 5432,
                database: 'test_db',
                user: 'postgres',
                password: ''
            },
        });
        Model.knex(knex);
    }
}
