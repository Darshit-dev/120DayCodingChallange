const express = require('express');
const router = express.Router();

//importing module
const allController = require('../controllers/allController')

const mid = function(req,res,next){
    let logging =true
    if(logging){
        let mydate = new Date()
        console.log("your date is :" + mydate + "and your ip is " + req.ip)
        next()
    }
    else{
        res.send("mds : Please logging first")
    }
    
}


router.post('/createBatch',mid,allController.createBatch)
router.post('/createDev',mid,allController.createDev)
router.get('/developers',mid,allController.devFromBatch)
router.get('/scholership',mid,allController.scholership)

module.exports = router;