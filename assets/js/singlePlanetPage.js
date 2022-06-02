var currentTemp = document.getElementById("current-temp");
var currentConditions = document.getElementById("current-conditions");
var planetName = document.getElementById("planet-name");
var searchNumber = JSON.parse(localStorage.getItem("indexOfSearch"));
var imageEl = document.getElementById("planet-image");



function getWeather(lat, lon) {
    fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&appid=ae034b29b1e2add7687fc20c94112cb6")
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data.current.temp);
            console.log(data.current.weather[0].main)
            currentConditions.textContent = data.current.weather[0].main;
            currentTemp.textContent = data.current.temp;
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
            currentConditions = "unknown";
            break;
    }

    // displays planet name
    planetName.textContent = planetsArray[planet].name; 


    console.log(planetsArray);
    
    // switch statement pictures
    switch(planetName.textContent){
        case "Tatooine":
            imageEl.setAttribute("src", "tatooine.webp");
            break;
        case "Alderaan":
            imageEl.setAttribute("src", "assets/images/alderaan.jpeg");
            break;
        case "Yavin IV":
            imageEl.setAttribute("src", "assets/images/yavin4.jpeg");
            break;
        case "Hoth":
            imageEl.setAttribute("src", "assets/images/hoth.jpeg");
            break;
        case "Dagobah":
            imageEl.setAttribute("src", "assets/images/dagobah.webp");
            break;
        case "Bespin":
            imageEl.setAttribute("src", "assets/images/bespin.jpeg");
            break;
        case "Endor":
            imageEl.setAttribute("src", "assets/images/endor.webp");
            break;
        case "Naboo":
            imageEl.setAttribute("src", "assets/images/naboo.webp");
            break;
        case "Coruscant":
            imageEl.setAttribute("src", "assets/images/coruscant.webp");
            break;
        case "Kamino":
            imageEl.setAttribute("src", "assets/images/kamino.webp");
            break;
        case "Geonosis":
            imageEl.setAttribute("src", "assets/images/geonosis.jpeg");
            break;
        case "Utapau":
            imageEl.setAttribute("src", "assets/images/utapau.webp");
            break;
        case "Mustafar":
            imageEl.setAttribute("src", "assets/images/mustafar.jpeg");
            break;
        case "Kashyyyk":
            imageEl.setAttribute("src", "assets/images/kashyyyk.jpeg");
            break;
        case "Polis Massa":
            imageEl.setAttribute("src", "assets/images/corellia.jpg");
            break;
        case "Mygeeto":
            imageEl.setAttribute("src", "assets/images/mygeeto.webp");
            break;
        case "Felucia":
            imageEl.setAttribute("src", "assets/images/felucia.jpeg");
            break;
        case "Cato Neimoidia":
            imageEl.setAttribute("src", "assets/images/catoneimoidia.jpeg");
            break;
        case "Saleucami":
            imageEl.setAttribute("src", "assets/images/saleucami.webp");
            break;
        case "Stewjon":
            imageEl.setAttribute("src", "assets/images/stewjon.jpg");
            break;
        case "Eriadu":
            imageEl.setAttribute("src", "assets/images/eriadu.jpg");
            break;
        case "Corellia":
            imageEl.setAttribute("src", "assets/images/corellia.jpg");
            break;
        case "Rodia":
            imageEl.setAttribute("src", "assets/images/rodia.webp");
            break;
        case "Nal Hutta":
            imageEl.setAttribute("src", "assets/images/nalhutta.webp");
            break;
        case "Dantooine":
            imageEl.setAttribute("src", "assets/images/dantooine.jpg");
            break;
        case "Bestine IV":
            imageEl.setAttribute("src", "assets/images/bestine4.jpg");
            break;
        case "Ord Mantell":
            imageEl.setAttribute("src", "assets/images/ordmantell.jpeg");
            break;
        case "unknown":
            imageEl.setAttribute("src", "assets/images/unknown.jpg");
            break;
        case "Trandosha":
            imageEl.setAttribute("src", "assets/images/trandosha.jpg");
            break;
        case "Socorro":
            imageEl.setAttribute("src", "socorro.jpg");
            break;
            
    }


    // set <img> to appropriate image
    // imgEl.setAttribute("src", "tatooine.png")


}

displayPlanetData(searchNumber);
// This will run when you run an event

