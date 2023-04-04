


const express=require('express');
let productmodel = require('./model/productmodel');

app=express();
const cors=require('cors');
app.use(cors());
app.use(express.json());
app.post( "/addproduct", (req,resp)=>{
    

    let name=req.body.name;
    let price=req.body.price;
    let id=req.body.id;
    let data = new productmodel({productid:id,productname:name,productprice:price});
data.save().then((doc) => {
console.log(doc);
})
.catch((err) => {
console.error(err);
});


});



app.get("/XYZ",async(req,res)=>
{
   //res.send({E:50});
   let data=await productmodel.find({}); 
   console.log("okk2");
   console.log(data);
   res.send(data); 
  //  const data=[{id:"1",name:"redmi",price:"1000"},{id:"2",name:"samsung",price:"2000"},{id:"3", name:"AJAY GUPTA",price:"NOT FOR SOLD"}]
  //   console.log(data);
  //   res.send(data);
   
});

app.delete('/delete',async(req,res)=>{
  console.log(req.body);
  let data=await productmodel.deleteOne(req.body);
  console.log(data);
});
app.listen(4000,  function(err){
    if (err) console.log("Error in server setup")
    console.log("Server listening on Port", 4000);
   


});
