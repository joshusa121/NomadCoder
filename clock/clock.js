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

//`${Dday}d ${Dhour}h ${Dminute}m ${Dsecond}s`




/*
function getTime() {
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds()
    clockTitle.innerText =
     `${hours   < 10 ? `0${hours}` : hours }:${
        minutes < 10 ? `0${minutes}` : minutes }:${
        seconds < 10 ? `0${seconds}` : seconds
     }`;
    }




function xmasDay() {
    const xmasDate = new Date("2020/12/24/00:00:00");
    const xmasHour = xmasDate.getHours();


}







function init() {
    getTime()
    setInterval(getTime, 1000);
}

init()

*/





// import "./styles.css";
// const clockContainer = document.querySelector(".js-clock"),
//     clockTitle = clockContainer.querySelector("h1");

// // You're gonna need this
// //const NINE_HOURS_MILLISECONDS = 32400000;

// function getTime() {
//   // Don't delete this.
//   const xmasDay = new Date("2020-12-24:00:00:00+0900");
//   const rightNow = new Date();  
//   const timeToGo = xmasDay - rightNow;
//   const hours = timeToGo.getHours();
//   const minutes = timeToGo.getMinutes();
//   const seconds = timeToGo.getSeconds()
//   clockTitle.innerText =
//   `${hours   < 10 ? `0${hours}` : hours }:${
//      minutes < 10 ? `0${minutes}` : minutes }:${
//      seconds < 10 ? `0${seconds}` : seconds
//   }`;
//   console.log(xmasDay);
// }


// // let now = new Date();
// // console.log(now);

// // date.getDate
// // date.getHour
// // date.getMinute
// // date.getSecond

// function init() {}
// init();


// const xmasDay = new Date("2020-12-24:00:00:00+0900");
// const rightNow = new Date();  
// const timeToGo = xmasDay - rightNow;
//힌트


//하루 86400000
//한 시간 3600000
//일 분 60000
//일 초 1000