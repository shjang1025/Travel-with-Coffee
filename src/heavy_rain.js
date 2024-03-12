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

        let duration = Math.random() * 1.5;
        //create 100 div 
        const newDiv = document.createElement("div");
        newDiv.classList.add("raindrop");

        newDiv.style.width = `${size_w}px`;
        newDiv.style.left = `${xPos}px`;
        newDiv.style.height = `${size_h}px`;
        newDiv.style.top = '0'; 
        newDiv.style.animationDuration = `${1+duration}s`;

        rain.appendChild(newDiv);
        raindrop++;
    }
}
export {heavyRain};