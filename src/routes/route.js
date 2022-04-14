const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
// const UserController= require("../controllers/userController")
 const BookController= require("../controllers/bookController")

// router.get("/test-me", function (req, res) {
//     res.send("My first ever api!")
// })

router.post('/createBook', BookController.createBook);
router.post('/addAuthor', BookController.addAuthor);
router.get('/bookbyChetanBhagat', BookController.bookbyChetanBhagat);
router.get('/findandUpdateTwoStates', BookController.findandUpdateTwoStates);
router.get('/findBooks', BookController.findBooks);

module.exports = router;





// router.get("/findandUpdateTwoStates", BookController.findandUpdateTwoStates)

// router.get("/getUsersData", bookbyChetanBhagat.bookbyChetanBhagat)

// router.post("/createBook", BookController.createBook  )

// router.get("/getBooksData", BookController.getBooksData)

// router.post("/updateBooks", BookController.updateBooks)
// router.post("/deleteBooks", BookController.deleteBooks)

// //MOMENT JS
// const moment = require('moment');
// router.get("/dateManipulations", function (req, res) {
    
//     // const today = moment();
//     // let x= today.add(10, "days")

//     // let validOrNot= moment("29-02-1991", "DD-MM-YYYY").isValid()
//     // console.log(validOrNot)
    
//     const dateA = moment('01-01-1900', 'DD-MM-YYYY');
//     const dateB = moment('01-01-2000', 'DD-MM-YYYY');

//     let x= dateB.diff(dateA, "days")
//     console.log(x)

//     res.send({ msg: "all good"})
// })

