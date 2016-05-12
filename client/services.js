angular.module("wanderground")
  .factory("ForecastService", ForecastService);

  ForecastService.$inject = ["$http"];

  function ForecastService($http) {
    return {
      getWeatherData: function getWeatherData() {
        return $http.get(
          "https://wanderground.herokuapp.com/data"
          // "http://localhost:3000/data"
        ).then(function(response) {
          return response.data;
        })
      }
    }
  }
