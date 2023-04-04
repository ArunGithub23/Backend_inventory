/*const mongoose=require('mongoose');
const url="mongodb://localhost:27017/";
const dbconnect()=>{
    mongoose.connect(url);
}
module.exports dbconnect();
*/
let mongoose = require('mongoose');

const url='mongodb+srv://garun2161:Arun123@cluster1.sle0yvq.mongodb.net/?retryWrites=true&w=majority'; // REPLACE WITH YOUR DB SERVER
const database = 'Project1';      // REPLACE WITH YOUR DB NAME
mongoose.set('strictQuery', false);
class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
     mongoose.connect('mongodb+srv://garun2161:Arun123@cluster1.sle0yvq.mongodb.net/?retryWrites=true&w=majority')
       .then(() => {
         console.log('Database connection successful')
       })
       .catch(err => {
         console.error('Database connection error')
       })
  }
}

//module.exports = new Database();
const con=new Database();

