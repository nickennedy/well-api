const mongoose = require('mongoose');

const wellDataSchema = new mongoose.Schema({
    values: {
        data: {
        gpm: Number,
        count: Number
        }
    },
    device: {type: String},
    timestamp: { type: Date, default: Date.now }
})

const WellData = mongoose.model('wellData', wellDataSchema)

module.exports = WellData;