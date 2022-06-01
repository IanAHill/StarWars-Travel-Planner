var searchByPlanetButton = $("#search-by-planet-button"); // NEEDS TO BE LINKED WITH HTML ***********
var searchByClimateButton = $("#search-by-climate-button"); // NEEDS TO BE LINKED WITH HTML ***********
var planetInput = $("#planet-input"); // NEEDS TO BE LINKED WITH HTML ***********
var climateInput = $("#climate-input"); // NEEDS TO BE LINKED WITH HTML ***********

var swapi1 = "https://swapi.dev/api/planets/?page=1";
var swapi2 = "https://swapi.dev/api/planets/?page=2";
var swapi3 = "https://swapi.dev/api/planets/?page=3";

var myWeatherAPIKey = "34010a9f11bb2f02977743a236eef58a";

var planetsArray = [];
var searchedClimatesArray = [];

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
              // cutOutUnknown();
              localStorage.setItem(
                "planetsArray",
                JSON.stringify(planetsArray)
              );
            });
          });
        });
      });
    });
  });
}

function searchPlanet() {
  var test = "Corellia";
  for (var i = 0; i < planetsArray.length; i++) {
    //planetInput.val().ToLower
    if (planetsArray[i].name.toLowerCase() === test.toLowerCase()) {
      console.log(
        "planet searched is " +
          planetsArray[i].name.toLowerCase() +
          " and index is: " +
          i
      );
      localStorage.setItem("indexOfSearch", i);
    }
  }
  goToSinglePage();
}

function searchClimate() {
  var test = "ARid";
  for (var i = 0; i < planetsArray.length; i++) {
    //climateInput.val().ToLower
    if (
      planetsArray[i].climate.split(",")[0].toLowerCase() === test.toLowerCase()
    ) {
      searchedClimatesArray.push(planetsArray[i]);
    }
  }
  console.log(searchedClimatesArray);
  localStorage.setItem(
    "searchedClimates",
    JSON.stringify(searchedClimatesArray)
  );
  goToResultsPage();
}

function goToSinglePage() {
  window.location.href = "./singlePlanetPage.html";
}

function goToResultsPage() {
  window.location.href = "./searchResults.html";
}

function main() {
  getPlanetInfo();
  getWeather();
}

var testButton1 = $("#test1");
testButton1.on("click", searchPlanet);

var testButton2 = $("#test2");
testButton2.on("click", searchClimate);

searchByPlanetButton.on("click", searchPlanet);
searchByClimateButton.on("click", searchClimate);
