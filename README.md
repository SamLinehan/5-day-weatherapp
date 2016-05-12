#5 Day Weather Forecast App

##Description
Wanderground (short for Weather Above Ground) is a web app that shows the current 5 day weather forecast for the town of Ipswich, MA. The data being used in this app comes from the [OpenWeatherMap API](http://openweathermap.org/forecast5).

To view the back-end repo, please follow this link:
[Back-End](https://github.com/SamLinehan/wanderground-server)

##Deployed Site
[Wanderground](https://wanderground.firebaseapp.com/#/forecast)

[Server](https://wanderground.herokuapp.com/data)

##Development Environment Setup
After cloning the repo, install dependencies using npm:

`npm install`

To run gulp tasks, use the following commands:

SCSS Linter:
`gulp scss-lint`

SASS Watch:
`gulp sass:watch`

##Wireframes

Initially planned to have icons showing the weather, however had to push off due to time constraints.

Desktop View
![Desktop View](http://i.imgur.com/Bs4hU6s.png)

Device View
![Device View](http://i.imgur.com/6zFALxW.png)

##Sample Testing
To install Mocha, type the following into your terminal:
`npm install -g mocha`

To run tests, go into 'tests/tests.js' and remove the "x" in the sequence "xit". The command to run the tests from the root terminal is `mocha tests/`.

To test more code, add code to tests/main.js.


##Sample User Stories
- As a user, I want to know which city's forecast I'm looking at
- As a user, I want to see the temperatures of the day's forecast
- As a user, I want to see if it will be cloudy/sunny/rainy
- As a user, I want to see a description of the weather
- As a user, I want to see the most up to date forecast
