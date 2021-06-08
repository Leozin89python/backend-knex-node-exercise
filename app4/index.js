const port = 8080
const app = require('express')()
const consign = require('consign')
const db = require('./config/knex')
const msg = require('./msg.json')

consign()
        .into(app)

app.db = db

app.get('/', (req, res) => {
    return res.status(200).json()
})

app.listen(port,() => {
    console.log(`online in port :${port}`)
})