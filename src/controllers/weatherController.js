const axios = require('axios')


const getCityWeather = async function (req, res) {
    try {
        let city = req.query.city
        let options = {
            method: "get",
            url: `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9e6ed1ab741e24715c868aee9ef2c4b1`
        }
        let result = await axios(options)
        let data = result.data.main.temp
        res.status(200).send({ temp: data, status: true })
    }
catch (error) {
    console.log(error)
    res.status(500).send({ msg: error.message })
}
}

const getCityTemp = async function (req, res) {
    try {
        let all = req.query.id
        console.log(all)
        let options = {
            method: "get",
            url: `http://api.openweathermap.org/data/2.5/group?$id=${all}&appid=9e6ed1ab741e24715c868aee9ef2c4b1`
        }
        let result = await axios(options)
        let data = result.data
        res.status(200).send({ data: data, status: true })
    }
catch (error) {
    console.log(error)
    res.status(500).send({ msg: error.message })
}
}

module.exports = {getCityWeather,getCityTemp}