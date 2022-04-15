const mongoose = require('mongoose');

const publisherSchema  = mongoose.Schema({

    _id:ObjectId("61951bfa4d9fe0d34da86344"),
    name:String,
    author:{
        type :mongoose.Schema.Types.ObjectId,
        ref :newAuthor
    },
    price : Number,
    rating : Number,
    publisher:String,
}, { timestamps: true })