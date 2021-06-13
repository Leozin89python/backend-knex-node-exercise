const knex = require('../config/knex')

function getData() {
    console.log('método get')
    const resultados = knex.select('*')
                           .table('games3')
                           .then(jogos => console.log(jogos))
                           .catch(err => console.log(err))

    return { resultados }                       
}

module.exports = { getData }