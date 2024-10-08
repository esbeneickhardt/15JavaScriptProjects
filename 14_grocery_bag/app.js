//////////////////////////
////// DOM ELEMENTS //////
//////////////////////////

const alert = document.querySelector('.alert');
const form = document.querySelector('.grocery-form');
const grocery = document.getElementById('grocery');
const submit = document.querySelector('.submit-btn');
const container = document.querySelector('.grocery-container');
const list = document.querySelector('.grocery-list');
const clearBtn = document.querySelector('.clear-btn')

///////////////////////////////////
////// INITIAL CONFIGURATION //////
///////////////////////////////////

let editElement = null;
let editFlag = false;
let editId = "";

/////////////////////////////
////// EVENT LISTENERS //////
/////////////////////////////

// Adding event listeners
form.addEventListener('submit', addItem);
clearBtn.addEventListener('click', clearItems);
window.addEventListener('DOMContentLoaded', setupItems);

///////////////////////
////// FUNCTIONS //////
///////////////////////

// Adds item to Grocery List
function addItem(e) {
  // Default submits to server
  e.preventDefault();

  // Getting form value and creating unique ID
  const value = grocery.value
  const id = new Date().getTime().toString()
  
  // Adding item to list
  if(value && editFlag === false){
    // Creates list item
    createListItem(id, value);

    // Show container
    container.classList.add("show-container");

    // Displaying alert
    displayAlert("Adding Item", "success")

    // Add to local storage
    addToLocalStorage(id, value);

    // Set text form back to default
    setBackToDefault();
  } 
  // Editing item
  else if (value && editFlag) {
    // Updating element
    editElement.innerHTML = value;

    // Updating local storage
    editLocalStorage(editId, value);

    // Set text form back to default
    setBackToDefault();
  } else {
    displayAlert("Missing Item", "danger")
  }
};

// Delete function
function deleteItem(e) {
  const element = e.currentTarget.parentElement.parentElement;
  const id = element.dataset.id;
  list.removeChild(element);
  if (list.children.length === 0) {
    container.classList.remove("show-container");
  }
  setBackToDefault();

  // Removes from local storage
  removeFromLocalStorage(id);
};

// Edit function
function editItem(e) {
  const element = e.currentTarget.parentElement.parentElement;

  // Set edit item
  editElement = e.currentTarget.parentElement.previousElementSibling;

  // Set form item
  grocery.value = editElement.innerHTML
  editFlag = true;
  editId = element.dataset.id;
  submit.textContent = "edit";
};

// Clearing all items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  container.classList.remove("show-container");
  if (items.length > 0) {
    items.forEach(function (item) {
      list.removeChild(item);
    });
  }
  setBackToDefault();

  // Deletes items in local storage
  localStorage.removeItem("list"); 
};

// Creating alert
function displayAlert(text,action) {
  // add alert
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);

  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
};

// Sets text form back to default
function setBackToDefault() {
  grocery.value = '';
  editFlag = false;
  editId = '';
  submit.textContent = 'submit';
};

// Creates an grocery item
function createListItem(id, value) {
    // Creating element to store item
    const element = document.createElement("article");
    element.classList.add('grocery-item');
    let attr = document.createAttribute("data-id");
    attr.value = id;
    element.setAttributeNode(attr);

    // Adding value to element
    element.innerHTML = `
      <p class="title">${value}</p>
      <div class="btn-container">
        <button type="button" class="edit-btn">
          <i class="fas fa-edit"></i>
        </button>
        <button type="button" class="delete-btn">
          <i class="fas fa-trash"></i>
        </button>
      </div>
    `;

    // Targeting dynamically created buttons
    const deleteBtn = element.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', deleteItem);
    const editBtn = element.querySelector('.edit-btn');
    editBtn.addEventListener('click', editItem);

    // Adding element to grocery-list
    list.appendChild(element);
}

///////////////////////////
////// Local Storage //////
///////////////////////////

// Setup Items
function setupItems() {
  let items = getLocalStorage();

  if (items.length > 0) {
    items.forEach(function(item) {
      createListItem(item.id, item.value)
    });
    container.classList.add("show-container");
  }
}

// Gets storage
function getLocalStorage() {
  const storedList = localStorage.getItem("list");
  if (storedList) {
    return JSON.parse(storedList);
  } else {
    return [];
  }
}

// Adds item to local storage
function addToLocalStorage(id, value) {
  const groceryItem = { id, value };
  let items = getLocalStorage();
  items.push(groceryItem);
  localStorage.setItem("list", JSON.stringify(items));
}

// Removes item from local storage
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter(function (item) {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
}

// Edits item in local storage
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map(function (item) {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}