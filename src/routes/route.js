const express = require('express');
//const logger = require('./logger')

const router = express.Router();

// router.get('/test-me', function (req, res) {
//     console.log('------------------')
//     console.log(req)
//     console.log('------------------')
    
//     console.log('These are the request query parameters: ', req.query)
//     res.send('My first ever api!')
// });

router.get('/movies', function (req, res) {
    let mArr = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]
    res.send(mArr)
});

router.get('/movies/:indexNumber', function (req, res) {
    let mArr = ["rand de basnasti", "the shining", "lord of the rings", "bartman begins"]

    let i = req.params.indexNumber

    let catchMovie;
    if ((i - 1) < mArr.length ) {
        catchMovie = mArr[i - 1]
    } else {
        catchMovie = "please use a valid index within  " +  mArr.length
    }
    res.send(catchMovie)
    
});
//==============================**=======================================//



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



router.get('/films/',function(req,res){
    res.send(filmArr)
})




router.get('/films/:filmID',function(req,res){
    
    let i = req.params.filmID
    
    let catchFilm;      
    if ((i - 1) <filmArr.length) {
        catchFilm = filmArr[i - 1]
    } else {
        catchFilm = "No movie exists with this id " + i
    }
    
    res.send(catchFilm)

})
module.exports = router;
// adding this comment for no reason