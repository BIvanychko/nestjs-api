import * as path from 'path';

module.exports = {
    client: 'postgresql',
    connection: {
        host: 'localhost',
        port: '5432',
        database: 'test_db',
        user: 'postgres',
        password: ''
    },
    pool: {
        min: 1,
        max: 5
    },
    migrations: {
        directory: path.join(__dirname, 'migrations'),
        tableName: 'migrations'
    }
};