// Selecting button and video container
const button = document.querySelector(".switch-btn");
const videoContainer = document.querySelector(".video-container");

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
