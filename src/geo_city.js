import { getCafeInfo } from "./cafe";
import { countries } from "./data";

async function geoToCity(lat,lng) {
    let url = 'https://corsproxy.io/?' + encodeURIComponent(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    const c = document.querySelector('.cafeRecommendation');
    const noYelp = document.querySelector('.noYelp');
    if(noYelp) {noYelp.parentNode.removeChild(noYelp)};

    try {
        const response = await fetch(url, {'Accept-Language': 'en-US,en;q=0.5s'});
        if (!response.ok) {
            throw new Error('Failed to fetch geo information');
        }
        const allInfo = await response.json();
        if(!countries.includes(allInfo.address.country)) {
            c.innerHTML = `<p class="noYelp">Yelp is not supported in this city.</p>`
        } else {
            getCafeInfo(allInfo.address.town);
        }
    } catch(error) {
        console.error(error);
    }
}

function showPosition(position) {
    const lat = position.coords.latitude; 
    const lng = position.coords.longitude;
    geoToCity(lat, lng);
}


export {geoToCity, showPosition}