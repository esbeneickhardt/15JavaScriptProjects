const sidebarToggle = document.querySelector('.sidebar-toggle');
const closeSidebar = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Listens for toggle on/off of sidebar
sidebarToggle.addEventListener('click', function() {
    sidebar.classList.toggle("show-sidebar")
});

// Listens for toggle off of sidebar
closeSidebar.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar')
});
