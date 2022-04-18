const batchModel = require('../models/batchModel')
const devModel = require('../models/devModel')

//1st
const createBatch = async function (req, res) {
    const addBatch = req.body
    // console.log(addBatch)
    let data = await batchModel.create(addBatch)
    res.send({ msg: data })
}

//2nd
const createDev = async function (req, res) {
    const addDev = req.body
    // console.log(addBatch)
    let data = await devModel.create(addDev)
    res.send({ msg: data })
}

//3nd
const scholership = async function (req, res) {
    
    // console.log(addBatch)
    let data = await devModel.find({gender:"female",percentage : {$gte : 50}})
    console.log(data)
    res.send({ msg: data })
}


//4rd
const devFromBatch = async function (req, res) {
    console.log(req.query)
    const getdata = req.query.name
    const getpercentage = req.query.percentage
    
    //get id from Uranium or thorium batch as per query 
    const getbatchId = await batchModel.findOne({ name: getdata }).select({_id:1})
    //find data of that id in developer and show data which is greater than query percentage
    console.log(getbatchId)
    const getDev = await devModel.find({batch : getbatchId,percentage:{ $gt:getpercentage}}).populate('batch').select({_id:0,createdAt:0,updatedAt:0})
    
    res.send({ msg: getDev })
}


module.exports = { createBatch, devFromBatch, createDev, scholership }
