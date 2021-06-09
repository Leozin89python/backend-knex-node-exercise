module.exports = system => {

    const saved = (req, res) => {
        system.data('products')
             .insert({
                        id :req.body.id,
                        item :req.body.item,
                        quantidade :req.body.quantidade,
                        desc :req.body.desc,
                        preco :req.body.preco
                    })
                .then(_=> res.status(204).send())
                .catch(err => res.status(400).json(err))
                

    }

    const removed = (req, res) => {
        system.data('products')
              .where({id :req.params.id})
              .del()
              .then(_=> res.status(204).send())
              .catch(err => res.status(400).json(err))
        } 

    return {  saved, removed  }
}