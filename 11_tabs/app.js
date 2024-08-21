// About
const about = document.querySelector(".about")

// All buttons
const buttons = document.querySelectorAll(".tab-btn")

// Place to show content
const contents = document.querySelectorAll(".content")

// Checking which button is clicked
about.addEventListener("click", function(e) {
    // Getting id of clicked area
    const clickedButtonID = e.target.dataset.id;
    
    // If button pressed
    if (clickedButtonID) {
        // Remove selection from other buttons
        buttons.forEach(function (button) {
            button.classList.remove("active");
        });
        e.target.classList.add("active");

        // Hide all content sections
        contents.forEach(function(content) {
            content.classList.remove("active");
        });

        // Show the content that matches the clicked button's data-id
        const element = document.querySelector(`.content[data-id="${clickedButtonID}"]`);
        element.classList.add("active");
    }
})
