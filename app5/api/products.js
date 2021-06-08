module.exports = app => {
    const saved = (req, res) => {
        return res.status(201)
                  .json({"message":"saved"})
    }   

    const deleted = (req, res) => {
        return res.status(204)
                  .json({"message":"deleted"})
    }

    const got = (req, res) => {
        return res.status(200)
                  .json({"message":"got"})
    }   

    return {  saved, deleted, got  }
}