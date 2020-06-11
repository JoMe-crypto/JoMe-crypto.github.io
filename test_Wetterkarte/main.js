function weatherInfo(id=2761369) {
    var key = '{e105b8b9538822cec7ff5f7d006f2e9a}';
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Vienna,AT&APPID=e105b8b9538822cec7ff5f7d006f2e9a')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      showWeather(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
window.onload = function() {
    weatherInfo(2761369);
  }
  function showWeather (d) {
      var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      document.getElementById('description').innerHTML = d.weather[0].description;
      document.getElementById('temp').innerHTML = celcius + '&deg;';
      document.getElementById('location').innerHTML = d.name;
        
	if( description.indexOf('rain') > 0 ) {
  	document.body.className = 'rainy';
  } else if( description.indexOf('cloud') > 0 ) {
  	document.body.className = 'cloudy';
  } else if( description.indexOf('sunny') > 0 ) {
  	document.body.className = 'sunny';
  }
}