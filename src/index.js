
document.addEventListener("DOMContentLoaded", () => {
    const API_key = "fdd45cf25d9946c90283a1437ded43dc";
    // let WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}`
    const searchButton = document.querySelector("#searchButton");

    // with click event, it will execute the getCurrentLocation function
    searchButton.addEventListener("click", getCurrentLocation);
    
    function getCurrentLocation() {
        if(navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const lat = position.coords.latitude;
                const lng = position.coords.longitude;

                const p = document.createElement("p");
                p.textContent = `Latitude: ${lat} / Longitude: ${lng}`
                document.querySelector(".locationInfo").append(p);
            })        
        } else {
            alert("Geolocation is not supported by your browser.")
        }
    }
    
});

//DOM objects
const weatherInfo = document.querySelector('.weatherInfo');

function getGeoCoordinates() {

}

function getCurrentLocation() {

    navigator.geolocation.getCurrentPosition(getPosition(position)); 
}

