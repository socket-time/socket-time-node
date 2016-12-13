var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');
var moment = require('moment')

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var firebaseUrl = 'https://sockettime.firebaseio.com/utc.json?auth='+process.env.firebaseToken

request.post(
    firebaseUrl,
    { json: moment().format() },
    function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body)
        }
    }
);

console.log(moment().format())