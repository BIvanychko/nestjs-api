const {createTableWithTimestamps, dropTable} = require('./utilities/tables');
const tableName = 'users';

exports.up = knex => createTableWithTimestamps(knex, tableName, t => {
    t.increments('id').primary();
    t.integer('profileId').notNullable();
    t.string('email').notNullable();
    t.boolean('active').notNullable();
    t.boolean('ban').notNullable();
    t.unique(['profileId']);
});

exports.down = knex => dropTable(knex, tableName);
