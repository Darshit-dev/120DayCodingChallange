// @ts-check
const productModel = require('../models/productModel')
const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')



//1nd
const createProduct = async function(req,res){
    let getProductData = req.body
    let addProductData = await productModel.create(getProductData)
    res.send(addProductData)
}



//2st 
const createUser =  async function(req,res){
    let getUserData = req.body
    let addUserData = await userModel.create(getUserData)
    res.send({msg : addUserData})
}




//3rd
const createOrder = async function(req,res){
    let getOrderData = req.body
    let freeUser = req.isFreeAppUser

    // check user id and product id is avialable or not
    if(!req.body.userId && !req.body.productId) res.send("plase enter userId and ProductId first")
    
    let userBalance = userModel.find({_id :req.body.userId}).select('balance')
    let productPrice = productModel.find({_id : req.body.productId}).select('price')

    //check is user free or note
    if(!freeUser && userBalance.balance >= productPrice.price){
        
        let newBalance = userBalance.balance - productPrice.price
        let createorder =  await orderModel.create({
            userId: req.body.userId,
            productId: req.body.productId,
            amount: productPrice.price,
            isFreeAppUser: false
        }) 

        //now it's time to update  price of the users wallet
        await userModel.findOneAndUpdate({_id :req.body.userId},{balance : newBalance})

        res.send({ msg : createorder})

        if(freeUser){
            let createOrder = await orderModel.create({
                userId: req.body.userId,
                productId: req.body.productId,
                amount: 0,
                isFreeAppUser: true
                
            })
            res.send({msg: createOrder})
        }
        
    }
    //let addOrderData = await orderModel.create(getOrderData)
    //res.send({msg : addOrderData})
}

module.exports = {createUser,createProduct,createOrder}