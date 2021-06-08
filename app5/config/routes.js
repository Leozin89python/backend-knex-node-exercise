module.exports = app => {
    app.get('/', app.api.products.got)
    app.get('/deleted', app.api.products.deleted)
    app.get('/posted',app.api.products.saved)
}