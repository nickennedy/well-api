const mongoose = require('mongoose');

const wellDataSchema = new mongoose.Schema({
    values: {
        data: {
                gpm: {type: String},
                count: {type: String}
            }
        },
        device: {type: String},
        published_at: { type: Date, default: Date.now }
})

const WellData = mongoose.model('wellData', wellDataSchema)

module.exports = WellData;