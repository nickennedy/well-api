const mongoose = require('mongoose');

const wellDataSchema = new mongoose.Schema({
    data: {
        gpm: Number,
        count: Number
    }
})

const WellData = mongoose.model('wellData', wellDataSchema)

module.exports = WellData;