import { showCurrentDate } from "./date";
import { displayWeather, getWeatherInfo, updateTemperatureDisplay} from "./weather";
import { getTempInfo } from "./temp"
import { API_key, yelp_API_key} from "./api_key";
import { getCafeInfo } from "./cafe";
import { geoToCity, showPosition} from "./geo_city";

document.addEventListener("DOMContentLoaded", () => {
   
    showCurrentDate();
    
    const userInputSearch = document.querySelector(".inputCity_button");
    const opttionSelect = document.querySelector("#inputCity_mycity");
    let main = document.querySelector('.main');
    let mainWeather = document.querySelector('.main_weather');

    userInputSearch.addEventListener("click", (event) => {
        event.preventDefault();
        const f = () => {
            const userInput = document.querySelector(".inputCity_mycity").value;
            if (userInput.trim() === "") {
                alert("Please enter a city name.");
                return;
            } else if(userInput === "📍Current Location") {
                event.preventDefault();
                navigator.geolocation.getCurrentPosition(geoCurrentLocation);
                navigator.geolocation.getCurrentPosition(showPosition);
            } else {
                event.preventDefault();
                getWeatherInfo(userInput);
                getCafeInfo(userInput);
            }
        }
        f();
    });


    const toggle = document.querySelector('.units');
    toggle.addEventListener("change", (event) => {
        event.preventDefault();
        const f = () => {
            let isMetric = toggle.classList.contains('metric');
            if(isMetric) {
                toggle.classList.remove('metric');
                toggle.classList.add('imperial')
            } else {
                // If currently in imperial, switch to metric
                toggle.classList.remove('imperial');
                toggle.classList.add('metric');
            }
            const userInput = document.querySelector(".inputCity_mycity").value;
            if (userInput) {
                getTempInfo(userInput);
            
            } else {
                const curr = document.querySelector('.location p').textContent;
                getTempInfo(curr.split(",")[0].split(" ")[1]);
            }
        }
        f();
    });


    //this function will be used as a call back function
    function geoCurrentLocation(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`;
        console.log(lat);
        console.log(lng);
        fetch(url)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            }) // promise object will be returned 
            .then(allInfo => displayWeather(allInfo, mainWeather, main))
            .catch(err => console.error(err));   
    }
    

});

