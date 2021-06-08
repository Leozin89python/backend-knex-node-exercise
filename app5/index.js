const port = 8080 
const app  = require('express')()
const csg = require('consign')
const db = require('./config/knex')

csg()
    .then('./config.url.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(port, (req, res) => {
    console.log(`online in port :${port}`)
})