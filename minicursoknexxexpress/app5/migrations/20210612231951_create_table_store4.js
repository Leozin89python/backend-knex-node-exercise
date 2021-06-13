
exports.up = function(knex) {
    return knex.schema.createTable('games4',(table)=> {
        table.increments('id').primary().notNull()
        table.string('name')
        table.float('price')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('games4')
};
