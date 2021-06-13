const knex = require('../config/knex')

function postData() {
    let data = [
        {name:'transformers', price :103.90},
        {name:'chess', price :40.10},
        {name:'sonic 3', price :35.04}
    ]

    const results = knex.insert(data)
                        .table('games4')
                        .then(games => console.log(games))
                        .catch(err => console.log(err))


    return { results }
}

module.exports = { postData }