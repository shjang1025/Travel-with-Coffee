import { showCurrentDate } from "./date";
import { displayWeather, getWeatherInfo} from "./weather";
import { API_key, clear} from "./weather";


document.addEventListener("DOMContentLoaded", () => {
   
    showCurrentDate();

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

    const toggle = document.querySelector('.units');
    toggle.addEventListener("change", (event) => {
        event.preventDefault();

        //default is imperial and checked is standard
        const f = () => {
            toggle.classList.forEach((ele) => {
                if(ele !== "units") {
                    toggle.classList.remove(ele);
                }
            });
            if(event.target.checked) {
                toggle.classList.add("standard");
            } else {
                toggle.classList.add("imperial");
            }
        }
        f();

    })

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

