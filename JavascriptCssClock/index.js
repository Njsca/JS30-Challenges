const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90 // this is to convert seconds from base 60 to base 360
  // above we add 90 to compensate the offset of the hand that we assigned in css --   transform: rotate(90deg);
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90
  minHand.style.transform = `rotate(${minutesDegrees}deg)`

  const hours = now.getHours();
  const hoursDegrees = ((hours / 12) * 360) + 90
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`
}

setInterval(setDate, 1000);
