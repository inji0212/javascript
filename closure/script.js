// What is closure?
// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');



// Example 
// let a = 'a';
// function functionB() {
//     let c = 'c';
//     console.log(a, b, c);
// }

// function functionA() {
//     let b = 'b';
//     console.log(a, b);
//     functionB();
// }

// functionA();

// 
let a = 'a';
function functionA() {
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    }
    let b = 'b';
    console.log(a, b);
    functionB();
}

functionA();
