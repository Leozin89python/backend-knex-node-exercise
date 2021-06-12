const database = require('../knexfile')
const knex = require('knex')(database)

const insertObj = () => {
    let dados = [
        {
            nome  :'Need for spee carbon',
            preco :106.05
        },{
            nome  :'mario world',
            preco :50.34
        },{
            nome  :'x-men2 clone wars',
            preco :9.45
        },{
            nome  :'byoshock',
            preco :200.03
        }
    ]

    let insertData = knex.insert(dados)
                         .table('games1')
                         .then(data => {
                             data
                         })
                         .catch(err => console.log(err))

    
    let getData   = knex.select('*')
                        .table('games1')
                        .then(data => console.log(data))
                        .catch(err => console.log(err))

    return { insertData, getData }
}

module.exports = { insertObj }