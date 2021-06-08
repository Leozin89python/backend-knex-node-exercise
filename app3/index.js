const port = 8080

const msg = require('./data.json')

const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

consign().into(app)

app.db = db

app.get('/', (req, res) => {
    return res.status(200)
              .json(msg)
})

app.listen(port, (req, res) => {
    console.log(`port :${port}`)
})