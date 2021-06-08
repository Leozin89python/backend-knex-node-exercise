
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.integer('id').primary()
        table.string('name').notNull()
        table.integer('age').notNull()
        table.string('address').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
