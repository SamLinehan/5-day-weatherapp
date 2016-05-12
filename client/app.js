var app = angular.module('wanderground', ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/forecast");

    $stateProvider.state("/forecast", {
      templateUrl: "templates/forecast.html",
      controller: "ForecastController",
      url: "/forecast"
    });
  })
