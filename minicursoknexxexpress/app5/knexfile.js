
module.exports = {

    client: 'postgresql',
    connection: {
      database: 'store4',
      user:     'postgres',
      password: '123456'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    }
    
};
