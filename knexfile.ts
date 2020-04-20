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
    migrations: {tableName: 'knex_migrations'},
    seeds: {tableName: 'knex_seeds'}
};