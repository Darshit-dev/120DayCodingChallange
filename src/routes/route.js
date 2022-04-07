const express = require('express');
const loggerModule = require('../logger/logger')
const formatterM =  require('../validator/formatter')
const router = express.Router();
const lodash = require('lodash');
router.get('/test-me', function (req, res) {
    
    loggerModule.welcomeMsg();

    formatterM.trinmString();
    formatterM.stringLcase();
    formatterM.stringeUcase();
    res.send('My first ever api!')
});

router.get('/hello', function (req, res) {
    let month = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec']
    let subArray = lodash.chunk(month, 3)
    console.log(subArray)
    res.send('My second ever api!')

    let oddNumber = [1,3,5,7,9,11,13,15,17,19]
    console.log(oddNumber.tail(9))
    
    let a =[1,2,5,6]
    let b =[2,5,7,9]
    let c =[3,4,6,2,8]
    let d =[2,2,2]
    let e =[1,2,3,4,5,6,7,8,9,10]
        console.log(lodash.union(a,b,c,d,e))
        
    }
    
);




module.exports = router;
// adding this comment for no reason