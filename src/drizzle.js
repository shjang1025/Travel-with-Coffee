function drizzle() {
    const drizzleRain = document.querySelector(".weather-drizzle");
    const findWrapper = document.querySelector('.wrapper');
    const wrapper = document.createElement('div');
    wrapper.className = 'wrapper';
    drizzleRain.appendChild(wrapper);

    const amount = 50;
    let raindrop = 0;

    let width = window.innerWidth;
    let height = window.innerHeight;

    while(raindrop < amount) {
        //create 50 div 
        let xPos = Math.floor(Math.random() * width);
        let yPos = Math.floor(Math.random() * height);  

        let size_h = Math.floor((Math.random() * 50));
        let size_w = Math.floor((Math.random() * 5));
        
        //relatively increase delay time if it rains heavily
        let duration = Math.random() * 2;
    
        const newDiv = document.createElement("div");
        newDiv.classList.add("drizzle");

        newDiv.style.top =  yPos + 'px';
        newDiv.style.width = size_w + 'px';
        newDiv.style.left = xPos + 'px';
        newDiv.style.height = size_h + 'px';
        newDiv.style.animationDuration = `${0.5+duration}s`;

        wrapper.appendChild(newDiv);
        raindrop++;
    }
}


export {drizzle};