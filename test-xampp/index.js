const port      = 8081
const app       = require('express')()
const database  = require('knex')({
     client: 'mysql',
        connection: {
            host:'127.0.0.1',
            database: 'teste',
            user:     'root',
            password: ''
    },
            pool: {
            min: 2,
            max: 10
    },
            migrations: {
            tableName: 'knex_migrations'
    }
})

app.listen(port,(req,res,next)=>{
    console.log(`online into port ${port}`)
})

app.get('/',(req,res)=>{
   let mySql = database.select('*')
                       .table('test_connection')
                       .then(msg => {
                           return res.status(200).json(msg)
                       }).catch(error => {
                            return res.status(500).json(error)
                       })                     
})

