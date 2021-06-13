const knex = require('../config/knex')

function getByOption(){
    console.log('método getBy')
    const resultados = knex.select('*')
                           .table('games3')
                           .whereRaw('preco > 200')
                           .then(jogos => console.log(jogos))
                           .catch(err => console.log(err))

    return { resultados }
}

module.exports = { getByOption }