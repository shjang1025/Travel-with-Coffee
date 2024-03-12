function heavyRain() {
    const rain = document.querySelector(".weather-rain")

    const amount = 100;
    let raindrop = 0;

    while(raindrop < amount) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let xPos = Math.floor(Math.random() * width);

        let size_h = Math.floor((Math.random() * 50));
        let size_w = Math.floor((Math.random() * 5));
        //decrease delay time if it rains heavily
        // let delay = Math.random();
        let duration = Math.random() * 1.5;
        //create 100 div 
        const newSpan = document.createElement("span");
        newSpan.classList.add("raindrop");

        newSpan.style.width = `${size_w}px`;
        newSpan.style.left = `${xPos}px`;
        newSpan.style.height = `${size_h}px`;
        newSpan.style.top = '0'; 
        // newSpan.style.animationDelay = `${delay}s`;
        newSpan.style.animationDuration = `${1+duration}s`;

        rain.appendChild(newSpan);
        raindrop++;
    }
}
export {heavyRain};