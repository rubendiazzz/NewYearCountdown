// Get the countdown elements
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

// Update the countdown every second
setInterval(updateCountdown, 1000);

function updateCountdown() {
  // Get the current time and new year time
  const currentTime = new Date();
  const newYearTime = new Date(currentTime.getFullYear() + 1, 0, 1);

  // Calculate the time remaining
  const timeRemaining = newYearTime - currentTime;

  // Calculate the days, hours, minutes, and seconds remaining
  const days = Math.floor(timeRemaining / 1000 / 60 / 60 / 24);
  const hours = Math.floor(timeRemaining / 1000 / 60 / 60) % 24;
  const mins = Math.floor(timeRemaining / 1000 / 60) % 60;
  const seconds = Math.floor(timeRemaining / 1000) % 60;

  // Update the countdown elements
  daysEl.innerText = days;
  hoursEl.innerText = hours < 10 ? '0' + hours : hours;
  minsEl.innerText = mins < 10 ? '0' + mins : mins;
  secondsEl.innerText = seconds < 10 ? '0' + seconds : seconds;
}
