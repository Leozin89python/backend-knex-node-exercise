const knex = require('../config/knex')

function deleteData() {
   console.log('método delete')
   const resultados = knex.where({preco: 300.05})
        .delete()
        .table('games3')
        .then(jogos => console.log(jogos))
        .catch(err => console.log(err))

    return {  resultados  }    
}

module.exports = { deleteData }