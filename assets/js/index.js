var searchByPlanetButton = $("#search-by-planet-button");
var searchByClimateButton = $("#search-by-climate-button");
var planetList = $("#planetsList");
var climateList = $("#climatesList");

var swapi1 = "https://swapi.dev/api/planets/?page=1";
var swapi2 = "https://swapi.dev/api/planets/?page=2";
var swapi3 = "https://swapi.dev/api/planets/?page=3";

var planetsArray = [];
var searchedClimatesArray = [];
var possibleClimates = [
  "arid",
  "temperate",
  "frozen",
  "frigid",
  "murky",
  "hot",
  "tropical",
  "artificial temperate",
  "polluted",
  "unknown",
];

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

              for (var i = 0; i < planetsArray.length; i++) {
                var newDropDown = $(
                  "<option>" + planetsArray[i].name + "</option>"
                );
                newDropDown.attr("value", planetsArray[i].name);

                planetList.append(newDropDown);
              }

              for (var i = 0; i < possibleClimates.length; i++) {
                var newDropDown = $(
                  "<option>" + possibleClimates[i] + "</option>"
                );
                climateList.append(newDropDown);
              }
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
  console.log(planetList.val());
  for (var i = 0; i < planetsArray.length; i++) {
    if (planetsArray[i].name.toLowerCase() === planetList.val().toLowerCase()) {
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
  searchedClimatesArray = [];
  for (var i = 0; i < planetsArray.length; i++) {
    if (
      planetsArray[i].climate.split(",")[0].toLowerCase().trim() ===
      climateList.val().toLowerCase().trim()
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

function testClick() {
  console.log("clciked");
}

$("add-dropdowns").on("click", testClick);

searchByPlanetButton.on("click", searchPlanet);
searchByClimateButton.on("click", searchClimate);
