const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000,function(){
    console.log('listening on 3000');
});

app.get('/',function(req,res){
    res.sendFile(__dirname + '/index.html');
});

app.post('/',function(req,res){
    res.send('Bmi Is : '+ Number(req.body.weight)/(Number(req.body.height)*Number(req.body.height)))
});