const express = require('express');
const mongoose = require('mongoose');
const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/student");
const details = mongoose.Schema({
    name : String,
    rollNo: Number,
})

const studetails = mongoose.model('studetails',details);

const sanket = new studetails({
    name:'Sanket A Karande',
    rollNo: 21,
})

sanket.save();

app.listen(3000,() => {
    console.log('listening on http://localhost');
});