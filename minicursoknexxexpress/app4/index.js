//post
const postJogos = require('./api/post')
console.log(postJogos.postData())

//get
const getJogos = require('./api/get')
console.log(getJogos.getData())

//getBy
const getByJogos = require('./api/getBy')
console.log(getByJogos.getByOption())

//delete
const deleteJogos = require('./api/delete')
console.log(deleteJogos.deleteData())