import { getCafeInfo } from "./cafe";
import { countries } from "./data";

async function geoToCity(lat,lng) {
    // let url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`;
    let url = 'https://corsproxy.io/?' + encodeURIComponent(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch geo information');
        }
        const allInfo = await response.json();
        if(!countries.includes(allInfo.address.country)) {
            const c = document.querySelector('.cafeRecommendation');
            console.log(c);
            c.innerHTML = `<p>Yelp is not supported in this city.</p>`
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