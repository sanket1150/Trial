const express = require('express');
const date = require(__dirname+'/date.js');
const app = express();



app.listen(3000,()=>{
    console.log(date.getDay());
    console.log(date.getMonth());
    console.log(date.getYear());
});