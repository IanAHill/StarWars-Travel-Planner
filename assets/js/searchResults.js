var myWeatherAPIKey = "34010a9f11bb2f02977743a236eef58a";

// function getWeather() {
//   var saharaDesertLAT = 25.28;
//   var saharaDesertLON = 14.43;
//   var saharaDesertURL =
//     "https://api.openweathermap.org/data/2.5/weather?lat=" +
//     saharaDesertLAT +
//     "&lon=" +
//     saharaDesertLON +
//     "&units=imperial" +
//     "&appid=" +
//     myWeatherAPIKey;

//   fetch(saharaDesertURL).then(function (response) {
//     response.json().then(function (data) {
//       var newP = $("<p>");
//       newP.text(
//         "Current temperature on Tatooine: " + data.main.temp + " fahrenheit"
//       );
//       weatherDisplay.append(newP);
//     });
//   });
// }
