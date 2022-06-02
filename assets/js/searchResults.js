var searchByPlanetButton = $("#search-by-planet-button"); // NEEDS TO BE LINKED WITH HTML ***********
var searchByClimateButton = $("#search-by-climate-button"); // NEEDS TO BE LINKED WITH HTML ***********
var planetInput = $("#planet-input"); // NEEDS TO BE LINKED WITH HTML ***********
var climateInput = $("#climate-input"); // NEEDS TO BE LINKED WITH HTML ***********

var planetAppend = $("#planet-append");

var planetsArray = JSON.parse(localStorage.getItem("planetsArray"));
var climateArray = JSON.parse(localStorage.getItem("searchedClimates"));

function goToSinglePage() {
  window.location.href = "./singlePlanetPage.html";
}

function searchClimate() {
  //*********************FOR TESTING*********************
  climateInput = $("#test2input");
  //*********************FOR TESTING*********************

  var searchedClimatesArray = [];
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
  appendPlanets();
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

console.log(climateArray);

function appendPlanets() {
  climateArray = JSON.parse(localStorage.getItem("searchedClimates"));
  planetAppend.empty();
  var newList = $("<ul>");
  for (var i = 0; i < climateArray.length; i++) {
    var item = $("<li>");

    item.text(climateArray[i].name);
    newList.append(item);
  }
  planetAppend.append(newList);
}

//*********************FOR TESTING*********************
var testButton1 = $("#test1");
testButton1.on("click", searchPlanet);
var testButton2 = $("#test2");
testButton2.on("click", searchClimate);
//*********************FOR TESTING*********************

appendPlanets();
