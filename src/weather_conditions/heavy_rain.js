
function heavyRain() {
    const rain = document.querySelector(".weather-rain")
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    rain.appendChild(wrapper);

    const amount = 100;
    let raindrop = 0;

    while(raindrop < amount) {
        let width = window.innerWidth;
        let height = window.innerHeight;

        let xPos = Math.floor(Math.random() * width);
        let yPos = Math.floor(Math.random() * height);

        let size_h = Math.floor((Math.random() * 100));
        let size_w = Math.floor((Math.random() * 5));
        //decrease delay time if it rains heavily

        let duration = Math.random() * 0.5;
        //create 100 div 
        const newDiv = document.createElement("div");
        newDiv.classList.add("raindrop");

        newDiv.style.width = `${size_w}px`;
        newDiv.style.left = `${xPos}px`;
        newDiv.style.height = `${size_h}px`;
        newDiv.style.top = `${yPos}px`; 
        newDiv.style.animationDuration = `${0.5+duration}s`;

        wrapper.appendChild(newDiv);
        raindrop++;
    }
}
export {heavyRain};