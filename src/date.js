 //show current time on the page

 export function showCurrentDate() {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const monthNames = ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July','August', 'September', 'October', 'November', 'December'];
 
    const now = new Date();
    const yr = now.getFullYear();
    const month = now.getMonth();
    const date = now.getDate();
    const day = now.getDay(); // return integer

    const currentDate = document.querySelector('.currentDate');
    const dateInfo = document.createTextNode(`${dayNames[day]}, ${monthNames[month]} ${date} ${yr}`)
    currentDate.appendChild(dateInfo);
}
 

 

 

