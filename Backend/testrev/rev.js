const express = require('express');

const app = express();

app.listen(3000,function(){
    console.log('listening on 3000');
});

app.get('/', function(req,res){
    res.send('<h1>Rev Done Danna Done</h1>');
});