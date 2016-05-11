var Express = require("express");
var app = Express();
var request = require("request");
require("dotenv").config();


app.get("/data", function(req, res) {
  request("http://api.openweathermap.org/data/2.5/forecast/city?id=4940625&APPID=" + process.env.WEATHER_API_KEY, function(error, response, body) {
    if(error) {
      console.log("Error! Request failed - " + error);
    } else if(!error && response.statusCode === 200) {
      res.send(body);
    }
  });
})

app.listen(3000);
