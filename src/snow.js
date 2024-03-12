function snow() {
  const rain = document.querySelector(".weather-snow")

  const amount = 50;
  let snowflake = 0;

  while(snowflake < amount) {
      let width = window.innerWidth;
      let height = window.innerHeight;

      let xPos = Math.floor(Math.random() * width);

      // let size_h = Math.floor((Math.random() * 50));
      // let size_w = Math.floor((Math.random() * 5));

      // let delay = Math.random() * 1.5;
      let duration = Math.random() * 3;

      //create 100 div 
      const newDiv = document.createElement("div");
      newDiv.classList.add("snowflake");
      newDiv.innerText = "❄️⛄️"

      // newDiv.style.width = `${size_w}px`;
      newDiv.style.left = `${xPos}px`;
      // newDiv.style.height = `${size_h}px`;
      newDiv.style.top = '0';
      newDiv.style.bottom = '100';   
      // newDiv.style.animationDelay = `${delay}s`;
      newDiv.style.animationDuration = `${1+duration}s`;

      rain.appendChild(newDiv);
      snowflake++;
  }
}

export {snow}