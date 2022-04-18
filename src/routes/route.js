const express = require('express');
const router = express.Router();

//importing module
const allController = require('../controllers/allController')




router.post('/createBatch',allController.createBatch)
router.post('/createDev',allController.createDev)
router.get('/developers',allController.devFromBatch)
router.get('/scholership',allController.scholership)

module.exports = router;