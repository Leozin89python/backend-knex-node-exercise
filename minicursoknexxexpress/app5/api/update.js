const knex = require('../config/knex')

function updateData() {

    const results = knex.where({id: 4})
                        .update({name :'aliens'})
                        .table('games4')
                        .then(games => console.log(games))
                        .catch(err => console.log(err))


    return {  results  }

}

module.exports = { updateData }