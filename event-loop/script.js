// console.log('1');

// setTimeout(() => {
//     console.log('2');
// }, 3000);

// console.log('3');



function B() {
    setTimeout(function () {
        console.log('B-1...');
    }, 1500);
}

function A() {
    console.log('A-1...');
    B();
    console.log('A-2...');
}

A();


// console.log('1...');

// setTimeout(function () {
//     console.log('2...');
// }, 0);

// console.log('3...');


// function foo() {
//     foo();
// }
// foo();