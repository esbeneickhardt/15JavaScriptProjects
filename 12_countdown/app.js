// Items to interact with
const giveaway = document.querySelector(".giveaway");
const deadline = document.querySelector(".deadline");
const time = document.querySelectorAll(".deadline-format h4");

// Date of giveaway
let futureDate = new Date('2024-10-31T12:00:00');

// Collecting times to update
const year = futureDate.getFullYear();

// Options for formatting the date
const options = { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric', 
  hour: 'numeric',    
  minute: 'numeric',
  hour12: true
};

// Format the date to string format
const formattedDate = futureDate.toLocaleDateString('en-US', options);

// Customize the output string
const outputString = `giveaway ends on ${formattedDate}`;

giveaway.textContent = outputString