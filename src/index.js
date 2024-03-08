
document.addEventListener("DOMContentLoaded", () => {
    //show current time on the page
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];

    const now = new Date();
    const yr = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay(); // return integer

    const currentDate = document.querySelector('.currentDate');
    const dateInfo = document.createTextNode(`${dayNames[day]}, ${monthNames[month]} ${date} ${yr}`)
    currentDate.appendChild(dateInfo);

    let API_key = "fdd45cf25d9946c90283a1437ded43dc";
    // const searchButton = document.querySelector("#searchButton");
    const userInputSearch = document.querySelector(".inputCity_button");
    
    // with click event, it will execute the getCurrentLocation function

    // searchButton.addEventListener("click", getCurrentLocation);
    userInputSearch.addEventListener("click", (event) => {
        event.preventDefault();
        const userInput = document.querySelector(".inputCity_mycity").value;
        getWeatherInfo(userInput);
    });

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
    

    //fetching the data using weatherapi, with user Input
    function getWeatherInfo(cityName) { 
        const weatherInfo = document.querySelector('.weatherInfo');
        // weather info can be fetched from this API with CITY NAME (user input)
        let WeatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}`
        return fetch(WeatherAPI)
            .then(res => {
                if(res.ok) {
                    return res.json();
                } else {
                    throw res;
                }
            }) // promise object will be returned 
            .then(allInfo => {
                const mainWeather = document.querySelector('#main_weather');
                // mainWeather.setAttribute("id", "mainWeather")
                const mainDes = document.querySelector('#main_description');
                const temp = document.querySelector('#temp');
                const tempMinMax = document.querySelector('#temp_min_max');
                const feelsLikeTemp = document.querySelector('#feels_like_temp');
                const city = document.querySelector('#city');
                const country = document.querySelector('#country');

                mainWeather.innerHTML = `<p>${allInfo.weather[0].main}</p>`;
                mainDes.innerHTML = `<p>${allInfo.weather[0].description}</p>`;

                //parsing main object and fetch temp (integer)
                temp.innerHTML = `<p>Temperature: ${kToc(JSON.parse(allInfo.main.temp))}°C (${kTof(JSON.parse(allInfo.main.temp))}°F) </p>`;
                tempMinMax.innerHTML = `<p>Min/Max: ${kToc(JSON.parse(allInfo.main.temp_min))}°C (${kTof(JSON.parse(allInfo.main.temp_min))}°F) / 
                                        ${kToc(JSON.parse(allInfo.main.temp_max))}°C (${kTof(JSON.parse(allInfo.main.temp_max))}°F)</p>`;
                feelsLikeTemp.innerHTML = `<p>${kToc(JSON.parse(allInfo.main.feels_like))}°C (${kTof(JSON.parse(allInfo.main.feels_like))}°F)</p>`;
                city.innerHTML = `<p>${allInfo.name}</p>`;
                country.innerHTML = `<p>${allInfo.sys.country}</p>`;

            })
            .catch(err => console.error(err));


            function kTof (kelvin) {
                return (Math.round(kelvin-273.15) * (9/5) + 32).toFixed(2);
            }
            function kToc (kelvin) {
                return (Math.round(kelvin -273.15)).toFixed(0);
            }

    }

    
});



