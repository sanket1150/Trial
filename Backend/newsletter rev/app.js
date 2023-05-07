const express = require('express');
const bodyParser = require('body-parser');
const mailchimp = require("@mailchimp/mailchimp_marketing");
const request = require('request');


mailchimp.setConfig({
    apiKey: "b5b4f4c227e3ee64ca28522c5f10a04d-us8",
    server: "us8",
});

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/success', function (req, res) {
    res.sendFile(__dirname + '/success.html');
});

app.post('/success', function (req, res) {
    const fName = req.body.fName;
    const lName = req.body.lName;
    const email = req.body.email;

    const listId = "3cd7c90b93";
    const subscribingUser = {
        firstName: req.body.fName,
        lastName: req.body.lName,
        email: req.body.email,
    };
    
    async function run() {
        try{
        const response = await mailchimp.lists.addListMember(listId, {
            email_address: subscribingUser.email,
            status: "subscribed",
            merge_fields: {
                FNAME: subscribingUser.firstName,
                LNAME: subscribingUser.lastName
            }
        });
        console.log(response);
    }catch (error) {
        console.error(error);
        console.log(error.status);
    }
          
    }

    run();

    res.sendFile(__dirname + '/success.html');

    console.log(fName, lName, email);
});
app.listen(3000, () => {
    console.log('listening on 3000');
});

// b5b4f4c227e3ee64ca28522c5f10a04d-us8