module.exports = app => {
    app.use(express.json())
    app.use(express.urlencoded({
        extended:true
    }))
}