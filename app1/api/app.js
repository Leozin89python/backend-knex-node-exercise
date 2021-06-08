const app = require('express')()

module.exports = system => {
     app.get('/' ,(req, res) => {
        return res.status(200).json({"message":"online!"})
    })
}