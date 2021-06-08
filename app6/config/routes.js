
module.exports = system => {
    system.get('/', system.api.products.got)
}