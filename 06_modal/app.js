const openModal = document.querySelector('.modal-btn');
const closeModal = document.querySelector('.close-btn');
const modal = document.querySelector('.modal-overlay')

//Opens modal
openModal.addEventListener("click", function() {
    modal.classList.add('open-modal');
});

//Closes modal
closeModal.addEventListener("click", function() {
    modal.classList.remove('open-modal');
});
