var weather = require('./weather.js');
var location = require('./location.js');

var argv = require('yargs')
  .option('location', {
    alias: 'l',
    demand: false,
    describe: 'Location to fetch weather for',
    type: 'string'
  })
  .help('help')
  .argv

if (typeof argv.l === 'string' && argv.l.length > 0){
  weather(argv.l).then(function(currentWeather){
    console.log(currentWeather);
  }, function(error){
    console.log(error);
  });
} else {
  location().then(function(location){
    weather(location.city).then(function(currentWeather){
      console.log(currentWeather);
    }, function(error){
      console.log('unable to guess location!');
    });
  });
}