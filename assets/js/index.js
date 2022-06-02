var searchByPlanetButton = $("#search-by-planet-button"); // NEEDS TO BE LINKED WITH HTML ***********
var searchByClimateButton = $("#search-by-climate-button"); // NEEDS TO BE LINKED WITH HTML ***********
var planetInput = $("#planet-input"); // NEEDS TO BE LINKED WITH HTML ***********
var climateInput = $("#climate-input"); // NEEDS TO BE LINKED WITH HTML ***********

var swapi1 = "https://swapi.dev/api/planets/?page=1";
var swapi2 = "https://swapi.dev/api/planets/?page=2";
var swapi3 = "https://swapi.dev/api/planets/?page=3";

var planetsArray = [];
var searchedClimatesArray = [];

//remove index 27 from planet array as its unknown from swapi
// function cutOutUnknown() {
//   planetsArray.splice(27, 1);
// }

function getPlanetInfo() {
  fetch(swapi1).then(function (response) {
    response.json().then(function (data) {
      for (var i = 0; i < data.results.length; i++) {
        planetsArray.push(data.results[i]);
      }
      fetch(swapi2).then(function (response2) {
        response2.json().then(function (data2) {
          for (var i = 0; i < data2.results.length; i++) {
            planetsArray.push(data2.results[i]);
          }
          fetch(swapi3).then(function (response3) {
            response3.json().then(function (data3) {
              for (var i = 0; i < data3.results.length; i++) {
                planetsArray.push(data3.results[i]);
              }
              console.log(planetsArray);
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
  //*********************FOR TESTING*********************
  planetInput = $("#test1input");
  //*********************FOR TESTING*********************

  console.log(planetInput.val());
  for (var i = 0; i < planetsArray.length; i++) {
    if (
      planetsArray[i].name.toLowerCase() === planetInput.val().toLowerCase()
    ) {
      console.log(
        "planet searched is " +
          planetsArray[i].name.toLowerCase() +
          " and index is: " +
          i
      );
      localStorage.setItem("indexOfSearch", i);
    }
  }
  // goToSinglePage();
}

function searchClimate() {
  //*********************FOR TESTING*********************
  climateInput = $("#test2input");
  //*********************FOR TESTING*********************

  searchedClimatesArray = [];
  for (var i = 0; i < planetsArray.length; i++) {
    if (
      planetsArray[i].climate.split(",")[0].toLowerCase() ===
      climateInput.val().toLowerCase()
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

getPlanetInfo();

//*********************FOR TESTING*********************
var testButton1 = $("#test1");
testButton1.on("click", searchPlanet);
var testButton2 = $("#test2");
testButton2.on("click", searchClimate);
//*********************FOR TESTING*********************

searchByPlanetButton.on("click", searchPlanet);
searchByClimateButton.on("click", searchClimate);
