// Menu items
const menu = [
    {
      id: 1,
      title: "Buttermilk Pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `Fluffy buttermilk pancakes stacked high and served with a drizzle of maple syrup. A perfect start to your morning with a touch of sweetness.`,
    },
    {
      id: 2,
      title: "Diner Double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `A classic double cheeseburger with two juicy beef patties, melted cheddar, crisp lettuce, and ripe tomatoes, all nestled in a toasted brioche bun.`,
    },
    {
      id: 3,
      title: "Godzilla Milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `A towering milkshake that’s a monster of flavor! Rich vanilla ice cream blended with chocolate syrup, topped with whipped cream and a cherry.`,
    },
    {
      id: 4,
      title: "Country Delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `A hearty country breakfast platter with farm-fresh eggs, crispy bacon, buttery biscuits, and golden hash browns, bringing you a taste of the countryside.`,
    },
    {
      id: 5,
      title: "Egg Attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `A powerhouse sandwich with fried eggs, smoked bacon, melted cheddar, and spicy aioli on a toasted ciabatta roll, perfect for a satisfying lunch.`,
    },
    {
      id: 6,
      title: "Oreo Dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `A dreamy shake made with creamy vanilla ice cream, crushed Oreo cookies, and topped with whipped cream and cookie crumbles. A treat for all ages.`,
    },
    {
      id: 7,
      title: "Bacon Overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `Crispy bacon piled high on a bed of scrambled eggs and served with buttery toast. A savory explosion of flavors for bacon lovers.`,
    },
    {
      id: 8,
      title: "American Classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `An all-American favorite! A grilled cheeseburger with crisp lettuce, fresh tomatoes, pickles, and a side of golden fries. Simple, delicious, and timeless.`,
    },
    {
      id: 9,
      title: "Quarantine Buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `A comforting shake to get you through the day, blending chocolate, peanut butter, and a hint of banana. Topped with whipped cream and chocolate shavings.`,
    },
  ];  

// Selecting where to display content
const sectionCenter = document.querySelector(".section-center")

// Selecting where to display buttons
const buttonContainer = document.querySelector('.btn-container')

// Unique categories
const categories = ["all", ...new Set(menu.map(item => item["category"]))];

// Populating items on load
window.addEventListener('DOMContentLoaded', function() {
    displayButtons(categories);
    displayMenuItems(menu);
    addButtonListeners();
})

// Wraps buttons in HTML and displays them
function displayButtons(categories) {
  let displayButtons = categories.map(function (category){
    return `
          <button type="button" class="filter-btn" data-id=${category}>
          ${category}
        </button>
        `;
  });

  // Join the array of HTML strings into a single string
  displayButtons = displayButtons.join("");
  
  // Insert the HTML into the section-center
  buttonContainer.innerHTML = displayButtons;  
}

// Wraps menu items in HTML and displays them
function displayMenuItems(menuItems) {
    let displayMenu = menuItems.map(function (item) {
        return `
          <article class="menu-item">
            <img src="${item.img}" alt="${item.title}" class="photo" />
            <div class="item-info">
              <header>
                <h4>${item.title}</h4>
                <h4 class="price">$${item.price}</h4>
              </header>
              <p class="item-text">${item.desc}</p>
            </div>
          </article>
        `;
      });
    
      // Join the array of HTML strings into a single string
      displayMenu = displayMenu.join("");
      
      // Insert the HTML into the section-center
      sectionCenter.innerHTML = displayMenu;
}


// Button event listeners
function addButtonListeners() {
    // Selecting buttons
    const buttons = document.querySelectorAll('.filter-btn');

    // Defining actions
    buttons.forEach(function(button) {
      button.addEventListener('click', function(e) {
          const currentButton = e.currentTarget;
          const category = currentButton.textContent.trim().toLowerCase();
          
          const selectedItems = menu.filter(function(item) {
              if (item.category.toLowerCase() === category) {
                  return item
              }
          });
          
          if(category === "all") {
              displayMenuItems(menu);
          } else {
              displayMenuItems(selectedItems);
          }
      });
  })
}
