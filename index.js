
const express=require('express');
app=express();

app.get("/abc",(req,res)=>
{
   res.send({E:50});
    
}
);

app.get("/",(req,res)=>
{
   res.send({E:5000});
    
}
);

app.listen(4000, function(err){
    if (err) {console.log("Error in server setup");}
    console.log("Server listening on Port", 4000);
});
