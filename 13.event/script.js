// // CLICK EVENT
// const submitBtn = document.querySelector('.submit-btn');
// const container = document.querySelector('form');
// const title = document.querySelector('h2');
// // Click
// submitBtn.addEventListener('click', handleEvent);
// // Doubleclick
// submitBtn.addEventListener('dblclick', handleEvent);
// // Mousedown
// submitBtn.addEventListener('mousedown', handleEvent);
// // Mouseup
// submitBtn.addEventListener('mouseup', handleEvent);
// // Mouseenter
// submitBtn.addEventListener('mouseenter', handleEvent);
// // Mouseleave
// submitBtn.addEventListener('mouseleave', handleEvent);
// // Mousemove
// container.addEventListener('mousemove', handleEvent);

// // // Event Handler
// function handleEvent(e) {
//     e.preventDefault();
//     console.log(`EVENT TYPE: ${e.type}`);
//     title.textContent= `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
// }

// FORM EVENT
const form = document.querySelector('form');
const emailInput = document.getElementById('email');
const title = document.querySelector('h2');

// Clear input
emailInput.value = '';

form.addEventListener('submit', handleEvent);

// Keydown
emailInput.addEventListener('keydown', handleEvent);
// keyup
emailInput.addEventListener('keyup', handleEvent);
// Keypress
emailInput.addEventListener('keypress', handleEvent);
// Focus
emailInput.addEventListener('focus', handleEvent);
// Blur (focus 하고 다른 곳 클릭하면...)
emailInput.addEventListener('blur', handleEvent);
// Cut (잘라내기 할 때)
emailInput.addEventListener('cut', handleEvent);
// Paste (붙여 넣기 할 때)
emailInput.addEventListener('paste', handleEvent);
// Input (input 요소 값이 달라졌을 때)
emailInput.addEventListener('input', handleEvent);

function handleEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);

    if (e.type === 'submit') {
        e.preventDefault();
    }

    console.log(e.target.value);
    title.innerText = e.target.value;
}