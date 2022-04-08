let players =
    [
        {
            "name": "manish",
            "dob": "1/1/1995",
            "gender": "male",
            "city": "jalandhar",
            "sports": [
                "swimming"
            ]
        },
        {
            "name": "gopal",
            "dob": "1/09/1995",
            "gender": "male",
            "city": "delhi",
            "sports": [
                "soccer"
            ]
        },
        {
            "name": "lokesh",
            "dob": "1/1/1990",
            "gender": "male",
            "city": "mumbai",
            "sports": [
                "soccer"
            ]
        },
    ]


let manipulation = function (req, res) {
    let data = req.body
    console.log(data)
    

    players.map((item)=>{
        if(item.name === data.name ){
            return res.status(404).send("player name is already exist!")
        }

    })
    players.push(data)

    res.send({ msg: "hi guys", newPlayer : players })
    
}

module.exports.manipulation = manipulation;
