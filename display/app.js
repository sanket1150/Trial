const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) =>{
    res.type('text/html');
    res.write(`<p id = "firstName">First Name: ${ req.body.fName}</p><br>`);
    res.write(`Last Name:  ${req.body.lName}<br>`);
    res.write(`Email:  ${req.body.email}</p><br>`);
    res.write(`tweet: <h1>${req.body.tweet}</h1>`);
    res.write('<script>document.getElementById("firstName").innerHTML = "hello world"</script>');
    res.send();
});

app.listen(process.env.PORT ||3000,function() {
    console.log('listening on port 3000 ');
});
