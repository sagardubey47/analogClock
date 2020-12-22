

const minHand = document.querySelector(".min-hand");
const secHand = document.querySelector(".sec-hand");
const hoursHand = document.querySelector(".hours-hand");

function setTime() {
   const date = new Date();
   const second = date.getSeconds();
   const min = date.getMinutes();
   const hours = date.getHours();

   const secondDegrees = ((second/60)*360);
   const minDegrees = ((min/60)*360);
   const hoursDegrees = ((hours/12)*360);

   const hoursMinDegrees = ((min/60)*30);

   secHand.style.transform = `rotate(${90 + secondDegrees}deg)`;
   minHand.style.transform = `rotate(${90 + minDegrees}deg)`;
   hoursHand.style.transform = `rotate(${90 + hoursDegrees + hoursMinDegrees}deg)`; 
}

setInterval(setTime, 1000);