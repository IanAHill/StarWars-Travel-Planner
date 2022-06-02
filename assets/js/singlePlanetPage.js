var currentTemp;
var weatherConditions;
var planetEl = document.getElementById("planet-element");
var searchNumber = JSON.parse(localStorage.getItem("indexOfSearch"));



function getWeather(lat, lon) {
    weatherConditions = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=ae034b29b1e2add7687fc20c94112cb6")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.current.temp);
            console.log(data.current.weather[0].main)
        })
}




function displayPlanetData(planet){
    var planetsArray = JSON.parse(localStorage.getItem("planetsArray"));
    switch(planetsArray[planet].climate){
        case "arid":
            getWeather(25.28, 14.43);
            break;
    
        case "temperate":
            getWeather(42.36, -71.05);
            break;
    
        case "frozen":
            getWeather(-90.00, 00);
            break;
    
        case "murky":
            getWeather(25.00, -80);
            break;
    
        case "hot":
            getWeather(36.00, -116.00);
            break;
       
        case "tropical":
            getWeather(25, -77);
            break;
    
        case "artificial":
            getWeather(40, -74);
            break;
    
        case "polluted":
            getWeather(28.70, 77.10);
            break;
        
        case "unknown":
            weatherConditions = "unknown";
            break;
    }

    
    planetEl.textContent = planetsArray[planet].name;
    console.log(planetsArray);
    
    // switch statement pictures
    


    // set <img> to appropriate image
    // imgEl.setAttribute("src", "tatooine.png")

    // display planet name
    // nameEl.textContent = planet.name
}

displayPlanetData(searchNumber);
// This will run when you run an event

