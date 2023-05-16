const express = require('express');
const bodyParser = require('body-parser');
const app = express();

var text = [];
var work = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', function (req, res) {
    const date = new Date();
    var options = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    };
    var day = date.toLocaleDateString("en-US", options);
    // console.log(day);
    res.render('index', { 'Title': day.toString() ,'text':text});
});

app.post("/", function (req, res) {
    console.log(req.body.button);
    if(req.body.button ==='Work'){
        work.push(req.body.todo);
        res.redirect('/work');
    }else{
        text.push(req.body.todo);
        res.redirect('/');
    }
});


app.get('/work', function (req, res) {
    res.render('index', { 'Title': 'Work List' ,'text':work} );
});
app.post('/work', function (req, res) {
    work.push(req.body.todo);
    res.redirect('/work');
});

app.listen(3000, () => {
    console.log('listening on 3000 ');
});