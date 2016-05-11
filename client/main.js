$(document).ready(function() {
  getWeatherData();
})

function getWeatherData() {
  return $.get("http://api.openweathermap.org/data/2.5/forecast/city?id=4940625&APPID=6ace34d5c1936f6a6027b0e25ffa060e", function(data) {
    console.log(data);
  })
}
