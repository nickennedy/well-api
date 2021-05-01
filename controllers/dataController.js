const db = require('../models')

const create = (req,res) => {
    db.WellData.create(req.body, (err, newEntry) => {
        if (err) throw err;
        res.sendStatus(200)
    })
}

module.exports = {create}