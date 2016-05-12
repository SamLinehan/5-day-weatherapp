angular.module("wanderground")
  .factory("ForecastService", ForecastService);

  ForecastService.$inject = ["$http"];

  function ForecastService($http) {
    return {
      getWeatherData: function getWeatherData() {
        return $http.get(
          "http://localhost:3000/data"
        ).then(function(response) {
          return response.data;
        })
      }
    }
  }
