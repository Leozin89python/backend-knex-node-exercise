const port = 8080

const app = require('express')()
const consign = require('consign')
const msg = require('./file.json')

const db = require('./config/db')

consign()
    .into(app)

app.db = db

app.get('/', (req, res, next) => {
    return res.status(200)
              .json({msg})
})



app.listen(port,() => {
    console.log(`port :${port}`)
})