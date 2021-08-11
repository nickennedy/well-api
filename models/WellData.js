const mongoose = require('mongoose');

const wellDataSchema = new mongoose.Schema(
    {
        name: {type: String},
        data: {
            data:{
                    gpm: {type: Number},
                    count: {type: Number}
                }
            },
        ttl: {type: Number},
        published_at: {type: String},
        coreid: {type: String},
        userid: {type: String},
        version: {type: Number},
        public: {type: Boolean},
        productID: {type: Number}
    
    }


    // values: {
    //     data: {
    //             gpm: {type: String},
    //             count: {type: String}
    //         }
    //     },
    //     device: {type: String},
    //     published_at: { type: Date, default: Date.now }
)

const WellData = mongoose.model('wellData', wellDataSchema)

module.exports = WellData;