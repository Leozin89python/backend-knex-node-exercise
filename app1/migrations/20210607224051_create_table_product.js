
exports.up = function(knex, Promise) {
    return knex.schema.createTable('products',(table) =>{
       if(!table){
            table.string('firstName').notNull()
            table.string('lastName').notNull()
            table.number('age').notNull()
            table.string('sex').notNull()
       }
    })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('products')
};
