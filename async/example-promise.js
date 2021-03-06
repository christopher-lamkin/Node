var request = require('request');

function getWeather(location){
  return new Promise(function(resolve, reject){
    var encodedLocation = encodeURIComponent(location);
    var url = 'http://api.openweathermap.org/data/2.5/weather?appid=f2c20dc0a7b03b6941785435b7532b7c&q=' + encodedLocation + '&units=imperial';

    if(!location){
      reject('No location provided');
    }

    request({
      url: url,
      json: true
    }, function(error, response, body){
      if (error){
        reject('Unable to fetch weather');
      } else {
        resolve('It\'s ' + body.main.temp + ' in ' + body.name + '!');
      }
    });
  });
}

getWeather('san francisco').then(function(currentWeather){
  console.log(currentWeather)
}, function(error){
  console.log(error);
});
