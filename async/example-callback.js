var request = require('request');
var encodedLocation = 'Philadelphia';
var url = 'http://api.openweathermap.org/data/2.5/weather?appid=f2c20dc0a7b03b6941785435b7532b7c&q=' + encodedLocation + '&units=imperial';

request({
  url: url,
  json: true
}, function(error, response, body){
  if (error) {
    console.log('Unable to fetch weather');
  } else {
    // console.log(JSON.stringify(body, null, 4))
    console.log("It is " + body.main.temp + " degrees in " + body.name + "!");
  }
});
