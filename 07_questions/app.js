// selecting all buttons
// const buttons = document.querySelectorAll('.question-btn');
// 
// transversing the dom
// buttons.forEach(function(button) {
//     button.addEventListener('click', function(e) {
//         // Get the currentTarget (the button itself)
//         const currentButton = e.currentTarget;
//  
//         // Get the parent element of the currentTarget (the question)
//         const currentQuestion = currentButton.parentElement.parentElement;
// 
//         // Toggeling on off
//         currentQuestion.classList.toggle("show-text")
//     })
// })

// using selectors inside elements
const questions = document.querySelectorAll('.question');

questions.forEach(function(question) {
    const button = question.querySelector('button')
    button.addEventListener('click', function () {
        // Closing all opened answers
        questions.forEach(function(item) {
            if (item !== question) {
                item.classList.remove("show-text")
            }
        })

        // Opening answer of interest
        question.classList.toggle("show-text")
    })
});
