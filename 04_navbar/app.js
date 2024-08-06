// Need to listen to toggle and show/hide links
const navToggle = document.querySelector('.nav-toggle')
const links = document.querySelector('.links')

// Listens for toggle on/off (long version)
// navToggle.addEventListener('click', function() {
//     if (links.classList.contains('show-links')) {
//         links.classList.remove('show-links')
//     } else {
//         links.classList.add('show-links')
//     }
// })

// Listens for toggle on/off (short version)
navToggle.addEventListener('click', function() {
    links.classList.toggle("show-links")
})
