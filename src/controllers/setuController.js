let axios = require('axios')

let findByDistrict = async function (req, res) {

    try {
        let id = req.query.district_id
        let date = req.query.date
        let options = {
            method: 'get',
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${id}&date=${date}`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({data:data,status:true})
        
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}
module.exports.findByDistrict = findByDistrict