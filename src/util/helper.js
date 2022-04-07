let printDate = function () {
    let currentDate = new Date()
    console.log('the current date is' + currentDate)
}
let printMonth = function () {
    let currentDate = new Date()
    console.log(currentDate.getMonth() + 1)
}
let getBatch = function () {
    console.log('Urenium, W3D3, the topic for today is Nodejs module system')
}


module.exports.pDate = printDate
module.exports.pMonth = printMonth
module.exports.gBatch = getBatch