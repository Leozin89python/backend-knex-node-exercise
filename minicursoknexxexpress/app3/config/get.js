const database = require('../knexfile')
const knex     = require('knex')(database)

const getNotWhere = () => {
    console.log('consulta sem { where }')
    let getGames = knex.select()
                       .table('games2')
                       .then(jogos => console.log(jogos))
                       .catch(err => console.log(err))
    
    return {  getGames  }
}

module.exports = { getNotWhere }