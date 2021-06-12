const database = require('../knexfile')
const knex     = require('knex')(database)

const post = () => {
    console.log('post')
    let dados = [
        {nome: 'Mario world', preco :100.04},
        {nome: 'sonic3 the hedgehog', preco :1000.54},
        {nome: 'spider-man', preco :50.03},
    ]

    let posteData = knex.insert(dados)
                        .table('games2')
                        .then(jogos => jogos)
                        .catch(err => console.log(err))

    return {  posteData  }
}

module.exports = { post }
