var express = require('express');
var app = express();
var router = express.Router();
var bodyParser = require('body-parser');
var request = require('request');
var moment = require('moment')
var cron = require('node-cron');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

var firebaseUrl = 'https://sockettime.firebaseio.com/.json?print=silent&auth='+process.env.firebaseToken

cron.schedule('* * * * * *', function(){
    updateTime()
});

function updateTime() {
    request.put(
        firebaseUrl,
        { json: { utc:moment().format(), unix_second:moment().format("X"), unix_millisecond: moment().format("x"), iso8601: moment().toISOString()} },
        function (error, response, body) {
            if (error) {
                console.log("ERROR: "+error)
            }
        }
    );
}