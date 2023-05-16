const express = require('express');
const bodyParser = require('body-parser');
var works = [];
var todos = [];
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.render('index', {'title': "TODO's",items:todos});
});

app.post('/', (req, res) => {
    console.log(req.body);
    if(req.body.button ==="works"){
        works.push(req.body.text);
        res.redirect('/work');
    }else{
        todos.push(req.body.text);
        res.redirect('/');
    }
});

app.get('/work', (req, res) => {
    res.render('index', {'title': "works",items:works});
});

app.post('/work', (req, res) => {
    res.redirect('/work');
});
app.listen(3000);