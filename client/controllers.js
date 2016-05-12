angular.module("wanderground")
  .controller("ForecastController", ForecastController);

ForecastController.$inject = ['$scope', 'ForecastService']

function ForecastController($scope, ForecastService) {
  ForecastService.getWeatherData().then(function(data) {
    var fiveDays = [];
    var daysData = data.list;

    var weatherDataIndex = 0;
    for(var i = 0; i <= 4; i++) {
      var daySection = daysData.slice(weatherDataIndex, weatherDataIndex + 8)
      var newDay = {
        time: daysData[weatherDataIndex].dt,
        minTemp: temperatures(daySection).minTemp,
        maxTemp: temperatures(daySection).maxTemp,
        description: daysData[weatherDataIndex].weather[0].description,
        icon: daysData[weatherDataIndex].weather[0].icon
      }
      fiveDays.push(newDay);
      weatherDataIndex += 8;
    }
    console.log(fiveDays);
    $scope.fiveDays = fiveDays;
  })

  function temperatures(daysData) {
    var temperaturesArray = [];
    for(var i = 0; i < daysData.length; i ++) {
      temperaturesArray.push(daysData[i].main.temp);
    }
    return {
      maxTemp: Math.max.apply(Math, temperaturesArray),
      minTemp: Math.min.apply(Math, temperaturesArray)
    };
  }
}
