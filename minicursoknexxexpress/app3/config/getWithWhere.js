const database = require('../knexfile')
const knex     = require('knex')(database)

const getUsingWhere = () => {
    console.log('consulta com { where }')
    let getGames = knex.select(['id','nome'])
                       .where({nome :'sonic3 the hedgehog'}) 
                       .table('games2')
                       .then(jogos => console.log(jogos))
                       .catch(err => console.log(err))

    console.log('consulta com { where } condição 2')
    let gamesCondicao2 = knex.select('*')
                             .whereRaw('preco <= 51')
                             .table('games2')
                             .then(jogos => console.log(jogos))
                             .catch(err => console.log(err))


    return { getGames, gamesCondicao2 }
}

module.exports = { getUsingWhere }