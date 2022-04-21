const mongoose = require('mongoose');
ObjectId = mongoose.Schema.Types.ObjectId


const orderModel = new mongoose.Schema( {
    userID : {
        type : ObjectId,
        ref : 'Myuser'
    },
    productID : {
        type : ObjectId,
        ref : 'Product'
    },
    amoint : Number,
    isFreeAppUser : Boolean,
    date : {type : Date, default : Date.now()}
}, { timestamps: true });
module.exports = mongoose.model('order', orderModel) //order
