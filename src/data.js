const countries = [
    "Czech Republic",
    "Denmark",
    "Austria",
    "Switzerland",
    "Germany",
    "Australia",
    "Belgium",
    "Canada",
    "United Kingdom",
    "Hong Kong",
    "Republic of Ireland",
    "Malaysia",
    "New Zealand",
    "Philippines",
    "Singapore",
    "United States",
    "Argentina",
    "Chile",
    "Spain",
    "Mexico",
    "Finland",
    "France",
    "Italy",
    "Japan",
    "Norway",
    "The Netherlands",
    "Poland",
    "Brazil",
    "Portugal",
    "Sweden",
    "Turkey",
    "Taiwan"
];

export {countries};
// const cities = ["Prague", "Brno", "Ostrava", "Plzen", "Liberec", "Olomouc", "Ceske", "Hradec", "Pardubice", 
// "Usti", "Zlin", "Havírov", "Kladno", "Most", "Opava", "Frydek-Mistek", "Jihlava", "Teplice", "Karvina", "Karlovy", "Decin", "Chom",
// "Copenhagen", "Aarhus", "Odense", "Aalborg", "Esbjerg", "Vejle", "Horsens", "Randers", "Kolding", "Roskilde", "Herning", "Frederiksberg", 
// "Helsingør", "Silkeborg", "Viborg", "Fredericia", "Holstebro", "Hillerød", "Skagen", "Vienna", "Innsbruck", "Salzburg", "Linz", "Graz", 
// "Klagenfurt", "Bregenz", "Steyr", "Villach", "Wels", "Eisenstadt", "Sankt Polten", "Dornbirn", "Feldkirch", "Krems", "Wiener Neustadt", 
// "Tyrol", "Leoben", "Styria", "Vorarlberg", "Carinthia", "Gmunden", "Upper Austria", "Wachau","Geneva", "Basel", "Bern", "Zürich", "Lausanne", "Lucerne", "Saint Gallen", 
// "Winterthur", "Lugano", "Interlaken", "Zermatt", "Chur", "Montreux", "Thun", "Munich", "Hamburg", "Frankfurt", 
// "Berlin", "Cologne", "Dortmund", "Düsseldorf", "Stuttgart", "Essen", "Leipzig", "Nuremberg", "Bremen", "Dresden", "City", 
// "Hannover", "Melbourne", "Hobart", "Darwin", "Canberra", "Gold Coast", "Cairns", "Newcastle", "Townsville", "Wollongong", "Geelong", "Sunshine Coast", 
// "Ballarat", "Central Coast", "Significant Urban Area", "Broome", "Logan City", "Antwerp", "Brussels", "Ghent", "Bruges", "Liège", "Leuven", "Namur", 
// "Anderlecht", "Ixelles", "Uccle", "Berchem", "Edmonton", "Ottawa", "Toronto", "Vancouver", "Montreal", "Winnipeg", "Mississauga", "Québec City", 
// "Hamilton", "Victoria", "Brampton", "Halifax", "Saskatoon", "Moncton", "Birmingham", "Liverpool", "Bristol", "Leeds", "Glasgow", "Manchester", 
// "Cardiff", "Edinburgh", "Sheffield", "Leicester", "Nottingham", "Bradford", "Coventry", "Belfast", "Newcastle", "Southampton", "Brighton", "Hull", 
// "Stoke", "Aberdeen", "Derby", "Swansea", "Middlesbrough", "Hong Kong", "Kowloon", "Sha Tin", "Kowloon City", "Sham Shui Po", "Tin Shui Wai", 
// "Central District", "Tsing Yi Town", "Lam Tin", "Kennedy Town", "Kwai Chung", "Cheung Chau", "Pak Tin Pa", "Dublin", "Galway", "Limerick", "Cork", 
// "Waterford", "Drogheda", "Belfast", "Derry", "Dundalk", "Swords", "Dún Laoghaire", "Kilkenny", "Lisburn", "Ipoh", "Johor Bahru", "George Town", 
// "Kota Kinabalu", "Kuantan", "Kuching", "Seremban", "Alor Setar", "Kuala Terengganu", "Malacca city", "Miri", "Petaling Jaya", "Putrajaya", "Seberang Perai", 
// "Shah Alam", "Subang Jaya", "Iskandar Puteri", "Penang Island City Council", "Kajang", "Klang", "Pasir Gudang", "Sungai Petani", "Christchurch", "Dunedin", 
// "Wellington", "Hamilton", "Rotorua", "Tauranga", "Palmerston North", "Nelson", "Napier", "Gisborne", "New Plymouth", "Whangārei", "Invercargill", "Whanganui", 
// "Hastings", "Queenstown", "Blenheim", "Timaru", "Tokoroa"]



// function cities() {
//     return fetch('https://countriesnow.space/api/v0.1/countries').then(res => {
//         if(res.ok) {
//             return res.json();
//         } else {
//             throw res;
//         }
//         }).then(allInfo => {
//             let cities = [];
//             allInfo.data.array.forEach(obj => {
//                 if(countries.includes(obj.country)) {
//                     cities.concat(JSON.parse(obj.cities));
//                 }
//             });
//             return cities;
//         });
// } 
// console.log(cities());
    

//   fetch('https://countriesnow.space/api/v0.1/countries')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error('Failed to fetch city data');
//     }
//     return response.json();
//   })
//   .then(data => {
//     // Assuming the JSON structure is an array of objects with city and country properties
//     const citiesByCountry = {};

//     // Iterate over each entry in the JSON data
//     data.forEach(entry => {
//       const city = entry.city;
//       const country = entry.country;

//       // Check if the country is in the list of supported countries
//       if (supportedCountries.includes(country)) {
//         // Add the city to the list of cities for the country
//         if (!citiesByCountry[country]) {
//           citiesByCountry[country] = [];
//         }
//         citiesByCountry[country].push(city);
//       }
//     });

//     // Now you have an object where keys are country names and values are arrays of cities in those countries
//     console.log(citiesByCountry);

//     // You can use this object to map cities to their respective countries
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });