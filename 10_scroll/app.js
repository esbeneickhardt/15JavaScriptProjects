// Set footer date dynamically
const date = document.querySelector(".date")
const currentYear = new Date().getFullYear();

window.addEventListener('DOMContentLoaded', function() {
    date.textContent = currentYear;
})

// Setting up navbar links toggle
const navToggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");
const numberOfLinks = links.querySelectorAll("a").length;

// Static Height
// navToggle.addEventListener('click', function() {
//     linksContainer.classList.toggle("show-links")
// })

// Dynamic Height
navToggle.addEventListener('click', function() {;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    linksContainer.style.height = `${linksHeight}px`;

    if(containerHeight == 0) {
        linksContainer.style.height = `${linksHeight}px`;
    } else {
        linksContainer.style.height = `0px`;
    }
})

// Navbar with always stay even when scrolling
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")

window.addEventListener('scroll', function() {
    const scrollHeight = window.scrollY;
    const navbarHeight = navbar.getBoundingClientRect().height;

    // When to replace navbar with a static navbar
    if (scrollHeight > navbarHeight) {
        navbar.classList.add('fixed-nav')
    } else {
        navbar.classList.remove('fixed-nav')
    }

    // When to display "back to top link"
    if (scrollHeight > navbarHeight) {
        topLink.classList.add("show-link");
      } else {
        topLink.classList.remove("show-link");
      }
})

// Aligning headers with scroll

