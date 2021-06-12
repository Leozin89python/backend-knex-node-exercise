var database = require('./knexfile')
const knex = require('knex')(database)

let dados = {
    nome  :"Need for speed",
    preco :103.68 
}


let query = knex.insert(dados).table('games').then(data =>{
    console.log(data)
}).catch(err => console.log(err))
console.log(query)

