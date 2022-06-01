var searchButton = $("#search-button"); // NEEDS TO BE LINKED WITH HTML ***********
var planetInput = $("#planet-input"); // NEEDS TO BE LINKED WITH HTML ***********

var swapi1 = "https://swapi.dev/api/planets/?page=1";
var swapi2 = "https://swapi.dev/api/planets/?page=2";
var swapi3 = "https://swapi.dev/api/planets/?page=3";

var planetsArray = [];

//remove index 27 from planet array as its unknown from swapi
// function cutOutUnknown() {
//   planetsArray.splice(27, 1);
// }

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
              searchPlanet();
            });
          });
        });
      });
    });
  });
}

function searchPlanet() {
  var test = "Rodia";
  console.log(planetsArray.indexOf(test));
}

getPlanetInfo();

searchButton.on("click", searchPlanet);
