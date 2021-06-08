const port = 8080
const system = require('express')()
const cosn = require('consign')
const data = require('./config/knex')

cosn()
    .then('./config/xp.js')
    .into(system)

system.data = data    

system.listen(port, () => {
    console.log(`online in port :${port}`)
})