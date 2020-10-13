const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");
//HTML 태그를 가져 옴

function getTime() {

   const xmasDay = new Date("2020-12-24:00:00:00+0900");
   const rightNow = new Date();  
   const timeToGo = xmasDay - rightNow;
    const Dday = Math.floor(timeToGo/86400000);
    const Dhour = Math.floor((timeToGo - Dday*86400000)/3600000);
    const Dminute = Math.floor((timeToGo - Dday*86400000 - Dhour*3600000)/60000); 
    const Dsecond = Math.floor((timeToGo - Dday*86400000 - Dhour*3600000 - Dminute*60000)/1000);

    clockTitle.innerText = `${Dday   < 10 ? `0${Dday}` : Dday }d ${
        Dhour < 10 ? `0${Dhour}` : Dhour }h ${
        Dminute < 10 ? `0${Dminute}` : Dminute }m ${
        Dsecond < 10 ? `0${Dsecond}` : Dsecond }s`


    };

//   }`;

function init() {
    getTime()
    setInterval(getTime, 100);
}

init()
