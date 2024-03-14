function snow() {
  const snow = document.querySelector(".weather-snow")
  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  snow.appendChild(wrapper);

  const amount = 70;
  let snowflake = 0;

  while(snowflake < amount) {
      let width = window.innerWidth;
      let height = window.innerHeight;

      let xPos = Math.floor(Math.random() * width);
      let yPos = Math.floor(Math.random() * height);
      let duration = Math.random() * 0.5;
      
      //create 100 div 
      const newDiv = document.createElement("div");
      newDiv.classList.add("snowflake");
      newDiv.innerText = "❄️"

      newDiv.style.left = `${xPos}px`;
      newDiv.style.top = `${yPos}px`;
      newDiv.style.bottom = '100';   
      newDiv.style.animationDuration = `${0.5+duration}s`;

      wrapper.appendChild(newDiv);
      snowflake++;
  }
}

export {snow}