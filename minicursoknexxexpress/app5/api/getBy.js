const knex = require('../config/knex')

function getDataBy() {
    const results = knex.select(['id','name'])
                        .whereRaw('id > 15')
                        .table('games4')
                        .then(games => console.log(games))
                        .catch(err => console.log(err))

    return {  results  }
}

module.exports = { getDataBy }