const PublisherModel = require('../models/publisherModel')

const createPublisher = async function(req,res){
    getData = req.body
    getpublisher  =await  PublisherModel.create(getData)
    res.send({data:getpublisher})
}

module.exports.createPublisher =createPublisher