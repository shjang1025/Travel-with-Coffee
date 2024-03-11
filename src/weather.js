const API_key = "fdd45cf25d9946c90283a1437ded43dc";


//fetching the data using weatherapi, with user Input
function getWeatherInfo(cityName) {
    let main = document.querySelector('.main');
    let mainWeather = document.querySelector('.main_weather');
    let body = document.querySelector('body');
    // main.className = 'main';
    
    // mainWeather.className = 'main_weather';
    main.classList.forEach((ele) => {
        if (ele !== 'main') {
            main.classList.remove(ele);
        }
    });

    mainWeather.classList.forEach((ele) => {
        if (ele !== 'main_weather') {
            mainWeather.classList.remove(ele);
        }
    });
    
    body.classList.forEach((ele) => {
        if(ele === "weather-clear" || ele === "weather-few-clouds" || 
        ele === "weather-scattered-clouds" || ele === "weather-drizzle" || ele === "weather-rain" || 
        ele === "weather-snow" || ele === "weather-broken-clouds" || ele === "others") {
            body.classList.remove(ele);
        }
    });
        
    
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
        .then(allInfo => displayWeather(allInfo, mainWeather, main))
        .catch(err => console.error(err));
}

function displayWeather(allInfo, mainWeather, main) {
    let intro = document.querySelector('.intro'); 
    intro.innerHTML = `<p>Weather in ${allInfo.name}</p>`

    let mainDes = document.querySelector('#main_description');
    let temp = document.querySelector('#temp');
    let tempMinMax = document.querySelector('#temp_min_max');
    let feelsLikeTemp = document.querySelector('#feels_like_temp');
    let location = document.querySelector('.location');
    let wind = document.querySelector('#wind');
    let imperial = document.querySelector('.imperial');
    let metric = document.querySelector('.metric');

    

    //change class depending on weather condition
    let iconRes = allInfo.weather[0].icon;
    changeClass(iconRes, mainWeather, main);

    //parsing main object and fetch temp (integer) - kelvin to celsius/farenheit.
    temp.innerHTML = `<p>Temperature: ${kToc(JSON.parse(allInfo.main.temp))}°C (${kTof(JSON.parse(allInfo.main.temp))}°F) </p>`;
    tempMinMax.innerHTML = `<p>Min/Max: ${kToc(JSON.parse(allInfo.main.temp_min))}°C (${kTof(JSON.parse(allInfo.main.temp_min))}°F) / 
                            ${kToc(JSON.parse(allInfo.main.temp_max))}°C (${kTof(JSON.parse(allInfo.main.temp_max))}°F)</p>`;
    feelsLikeTemp.innerHTML = `<p>Feels like temp: ${kToc(JSON.parse(allInfo.main.feels_like))}°C (${kTof(JSON.parse(allInfo.main.feels_like))}°F)</p>`;
    location.innerHTML = `<p>Location: ${allInfo.name}, ${allInfo.sys.country}</p>`;
    wind.innerHTML = `<p>Wind: ${JSON.parse(allInfo.wind.speed)}m/s / ${msTomph(JSON.parse(allInfo.wind.speed))} mph</p>`

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

    //weather main description
    mainDes.innerHTML = `<p>${capitalize(allInfo.weather[0].description)}</p>`;

    //units change functions
    function kTof (kelvin) {
        return (Math.round(kelvin-273.15) * (9/5) + 32).toFixed(0);
    }
    function kToc (kelvin) {
        return (Math.round(kelvin -273.15)).toFixed(0);
    }
    function msTomph(ms) {
        return (Math.round(ms * 2.237)).toFixed(2);
    }
}

function changeClass(iconRes, mainWeather, main) {
    if (iconRes.startsWith("01")) {
        main.classList.add("weather-clear")
        mainWeather.classList.add("clear_sky")
        document.body.classList.add("weather-clear");
    } else if (iconRes.startsWith("02")) {
        main.classList.add("weather-few-clouds")
        mainWeather.classList.add("few-clouds")
        document.body.classList.add("weather-few-clouds");

    } else if (iconRes.startsWith("03")) {
        main.classList.add("weather-scattered-clouds")
        mainWeather.classList.add("scattered-clouds")
        document.body.classList.add("weather-scattered-clouds");

    } else if (iconRes.startsWith("04")) {
        main.classList.add("weather-broken-clouds")
        mainWeather.classList.add("broken-clouds")
        document.body.classList.add("weather-broken-clouds");

    } else if (iconRes.startsWith("09")) {
        main.classList.add("weather-drizzle")
        mainWeather.classList.add("drizzle")
        document.body.classList.add("weather-drizzle");

    } else if (iconRes.startsWith("10")) {
        main.classList.add("weather-rain")
        mainWeather.classList.add("heavy_rain")
        document.body.classList.add("weather-rain");

    } else if (iconRes.startsWith("13")) {
        main.classList.add("weather-snow")
        mainWeather.classList.add("snow")
        document.body.classList.add("weather-snow");

    } else if (iconRes.startsWith("50")) {
        main.classList.add("weather-mist")
        mainWeather.classList.add("mist")
        document.body.classList.add("weather-mist");

    } else {
        main.classList.add("others")
        mainWeather.classList.add("others")
        document.body.classList.add("others");

    }
}

function capitalize(str) {
    const words = str.split(' ');
    const res = [];
    words.forEach((ele) => {
        res.push(ele[0].toUpperCase() + ele.slice(1).toLowerCase());
    });
    return res.join(' ');
}
export { displayWeather, getWeatherInfo, API_key };