const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const mailchimp = require("@mailchimp/mailchimp_marketing");

mailchimp.setConfig({
  apiKey: "eff854d14a3fb8ff8f0accdc44c92a6c-us8",
  server: "us8"
});

app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post('/', function (req, res) {
    console.log(req.body.fName);
    console.log(req.body.lName);
    console.log(req.body.email);

    const listId = "3cd7c90b93";
    const subscribingUser = {
      firstName: req.body.fName,
      lastName: req.body.lName,
      email: req.body.email,
    };
    
    async function run() {
      const response = await mailchimp.lists.addListMember(listId, {
        email_address: subscribingUser.email,
        status: "subscribed",
        merge_fields: {
          FNAME: subscribingUser.firstName,
          LNAME: subscribingUser.lastName,
        }
      });
      if(response.statusCode == 200){
        res.sendFile(__dirname+'/Success.html');
      }else{
        res.sendFile(__dirname+'/Failure.html');
      }
      console.log(
        `Successfully added contact as an audience member. ${
          response.statusCode
        }.`
      );
    }
    
    run();

    
    // res.write(req.body.fName+"\n")
    // res.write(req.body.lName+"\n")
    // res.write(req.body.email+"\n")
    // res.send();


});



app.listen(3000, function () {
    console.log('listening on 3000 ');
});



//api -- eff854d14a3fb8ff8f0accdc44c92a6c-us8