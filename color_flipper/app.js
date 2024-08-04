// Array containing a list of colors
const colors = ["green", "red", "blue"];

// Select the button element with the id 'btn'
const btn = document.getElementById('btn');

// Select the element with the class 'color'
const color = document.querySelector('.color');

// Add an event listener to the button for the 'click' event
btn.addEventListener('click', function(){
    const randomNumber = getRandomNumber(colors.length);
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber]
})

// Random number generator
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
