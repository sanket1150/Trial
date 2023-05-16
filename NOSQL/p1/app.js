const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
mongoose.connect("mongodb://127.0.0.1:27017/fromBE")

const beschema = new mongoose.Schema({
    name: String,
    Author:String,
    value : Number,
});

const beModel = mongoose.model("beModel",beschema);


app.get('/', (req, res) => {
    res.render('index');
});


app.post('/', (req, res) => {
const beModel2 = new beModel({
    name:req.body.lname,
    Author:req.body.author,
    value:req.body.lvalue,
});
beModel2.save();
res.redirect('/');

});


app.listen(3000, () => {
    console.log('listening on port 3000');
});