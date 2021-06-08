const bd = require('body-parser')

module.exports = system => {
    system.use(bd.json())
    system.use(bd.urlencoded({
        extended: true
    }))
}