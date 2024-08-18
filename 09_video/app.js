// Selecting button and video container
const button = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

// Selecting preloader
const preloader = document.querySelector(".preloader")

// Populating items on load
window.addEventListener('load', function() {
    preloader.classList.add('hide-preloader')
})

// Making button work
button.addEventListener('click', function() {
    if(!button.classList.contains('slide')) {
        videoContainer.pause();
        button.classList.add('slide');
    } else {
        videoContainer.play();
        button.classList.remove('slide');
    }
});
