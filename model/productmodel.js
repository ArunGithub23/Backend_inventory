const mongoose=require('mongoose');
require('../config/dbcon.js');
const productschema=mongoose.Schema({
    
    productid:{
        type:String,
        require:true
    },
    
    productname:{
        type:String,
        require:true
    },
    productprice:{
        type:Number,
        require:true
    }
   
});
module.exports=mongoose.model("productmodel",productschema);