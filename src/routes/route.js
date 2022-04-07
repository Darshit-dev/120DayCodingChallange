const express = require('express');
const logger = require('./logger')

const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('------------------')
    console.log(req)
    console.log('------------------')
    console.log('These are the request query parameters: ', req.query)
    res.send('My first ever api!')
});

router.get('/movies/:indexNumber', function (req, res) {
    let mArr = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]

    let i = req.params.indexNumber

    let catchMovie;
    if ((i - 1) < mArr.length) {
        catchMovie = mArr[i - 1]
    } else {
        catchMovie = "please enter number within" + mArr.length
    }
    res.send(catchMovie)

});

router.get('/films/:filmID',function(req,res){
    // how to send both response together in a single request
    const filmArr = [{
        id: 1,
        name: "The Shining"
    }, {
        id: 2,
        name: "Incendies"
    }, {
        id: 3,
        name: "Rang de Basanti"
    }, {
        id: 4,
        name: "Finding Nemo"
    }]
    console.log(filmArr)
    //res.send(filmArr[req.params.filmID-1])
    let catchFilm;  //why i am not able to use const ?
    if ((i - 1) < filmArr.length) {
        catchFilm = mArr[i - 1]
    } else {
        catchFilm = "please enter number within" + filmArr.length
    }
    res.send(catchFilm)

})



module.exports = router;
// adding this comment for no reason