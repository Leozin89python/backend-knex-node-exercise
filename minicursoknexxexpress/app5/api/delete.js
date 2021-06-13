const knex = require('../config/knex')

function deleteData() {
    const results = knex.where({id :2})
                        .delete()
                        .table('games4')
                        .then(games => console.log(games))
                        .catch(err => console.log(err))

    return {  results  }
}

module.exports = { deleteData }