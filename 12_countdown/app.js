// DOM Elements
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const timesItems = document.querySelectorAll(".deadline-format h4");

// Configuration
let futureDate = new Date('2024-10-31T12:00:00');
const futureDateMS = futureDate.getTime();
const options = { 
  weekday: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  hour12: true
};

// Initialize the giveaway message
function initializeGiveaway() {
  const formattedDate = futureDate.toLocaleDateString('en-US', options);
  const outputString = `giveaway ends on ${formattedDate}`;
  giveaway.textContent = outputString;
}

// Calculate the remaining time
function getRemainingTime(endTime) {
  const nowMS = Date.now();
  const timeDifference = endTime - nowMS;

  const oneDay = 24 * 60 * 60 * 1000;
  const oneHour = 60 * 60 * 1000;
  const oneMinute = 60 * 1000;
  const oneSecond = 1000;

  const days = Math.floor(timeDifference / oneDay);
  const hours = Math.floor((timeDifference % oneDay) / oneHour);
  const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
  const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

  return { days, hours, minutes, seconds, timeDifference };
}

// Update the countdown display
function updateCountdownDisplay({ days, hours, minutes, seconds }) {
  const timeValues = [days, hours, minutes, seconds];
  timesItems.forEach((item, index) => {
    item.innerHTML = timeValues[index];
  });
}

// Stop the countdown and display expiration message
function handleExpiration() {
  timesItems.forEach(item => item.innerHTML = 0);
  clearInterval(countdown);
  giveaway.innerHTML = `<h4 class="expired">sorry, this giveaway has expired!</h4>`;
}

// Countdown tick function
function setCountdown() {
  const remainingTime = getRemainingTime(futureDateMS);

  if (remainingTime.timeDifference <= 0) {
    handleExpiration();
  } else {
    updateCountdownDisplay(remainingTime);
  }
}

// Initialize countdown
initializeGiveaway();
const countdown = setInterval(setCountdown, 1000);