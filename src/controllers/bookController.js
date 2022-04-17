const bookModel = require('../models/bookModel')
const authorModel = require('../models/authorModel')
const publisherModel = require('../models/publisherModel')
const { populate } = require('../models/bookModel')


//Route Handler
const createBook = async function (req, res) {
  let getData = req.body
  let IsauthId = getData.author
  let IsPubId = getData.publisher
  console.log(!IsauthId)
  if (!IsauthId || !IsPubId) {
    res.send({ warning: "please anter author id and pub id" })
  } else {
    let IsValidAuthId = await authorModel.findById(IsauthId)
    let IsvalidPubId = await publisherModel.findById(IsPubId)
    if (!IsValidAuthId || !IsvalidPubId) {
      res.send({ warning: "Please enter valid ID" })
    } else {
      let createData = await bookModel.create(getData)
      res.send({ Bookdata: createData })
    }
  }

}

const fetchAllData = async function (req, res) {
  const getData = await bookModel.find().populate(['author','publisher'])
  console.log(getData)
  res.send({ Data: getData })
}

//5th(A)
const updateBook = async function (req, res) {
  const getPub =await bookModel.updateMany({"publisher" : "625868e0b1e6eef39f861321"},{ IsHardCover : true})

  res.send({ Data: getPub })
}
//5th(b)

  //const updatePrice = await authorModel.find({age: {$nin : [50,10]}})
  const BooksUpdatePrice = async function (req, res) {
    let savedData = await bookModel.updateMany(
      { ratings: { $gt: 3.5 } },
      { $inc: { price: 10 } },
      
    );
    let Updated = await bookModel.find({ ratings: { $gt: 3.5 } });
    res.send({ msg: savedData, data: Updated });
  };
  


//exported route handler

module.exports = {createBook,fetchAllData,updateBook,BooksUpdatePrice}