
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products', (table) => {
        table.string('firstName').notNull()
        table.string('lastName').notNull()
        table.string('sex').notNull()
        table.string('address').notNull()
    })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('products')
};
