const tokenIssued = require('../models/tokeIssuedModel');
const AllQueries = require('../models/UserModel');
var moment = require('moment');

 
const tokenIssuedData = (req,res)=>{

    const now = new Date();
	const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
	 
	tokenIssued.findOne({enterdate: {$gte: today}}).sort({$natural: -1}).limit(1).exec(function(err, ress){
		if(ress==null){

            var tk_number= 1;
            
		}else{
            
			var tk_number= ress.tk_number+1;
        }
    console.log(tk_number);
    let tokenIssueds = new tokenIssued();
    tokenIssueds.tk_number = tk_number;  
    
    tokenIssueds.userid = req.authData.user._id;
    tokenIssueds.p_name = req.body.p_name; 
    tokenIssueds.roleid = req.body.roleid;
    
    

    tokenIssueds.save((err,result)=>{
        if(err){
            res.send(err)
        }
        else{
            res.status(200).json({
                message:"Token sale data saved Successfully",
                result
            })
        }

    })
})
}


 







//Find By Month
const ByMonth = (req, res) => {
    let month = req.body.month;
    //console.log(month)
    tokenIssued.aggregate([
        {
          $project: {
            month: { $month: "$enterdate" }
          }
        },
        {
          $match: {
            month: month
          }
        }
      ], (err, result) =>{
        console.log(result)
        if(result !=''){
            res.json({
                result
            })
        }
        else{
            res.json({
                msg : "no record found"
            })
        }
    })

}
 
const Byyear = (req, res) => {
    let year = req.body.year;

    tokenIssued.aggregate([
        {
            $project : {
                year: { $year: "$createdAt" }
            }
        },
        {
            $match : {
                year : year
            }
        }
    ], (err, result) => {
        if (result != '' )
        {
            res.json({
                result
            })
        }else{
            res.json({
                msg : "no record found"
            })
        }
        // console.log(result)
    })
} 

const ByPtName = (req, res, next) =>{
    tokenIssued.find({ p_name: req.body.p_name }, function(err, byp_name) {
        if(err){
            res.send('err');
            console.log(err)
        }
        else{
            res.status(200).json({
                message:"Get all contacts",
                byp_name
            })
        }
    })
}  
    const FindByBetweenDate = (req,res)=>{
    var startdate=moment(req.body.startdate).format('YYYY-MM-DD').toString();
    var endDate=moment(req.body.endDate).format('YYYY-MM-DD').toString();
    
    tokenIssued.aggregate( [{
        "$match": {
            "enterdate": { "$gte": new Date(startdate), "$lte": new Date(endDate) }
        },
            },{
                $group : {
                    _id : null,
                    total : {
                        $sum : "$token_price"
                    }
                }
            }],function (err, result) {
                    if(err){
                        res.send(err);
                    }
                    else{
                        res.status(200).json({
                            message: "data get successfully",
                            result
                        })
                    }
                }
            )	
        
    
    } 
 
const DispancerID = (req, res, next) =>{
    tokenIssued.find({userid: req.body.userid }, function(err, DispancerID){
        if(err){
            res.send('err');
            console.log(err)
        }
        else{
            res.status(200).json({
                message:"Get all contacts",
                DispancerID
            })
        }
    })
}
    
 module.exports = {
     tokenIssuedData, 
     ByPtName,
     DispancerID,
     ByMonth,
     Byyear,
     FindByBetweenDate
 }
 