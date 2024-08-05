// Set initial count
let count = 0;

// Select value (by id)
const value = document.querySelector('#value');

// Select the buttons (by class)
const btns = document.querySelectorAll('.btn');

// Creating event listener for each button
btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            count--;
        } else if (styles.contains("increase")) {
            count++;
        } else {
            count = 0;
        }
        if (count > 0) {
            value.style.color = 'green';
        } else if (count < 0) {
            value.style.color = 'red';
        } else {
            value.style.color = 'black';
        }
        value.textContent = count
    })
});
