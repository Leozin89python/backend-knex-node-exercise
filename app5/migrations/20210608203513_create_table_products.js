
exports.up = function(knex) {
    return knex.schema.createTable('products', (table) => {
        table.integer('id').primary()
        table.string('item').notNull()
        table.integer('quantidade').notNull()
        table.string('desc').notNull()
        table.double('preco').notNull()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('products')
};
