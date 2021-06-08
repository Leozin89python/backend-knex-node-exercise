const port = 8080
const system = require('express')()
const consign = require('consign')
const db = require('./config/db.js')

consign()
        .then('./api/app.js')
        .into(system)

system.db = db

system.listen(port,()=>{
    console.log(`port :${port}`)
})