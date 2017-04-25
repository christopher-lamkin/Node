var request = require('request');

module.exports = function(location, callback){
  var encodedLocation = encodeURIComponent(location);
  var url = 'http://api.openweathermap.org/data/2.5/weather?appid=f2c20dc0a7b03b6941785435b7532b7c&q=' + encodedLocation + '&units=imperial';
  if (!location) {
    return callback('No location provided');
  }

  request({
    url: url,
    json: true
  }, function(error, response, body){
    if (error) {
      callback('Unable to fetch weather');
    } else {
      callback("It is " + body.main.temp + " degrees in " + body.name + "!");
    }
  });
}
