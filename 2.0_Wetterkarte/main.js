function weatherInfo(id=2761369) {
var key = '{e105b8b9538822cec7ff5f7d006f2e9a}';
fetch('http://api.openweathermap.org/data/2.5/forecast?q=Vienna,AT&units=metric&APPID=e105b8b9538822cec7ff5f7d006f2e9a')  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
      showWeather(data);
    })
    .catch(function() {
    
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
      document.getElementById('pressure').innerHTML = d.main.pressure +'hPa';
      document.getElementById('wind').innerHTML = d.wind.speed + 'm/s';
      document.getElementById('humidity').innerHTML = d.main.humidity + '%'
    
  }
