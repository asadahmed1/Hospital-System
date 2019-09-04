var mongoose = require('mongoose'); 
 
var moment = require('moment'); 

const tokenSaleSchema = mongoose.Schema({
    token_price:{
        type:Number,
        default:800,  
    },
    p_name: {    
        type: String,
        require: true
    },
    tk_number:{
        type:Number,
        require:true
    }, 
    enterdate:{
        type: Date, 
        default:Date.now 
    },
    roleid:{
        type:String, 
        require: true
    },
    userid :{
        type : mongoose.Schema.Types.ObjectId,
        ref : "UserRoleSchema"
    }
   
},
{
    timestamps: true
})
 

//export schema
module.exports = mongoose.model('tokenSaleSchema',tokenSaleSchema)