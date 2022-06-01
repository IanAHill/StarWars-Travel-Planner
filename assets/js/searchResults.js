var planetAppend = $("#planet-append");
var climateArray = JSON.parse(localStorage.getItem("searchedClimates"));
console.log(climateArray);

function appendPlanets() {
  var newList = $("<ul>");
  for (var i = 0; i < climateArray.length; i++) {
    var item = $("<li>");

    item.text(climateArray[i].name);
    newList.append(item);
  }
  planetAppend.append(newList);
}

appendPlanets();
