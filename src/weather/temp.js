import { updateTemperatureDisplay } from "./weather";
import { API_key } from "./weather";

function getTempInfo(cityName) {
    const toggle = document.querySelector('.units');
    let isMetric = toggle.classList.contains('metric');
    // weather info can be fetched from this API with CITY NAME (user input)
    if(cityName === "📍Current Location") {
        navigator.geolocation.getCurrentPosition(position => {
            const lat = position.coords.latitude;
            const lng = position.coords.longitude;
            const WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_key}`;

            fetch(WeatherAPI)
                .then(res => {
                    if (res.ok) {
                        return res.json();
                    } else {
                        throw res;
                    }
                })
                .then(allInfo => updateTemperatureDisplay(allInfo, isMetric))
                .catch(err => console.error(err));
        });
    } else {
        let WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=fdd45cf25d9946c90283a1437ded43dc`
        return fetch(WeatherAPI)
        .then(res => {
            if(res.ok) {
                return res.json();
            } else {
                throw res;
            }
        }) // promise object will be returned 
        .then(allInfo => updateTemperatureDisplay(allInfo, isMetric))
        .catch(err => console.error(err));
    }
    
}

export {getTempInfo}