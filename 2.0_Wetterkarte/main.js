
function weatherInfo(id=2761369) {
var key = '{e105b8b9538822cec7ff5f7d006f2e9a}';
fetch('http://api.openweathermap.org/data/2.5/forecast?q=Vienna,AT&units=metric&APPID=e105b8b9538822cec7ff5f7d006f2e9a')  
    .then(function(resp) { return resp.json() }) 
    .then(function(data) {
      showForecast(data);
      showMorgen(data);
      showÜbermorgen(data);
    })
    .catch(function() {
    
    });
  }

  window.onload = function() {
    weatherInfo(2761369);
  }

  function showForecast (d) {
    //var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      //document.getElementById('date').innerHTML = d.list[0].sys.dt_txt; 
      document.getElementById('description').innerHTML = d.list[0].weather[0].description;
      document.getElementById('temp').innerHTML = d.list[0].main.temp + '&degC';
     //document.getElementById('name').innerHTML = d.city.name;
      document.getElementById('wind').innerHTML = d.list[0].wind.speed + 'm/s';
      document.getElementById('humidity').innerHTML = d.list[0].main.humidity + '%'
  
  }

function showMorgen (d) {
    //var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      //document.getElementById('date').innerHTML = d.list[1].sys.dt_txt; 
      document.getElementById('description_1').innerHTML = d.list[1].weather[0].description;
      document.getElementById('temp_1').innerHTML = d.list[1].main.temp + '&degC';
     // document.getElementById('name').innerHTML = d.city.name;
      document.getElementById('wind_1').innerHTML = d.list[1].wind.speed + 'm/s';
      document.getElementById('humidity_1').innerHTML = d.list[1].main.humidity + '%'
  
  }

  function showÜbermorgen (d) {
    //var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      //document.getElementById('date').innerHTML = d.list[1].sys.dt_txt; 
      document.getElementById('description_2').innerHTML = d.list[2].weather[0].description;
      document.getElementById('temp_2').innerHTML = d.list[2].main.temp + '&degC';
     // document.getElementById('name').innerHTML = d.city.name;
      document.getElementById('wind_2').innerHTML = d.list[2].wind.speed + 'm/s';
      document.getElementById('humidity_2').innerHTML = d.list[2].main.humidity + '%'
  
  }
  
  

 

  /*function showWeather (d) {
    var celcius = Math.round(parseFloat(d.main.temp)-273.15);
      document.getElementById('description').innerHTML = d.weather[1].description;
      document.getElementById('temp').innerHTML = d.main[1].temp + '&deg;';
      document.getElementById('name').innerHTML = d.city.name;
      document.getElementById('pressure').innerHTML = d.main[1].pressure +'hPa';
      document.getElementById('wind').innerHTML = d.wind[1].speed + 'm/s';
      document.getElementById('humidity').innerHTML = d.main[1].humidity + '%'
    
  }

  window.onload = function() {
    weatherInfo(2761369);
  } 
  */