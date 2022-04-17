const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController = require("../controllers/bookController")
const publisherController = require('../controllers/publisherController')

//All routes
router.post('/createAuthor',authorController.createAuthor)
router.post('/createBook',bookController.createBook)
router.post('/createPublisher',publisherController.createPublisher)

router.get('/fetchAllData',bookController.fetchAllData)
//4th(a)
router.put('/updateBook',bookController.updateBook)

//4th(b)
router.put('/BooksUpdatePrice',bookController.BooksUpdatePrice)


module.exports = router;