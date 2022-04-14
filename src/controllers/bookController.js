const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel = require("../models/authorModel")


const createBook = async function(req, res){
    const books = req.body;
    const showBooks = await BookModel.create(books);
    res.send( { data: showBooks } );
}

const addAuthor = async function(req, res){
    const author = req.body;
    const showAuthor = await AuthorModel.create(author);
    res.send( { data: showAuthor } );
}   

const bookbyChetanBhagat = async function(req, res){
    const showAuthor = await AuthorModel.findOne({author_name: "Chetan Bhagat"});
    
    // const getAuthorIdTemp = showAuthor.map(data => data.author_id);
    // const getAuthorID = getAuthorIdTemp[0];
    const getAuthorID = showAuthor.author_id;
    
    const allBooks = await BookModel.find({ author_id: getAuthorID }).select({ bookName: 1, _id: 0 });
    res.send( { data: allBooks } );
}

const findandUpdateTwoStates = async function(req, res){
    const findUpdate = await BookModel.findOneAndUpdate(
        { bookName: "Two States" }, //condition 
        { $set: { price: 100 } },
        { new: true }
    )
    const getAuthorID = findUpdate.author_id;
    const getUpdatePrice = await BookModel.findOne({ author_id: getAuthorID, }).select({ price: 1, _id: 0 })

    const allBooks = await AuthorModel.findOne({ author_id: getAuthorID }).select({ author_name: 1, _id: 0 });
    res.send( { data: [allBooks , getUpdatePrice] } );
}

const findBooks = async function(req, res){
    const getBookPrice = await BookModel.find({ price: {$gte: 50, $lte: 100} }).select({ author_id: 1, _id: 0 });

    let getAuthorNames=[]
    for(let i = 0; i < getBookPrice.length; i++){
        const getAuthorID = getBookPrice[i].author_id;
        getAuthorNames = await AuthorModel.findOne({ author_id: getAuthorID }).select({ author_name: 1, _id: 0 });
    }
    
    res.send( { data: getAuthorNames } );
}



module.exports.createBook = createBook;
module.exports.addAuthor = addAuthor;
module.exports.bookbyChetanBhagat = bookbyChetanBhagat;
module.exports.findandUpdateTwoStates = findandUpdateTwoStates;
module.exports.findBooks = findBooks;









// const getBooksData= async function (req, res) {
//     let allBooks= await BookModel.find( {authorName : "HO" } )
//     console.log(allBooks)
//     if (allBooks.length > 0 )  res.send({msg: allBooks, condition: true})
//     else res.send({msg: "No books found" , condition: false})
// }


// const updateBooks= async function (req, res) {
//     let data = req.body // {sales: "1200"}
//     // let allBooks= await BookModel.updateMany( 
//     //     { author: "SK"} , //condition
//     //     { $set: data } //update in data
//     //  )
//     let allBooks= await BookModel.findOneAndUpdate( 
//         { authorName: "ABC"} , //condition
//         { $set: data }, //update in data
//         { new: true , upsert: true} ,// new: true - will give you back the updated document // Upsert: it finds and updates the document but if the doc is not found(i.e it does not exist) then it creates a new document i.e UPdate Or inSERT  
//      )
     
//      res.send( { msg: allBooks})
// }

// const deleteBooks= async function (req, res) {
//     // let data = req.body 
//     let allBooks= await BookModel.updateMany( 
//         { authorName: "FI"} , //condition
//         { $set: {isDeleted: true} }, //update in data
//         { new: true } ,
//      )
     
//      res.send( { msg: allBooks})
// }




// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE




