const knex = require('../config/knex')

function getData() {
    const results = knex.select('*')
                        .table('games4')
                        .then(games => console.log(games))
                        .catch(err => console.log(err))

    return {  results  }
}

module.exports = { getData }