// initial call
countdown();

setInterval(countdown, 1000);

const currentYear = new Date().getFullYear();
const newYears = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function countdown() {
  const now = new Date().getTime();
  const distance = newYears - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  console.log(`Countdown to New Year's Day ${currentYear + 1}: ${days}d ${hours}h ${minutes}m ${seconds}s`);
}

countdown();

