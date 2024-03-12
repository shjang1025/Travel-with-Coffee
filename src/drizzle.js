

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
        // let delay = Math.random();
        let duration = Math.random() * 3;
    
        const newSpan = document.createElement("span");
        newSpan.classList.add("drizzle");

        newSpan.style.top = '0'; 
        newSpan.style.width = size_w + 'px';
        newSpan.style.left = xPos + 'px';
        newSpan.style.height = size_h + 'px';

        // newSpan.style.animationDelay = `${delay}s`;
        newSpan.style.animationDuration = 1 + duration + 's';

        drizzleRain.appendChild(newSpan);
        raindrop++;
    }
}


export {drizzle};