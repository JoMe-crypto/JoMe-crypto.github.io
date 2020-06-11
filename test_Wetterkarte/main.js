function weatherInfo(id=2761369) {
    var key = '{e105b8b9538822cec7ff5f7d006f2e9a}';
    fetch('http://api.openweathermap.org/data/2.5/weather?q=Vienna,AT&APPID=e105b8b9538822cec7ff5f7d006f2e9a')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }
  
  window.onload = function() {
    weatherInfo(2761369);
  }