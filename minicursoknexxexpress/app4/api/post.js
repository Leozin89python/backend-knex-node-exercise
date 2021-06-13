const knex = require('../config/knex')

function postData() {
    console.log('método post')
    let dados = [
        {nome :'donkei kong', preco :300.05},
        {nome :'tomb raider', preco :150.20},
        {nome :'need for speed: underground 2', preco :100.00}
    ]
    
    const resultados = knex.insert(dados)
                           .table('games3')
                           .then(jogos => console.log(jogos))
                           .catch(err => console.log(err))

    return {  resultados  }
}

module.exports = { postData }