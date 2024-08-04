// Array containing possible hex values
const hex = [
    0, 1, 2, 3, 4, 
    5, 6 ,7, 8, 9, 
    "A", "B", "C", 
    "D", "E", "F"
];

// Select the button element with the id 'btn'
const btn = document.getElementById('btn');

// Select the element with the class 'color'
const color = document.querySelector('.color');

// Add an event listener to the button for the 'click' event
btn.addEventListener('click', function(){
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
    color.textContent = randomColor
})

// Random color hex generator
function getRandomColor() {
    let hexColor = '#'
    for(let i = 0; i<6; i++){
        const randomNumber = getRandomNumber(16)
        hexColor += hex[randomNumber]
    }
    return hexColor
}

// Random number generator
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
