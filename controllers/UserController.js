const saveuser_model = require('../models/UserModel');
var jwt = require('jsonwebtoken');
var bcrypt=require("bcrypt-node");

const DoctoDispSaveData = (req,res)=>{

    let SaveSignUpData = new saveuser_model()
    SaveSignUpData.UserRoll = req.body.UserRoll; 
    SaveSignUpData.name = req.body.name;
    SaveSignUpData.email = req.body.email;
    SaveSignUpData.password = req.body.password;
    SaveSignUpData.enterdate = req.body.enterdate;

    SaveSignUpData.save((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json({
                message:"User SignedUp Successfully",
                result
            })
        }

    })
}

 

const RollTypeLogin = (req, res) =>{

    jwt.verify(req.token, 'secretkey', {expiresIn: '30s'}, (err, authData) =>{
        if(err){
            res.sendStatus(403);
        }
        else{
            console.log(req.authData.user.UserRoll)
            if(req.authData.user.UserRoll == 'Doctor'){ 
                res.send("doctor page"); 
            }
            else{
                res.send('dis')
            }
            res.json({
                message: 'Accessed by loggedin user',
                authData
            })
        }
    })
}

//Verify Token 
function verifyToken(req, res, next){
    //Get Auth Header value
    const bearerHeader = req.headers['authorization'];
    // check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        //siplit at space
        const bearer = bearerHeader.split(' ');
        // get token from array
        const bearerToken = bearer[1];
        //set token
        req.token = bearerToken;
        //Next middleware
        jwt.verify(req.token, 'secretkey', {expiresIn: '30s'}, (err, authData) =>{
            if(err){
                res.status(403).send(err);
            }
            else{
                req.authData=authData;
                next();
            }
        })
    } 
    else {
        res.status(403).json({
            msg : "Forbidden"
        })
    }
}

module.exports =  {
    DoctoDispSaveData,
    RollTypeLogin,
    verifyToken
}