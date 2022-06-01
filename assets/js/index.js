var startButton = $("#start-button");
var planetDisplay = $("#planet-display");
var weatherDisplay = $("#weather-display");

var swapi1 = "https://swapi.dev/api/planets/?page=1";
var swapi2 = "https://swapi.dev/api/planets/?page=2";
var swapi3 = "https://swapi.dev/api/planets/?page=3";

var myWeatherAPIKey = "34010a9f11bb2f02977743a236eef58a";

var planetsArray = [];

function appendPlanets() {
  var newList = $("<ul>");

  for (var i = 0; i < planetsArray.length; i++) {
    var newLi = $("<li>");
    newLi.text(
      i +
        " Planet Name: " +
        planetsArray[i].name +
        ", Planet Climate: " +
        planetsArray[i].climate.split(",")[0]
    );
    newList.append(newLi);
  }
  planetDisplay.append(newList);
}

//remove index 27 from planet array as its unknown from swapi
function cutOutUnknown() {
  planetsArray.splice(27, 1);
}

function getPlanetInfo() {
  fetch(swapi1).then(function (response) {
    response.json().then(function (data) {
      for (var i = 0; i < data.results.length; i++) {
        planetsArray.push(data.results[i]);
        console.log(planetsArray);
      }
      fetch(swapi2).then(function (response2) {
        response2.json().then(function (data2) {
          for (var i = 0; i < data2.results.length; i++) {
            planetsArray.push(data2.results[i]);
            console.log(planetsArray);
          }
          fetch(swapi3).then(function (response3) {
            response3.json().then(function (data3) {
              for (var i = 0; i < data3.results.length; i++) {
                planetsArray.push(data3.results[i]);
                console.log(planetsArray);
              }
              cutOutUnknown();
              appendPlanets();
            });
          });
        });
      });
    });
  });
}

function getWeather() {
  var saharaDesertLAT = 25.28;
  var saharaDesertLON = 14.43;
  var saharaDesertURL =
    "https://api.openweathermap.org/data/2.5/weather?lat=" +
    saharaDesertLAT +
    "&lon=" +
    saharaDesertLON +
    "&units=imperial" +
    "&appid=" +
    myWeatherAPIKey;

  fetch(saharaDesertURL).then(function (response) {
    response.json().then(function (data) {
      var newP = $("<p>");
      newP.text(
        "Current temperature on Tatooine: " + data.main.temp + " fahrenheit"
      );
      weatherDisplay.append(newP);
    });
  });
}

function main() {
  getPlanetInfo();
  getWeather();
}

startButton.on("click", main);
