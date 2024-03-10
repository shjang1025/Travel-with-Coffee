
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
    const searchButton = document.querySelector("#searchButton");
    const userInputSearch = document.querySelector(".inputCity_button");
    
    
    // with click event, it will execute the getCurrentLocation function
    searchButton.addEventListener("click", (event) => {
        event.preventDefault();
        navigator.geolocation.getCurrentPosition(geoCurrentLocation);
    });
    // userInputSearch.addEventListener("click", (event) => {
    //     event.preventDefault();
    //     const userInput = document.querySelector(".inputCity_mycity").value;
    //     if (userInput.trim() === "") {
    //         alert("Please enter a city name.");
    //         return;
    //     }
    //     getWeatherInfo(userInput);
    // });

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
            .then(allInfo => displayWeather(allInfo))
            .catch(err => console.error(err));   
    }

    
    let weatherInfo = document.querySelector('.weatherInfo'); 
    let main = document.querySelector('.main');
    let mainWeather = document.querySelector('.main_weather');

    //fetching the data using weatherapi, with user Input
    function getWeatherInfo(cityName) {
        // main.classList.remove(...main.classList);
        // mainWeather.classList.remove(...mainWeather.classList);

        main.classList.forEach((ele) => {
            if (ele !== 'main') {
                main.classList.remove(ele);
            }
        });

        mainWeather.classList.forEach((ele) => {
            if (ele !== 'main_weather') {
                main.classList.remove(ele);
            }
        });
        //empty all div tag under div weatherInfo
        // weatherInfo.empty();
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
            .then(allInfo => displayWeather(allInfo))
            .catch(err => console.error(err));
    }

    function displayWeather(allInfo) {
        
        let mainDes = document.querySelector('#main_description');
        let temp = document.querySelector('#temp');
        let tempMinMax = document.querySelector('#temp_min_max');
        let feelsLikeTemp = document.querySelector('#feels_like_temp');
        let location = document.querySelector('.location');

        //change class depending on weather condition
        let iconRes = allInfo.weather[0].icon;
        changeClass(iconRes, mainWeather, main);

        //parsing main object and fetch temp (integer) - kelvin to celsius/farenheit.
        temp.innerHTML = `<p>Temperature: ${kToc(JSON.parse(allInfo.main.temp))}°C (${kTof(JSON.parse(allInfo.main.temp))}°F) </p>`;
        tempMinMax.innerHTML = `<p>Min/Max: ${kToc(JSON.parse(allInfo.main.temp_min))}°C (${kTof(JSON.parse(allInfo.main.temp_min))}°F) / 
                                ${kToc(JSON.parse(allInfo.main.temp_max))}°C (${kTof(JSON.parse(allInfo.main.temp_max))}°F)</p>`;
        feelsLikeTemp.innerHTML = `<p>Feels like temp: ${kToc(JSON.parse(allInfo.main.feels_like))}°C (${kTof(JSON.parse(allInfo.main.feels_like))}°F)</p>`;
        location.innerHTML = `<p>Location: ${allInfo.name}, ${allInfo.sys.country}</p>`;

        // icon depends on weather condition
        
        const existingImage = mainWeather.querySelector('img');
        if (existingImage) {
            // If there is an existing image, remove it
            existingImage.remove();
        }
        const weatherIcon = document.createElement('img');
        const url = `https://openweathermap.org/img/wn/${iconRes}@2x.png`;
        weatherIcon.src = url;
        mainWeather.appendChild(weatherIcon);
        mainDes.innerHTML = `<p>${allInfo.weather[0].description}</p>`;

        // put the weather icon depending on the weather description.

        function kTof (kelvin) {
            return (Math.round(kelvin-273.15) * (9/5) + 32).toFixed(0);
        }
        function kToc (kelvin) {
            return (Math.round(kelvin -273.15)).toFixed(0);
        }
        
    }
    
    function changeClass(iconRes, mainWeather, main) {
        // main.classList.remove(...main.classList);
        // mainWeather.classList.remove(...mainWeather.classList);

        if (iconRes.startsWith("01")) {
            main.classList.add("weather-clear")
            mainWeather.classList.add("clear_sky")
        } else if (iconRes.startsWith("02")) {
            main.classList.add("weather-cloudy")
            mainWeather.classList.add("clouds")
        } else if (iconRes.startsWith("09")) {
            main.classList.add("weather-drizzle")
            mainWeather.classList.add("drizzle")
        } else if (iconRes.startsWith("10")) {
            main.classList.add("weather-rain")
            mainWeather.classList.add("heavy_rain")
        } else if (iconRes.startsWith("13")) {
            main.classList.add("weather-snow")
            mainWeather.classList.add("snow")
        } else {
            main.classList.add("others")
            mainWeather.classList.add("others")
        }
    }


});

