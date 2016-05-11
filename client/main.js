$(document).ready(function() {
  getWeatherData().then(function(data) {
    var weatherData = JSON.parse(data);
    var fiveDays = [];
    var daysData = weatherData.list;

    var weatherDataIndex = 0;
    for(var i = 0; i <= 4; i++) {
      var daySection = daysData.slice(weatherDataIndex, weatherDataIndex + 8)
      // console.log(daySection);
      temperatures(daySection).maxTemp;
      temperatures(daySection).minTemp;
      // var newDay = {
      //   time: weatherData[weatherDataIndex].dt,
      //   minTemp:
      //   maxTemp: ,
      //   description: ,
      //   icon: ,
      // }
      weatherDataIndex += 8;
    }
  })
});

function getWeatherData() {
  return $.get("http://localhost:3000/data", function(data) {
    return data;
  })
}

function temperatures(daysData) {
  var temperaturesArray = [];
  for(var i = 0; i < daysData.length; i ++) {
    temperaturesArray.push(daysData[i].main.temp);
  }
  // console.log(temperaturesArray);
  console.log({
    maxTemp: Math.max.apply(Math, temperaturesArray),
    minTemp: Math.min.apply(Math, temperaturesArray)
  })
  return {
    maxTemp: Math.max.apply(Math, temperaturesArray),
    minTemp: Math.min.apply(Math, temperaturesArray)
  };
}
