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
    console.log(data.name)
    
    let flag=0;

    players.map((item)=>{
        if(item.name === data.name ){
            
            flag =1
            
        }
        
    })
    if(flag === 1){
        return res.send("player name is already exist!")
    }
    else {
    
    players.push(data)
    }
    console.log(players)
    return res.send( { NewPlayers :players })
    
}

module.exports.manipulation = manipulation;
