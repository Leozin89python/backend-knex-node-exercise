//post
const postGames = require('./api/post')
console.log('method post')
console.log(postGames.postData())

//get
const getGames = require('./api/get')
console.log('method get')
console.log(getGames.getData())

//getBy
const getByGames = require('./api/getBy')
console.log('method getBy')
console.log(getByGames.getDataBy())

//delete
const deleteGames = require('./api/delete')
console.log('method delete')
console.log(deleteGames.deleteData())

//update
const updateGames = require('./api/update')
console.log('method update')
console.log(updateGames.updateData())
