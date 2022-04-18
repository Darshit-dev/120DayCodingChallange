const mongoose = require('mongoose');

const devModel = new mongoose.Schema( {
    name : String,
    gender : {
        type : String,
        enum : ["male","female","other"]
    },
    percentage : Number,
    batch : {
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Batch'
    }

}, { timestamps: true });

module.exports = mongoose.model('developer', devModel)
