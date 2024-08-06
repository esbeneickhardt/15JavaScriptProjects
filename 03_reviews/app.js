// local reviews data
const reviews = [
    {
        id: 1, 
        name: "John Doe",
        job: "AI Model",
        img: "./images/image1.jpg",
        text: `I recently purchased a product from Ebbemonster and am 
               thoroughly impressed with its quality and performance. 
               It exceeded my expectations, offering great value for 
               the price. Highly recommend for anyone looking for 
               reliable and affordable options.`
    },
    {
        id: 2, 
        name: "James Dodo",
        job: "Life Coach",
        img: "./images/image2.png",
        text: "Great and outstanding product!"
    },
    {
        id: 2,
        name: "Mark Magilous",
        job: "Project Manager",
        img: "./images/image3.png",
        text: `Worst buying experience of all time! I didn't even get 
               anything extra. It said I would receive the product 
               after 5-6 days, and it took 7! Horrible, just horrible!`,
    }
]

// Select items
const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

// Select the element with the class 'color'
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

// Set starting item
let currentItem = 0;

// Add an event listener to the buttons for the 'click' event
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem)
})

// Forward button
nextBtn.addEventListener('click', function(){
    currentItem++;
    if (currentItem > reviews.length) {
        currentItem = 0
    }
    showPerson(currentItem)
})

// Forward button
prevBtn.addEventListener('click', function(){
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length-1
    }
    showPerson(currentItem)
})

// Random button
randomBtn.addEventListener('click', function(){
    const currentItem = getRandomNumber(3)
    showPerson(currentItem)
})

// Function to show person
function showPerson(person_id){
    const item = reviews[person_id];
    img.src = item.img;
    job.textContent = item.job;
    author.textContent = item.name;
    info.textContent = item.text;
}

// Random number generator
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}
