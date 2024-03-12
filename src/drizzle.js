

function drizzle() {
    const drizzleRain = document.querySelector(".weather-drizzle")
    const amount = 50;
    const raindrop = 0;

    while(raindrop < amount) {
        //create 50 div 
        let xPos = Math.random() * width;
        let size_h = Math.floor((Math.random() * 50));
        let size_w = Math.floor((Math.random() * 5));

        let width = Math.floor(window.innerWidth);
        let height = Math.floor(window.innerHeight);
        
        //relatively increase delay time if it rains heavily
        let duration = Math.random() * 3;
    
        const newDiv = document.createElement("div");
        newDiv.classList.add("drizzle");

        newDiv.style.top = '0'; 
        newDiv.style.width = size_w + 'px';
        newDiv.style.left = xPos + 'px';
        newDiv.style.height = size_h + 'px';

        newDiv.style.animationDuration = 1 + duration + 's';

        drizzleRain.appendChild(newDiv);
        raindrop++;
    }
}


export {drizzle};