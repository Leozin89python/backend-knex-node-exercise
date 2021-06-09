const port = 8080
const express = require('express')
const system = express()
const cosn = require('consign')
const data = require('./config/knex')

cosn()
    .then('./config/xp.js')
    .then('./api')
    .then('./config/routes.js')
    .into(system)

system.data = data    

system.listen(port,() => {
    console.log(`online in port :${port}`)
})