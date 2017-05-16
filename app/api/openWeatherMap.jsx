var axios = require('axios');

const OPEN_WEATHER_MAP_URL= 'http://api.openweathermap.org/data/2.5/weather?&appid=ba803b8b2de7a428091380955fe80944&units=imperial';

module.exports = {
  getTemp: function(location){
    var endodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${endodedLocation}`;

    return axios.get(requestUrl).then(function(response){
      if(response.data.cod && response.data.message){
        throw new Error(response.data.message);
      } else {
        return response.data.main.temp;
      }
    }, function(response){
      throw new Error('Unable to find weather data for the location');
    });
  }
}
