const express = require('express')
const bodyParser = require('body-parser');



const app = express() 
app.use(bodyParser.urlencoded({ extended:true}));
app.listen(3000,function(){
    console.log('listening on 3000 port ');
});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function(req,res){
    res.send("<h1>Form Submitted</h1> <br> and calculation is"+((Number(req.body.num1))+Number((req.body.num2))));
});