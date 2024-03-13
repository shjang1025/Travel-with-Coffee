import {yelp_API_key} from "./api_key";
import { stateAbbreviations } from "./data";

async function getCafeInfo(cityName) {
    // yelp api sometimes accept abbreviation version of state name. 
    // change normal city name to abbreviation version 
    if(stateAbbreviations.hasOwnProperty(cityName.toUpperCase())){cityName = stateAbbreviations[cityName.toUpperCase()]};
    let url = 'https://corsproxy.io/?' + encodeURIComponent(`https://api.yelp.com/v3/businesses/search?location=${cityName}&categories=coffee&sort_by=review_count&limit=5`);
    let apiKey = yelp_API_key;

    try {
        const response = await fetch(url, {
            headers: {"Authorization": `Bearer ${apiKey}`
            }
        });
        if(response.status === 400) {
            displayCafeInfo('No Info');
            return;
        } else if (!response.ok) {
            throw new Error('Failed to fetch cafe information');
        }
        const allInfo = await response.json();
        displayCafeInfo(allInfo);

    } catch(error) {
        console.error(error);
    }

}

function displayCafeInfo(allInfo) {
    const c = document.querySelector('.cafeRecommendation');
    let cafeIntro = document.querySelector('.cafe-intro'); 
    const userInput = document.querySelector(".inputCity_mycity").value;
    const ol = document.querySelector('ol');

    const cafeInfo = document.querySelectorAll('.cafeInfo');
    const intro2 = document.querySelector(".intro2")
    const noCafe = document.querySelector(".noCafe");

    //remove previous result of no info on yelp
    if(noCafe) {noCafe.parentNode.removeChild(noCafe)};
    //if there's info on yelp, remove previous result
    if(intro2) {intro2.parentNode.removeChild(intro2)};
    if(cafeInfo) {cafeInfo.forEach(element => {element.parentNode.removeChild(element)})};

    if (allInfo === 'No Info') {
        cafeIntro.innerHTML = '<span class="noCafe">Yelp is not supported in this location. Cannot find cafe</span>';
    }else {
        if(allInfo.total === 0) {
            cafeIntro.innerHTML = '<span class="noCafe">There are no coffee shops near here</span>'

        } else {
            cafeIntro.innerHTML = `<p class="intro2">5 Coffee Shops in ${userInput}</p>`
    
            for(let i = 0; i < 5; i++) {
                const li = document.createElement('li');
                li.className = "cafeInfo";
                const name= `<b>Name: </b>${allInfo.businesses[i].name}`;
                const r = (JSON.parse(allInfo.businesses[i].rating).toFixed(1));
                const rating = `<b>Rating: </b>${fancyRate(r)}`;
                const location = `<b>Name: </b>${(allInfo.businesses[i].location.display_address.join(', '))}`;
                li.innerHTML = `${name} <br> ${rating} <br> ${location}`;
        
                ol.appendChild(li);
            }
        }
        
    }
    
    function fancyRate(rating) {
        if(rating === 5) {
            return ("★★★★★");
        } else if (rating >= 4.5 && rating <5) {
            return ("★★★★✬")
        }else if(rating >=4 && rating < 4.5) {
            return ("★★★★☆");
        } else if (rating >= 3.5 && rating < 4) {
            return ("★★★✬☆")
        }else if(rating >=3 && rating < 3.5) {
            return ("★★★☆☆");
        } else if (rating >= 2.5 && rating < 3) {
            return ("★★✬☆☆");
        } else if (rating >=2 && rating < 2.5) {
            return ("★★☆☆☆");
        } else if (rating >= 1.5 && rating < 2) {
            return ("★✬☆☆☆");
        } else if(rating >=1 && rating <1.5) {
            return ("★☆☆☆☆");
        } else {
            return ("🤮");
        }
    }
}

export {getCafeInfo}