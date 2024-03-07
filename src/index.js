
document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.querySelector("#searchButton");
    const userInputSearch = document.querySelector(".inputCity_button");

    // with click event, it will execute the getCurrentLocation function
    searchButton.addEventListener("click", getCurrentLocation);
    userInputSearch.addEventListener("click", searchCity);

    function getCurrentLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const p = document.createElement("p");
                p.textContent = `Latitude: ${lat} / Longitude: ${lng}`
                document.querySelector(".locationInfo").append(p);
                return [lat, lng];
            })        
        } else {
            alert("Geolocation is not supported by your browser.")
        }
    }
    
    //fetching the data using weatherapi
    function searchCity() { 
        const coord = getCurrentLocation();
        const lat = coord[0];
        const lng = coord[1];

        let WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
        return fetch(WeatherAPI)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            })
            .then(coordInfo => {
                
            })
            .catch(err => console.error(err));
    }

});

//DOM objects
const weatherInfo = document.querySelector('.weatherInfo');

function getGeoCoordinates() {

}

function getCurrentLocation() {

    navigator.geolocation.getCurrentPosition(getPosition(position)); 
}

