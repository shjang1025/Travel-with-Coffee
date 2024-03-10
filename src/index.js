import { showCurrentDate } from "./date";
import { displayWeather, getWeatherInfo} from "./weather";
import { API_key} from "./weather";


document.addEventListener("DOMContentLoaded", () => {
   
    showCurrentDate();

    // with click event, it will execute the getCurrentLocation function
    // searchButton.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     navigator.geolocation.getCurrentPosition(geoCurrentLocation);
    // });
    
    // const searchButton = document.querySelector("#searchButton");

    const userInputSearch = document.querySelector(".inputCity_button");
    let main = document.querySelector('.main');
    let mainWeather = document.querySelector('.main_weather');

    userInputSearch.addEventListener("click", (event) => {
        event.preventDefault();
        const f = () => {
            const userInput = document.querySelector(".inputCity_mycity").value;
            if (userInput.trim() === "") {
                alert("Please enter a city name.");
                return;
            }
            getWeatherInfo(userInput);
        }
        f();
        
    });

    //this function will be used as a call back function
    function geoCurrentLocation(position) {
        let lat = position.coords.latitude;
        let lng = position.coords.longitude;
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`;
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
    navigator.geolocation.getCurrentPosition(geoCurrentLocation);

});

