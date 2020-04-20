const {createTimestampsProcedure}            = require('./utilities/timestamps');
const {dropTable} = require('./utilities/tables');
const tableName = 'profiles';

exports.up = async knex => {
    await createTimestampsProcedure(knex);
    return knex.schema.createTable(tableName, function(t) {
        t.increments('id').primary();
        t.string('nickName').notNullable();
        t.string('firstName').notNullable();
        t.string('lastName').notNullable();
    });
};

exports.down = knex => dropTable(knex, tableName);
