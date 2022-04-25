const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const weatherController = require('../controllers/weatherController')
const setuController = require('../controllers/setuController')
const Memes = require('../controllers/memeController')
//Assignmnet - 1
router.get('/cowin/getDistricWise', setuController.findByDistrict)

//Assignmnet - 2
router.get('/weather/city',weatherController.getCityWeather)
router.get('/weather/cityTemp',weatherController.getCityTemp)

//asignmnet -3
//Assignment 3 - Memes API requests 87743020
router.get('/getAllMemes', Memes.getAllMemes);
router.post('/createMemes', Memes.createMemes);













router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)

router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;