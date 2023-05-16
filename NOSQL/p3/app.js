const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/student");

const mySchema = new mongoose.Schema({
    name: String,
    rollNo: Number,
  });
  
  // Compile the schema into a model


// create a Mongoose model for your data
const studetails = mongoose.model('studetails', mySchema);

const sakshi = new studetails({
  name:"Sakshi k",
  rollNO:43
})

const siddhi = new studetails({
  name:"siddhi k",
  rollNO:43
})

const swaraj = new studetails({
  name:"swaraj k",
  rollNO:43
})

async function ins() {
//const res = await studetails.insertMany([sakshi,siddhi,swaraj]);
//const res = await studetails.deleteMany({_id:{$eq:"swaraj k"}});
//const res = await studetails.updateMany({name:{$eq:"swaraj k"}},{name:"Sanket k"});
}
// query your data using the Mongoose model
async function getData() {
  try {
    const data = await studetails.find();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
ins();
getData();








console.log("-----------------------------------------------------------");
app.listen(3000,()=>{
    console.log('listening on port 3000');
});