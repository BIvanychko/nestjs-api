const {createTableWithTimestamps, dropTable} = require('./utilities/tables');
const tableName = 'user_comments';

exports.up = knex => createTableWithTimestamps(knex, tableName, t => {
    t.increments('id').primary();
    t.integer('userId').notNullable();
    t.integer('profileId').notNullable();
    t.foreign('userId').references('users.id');
    t.foreign('profileId').references('profiles.id');
    t.string('comment').notNullable();
});

exports.down = knex => dropTable(knex, tableName);
