
module.exports = system => {
    system.post('/insert', system.api.products.saved)
    system.delete('/remove/:id', system.api.products.removed)
}