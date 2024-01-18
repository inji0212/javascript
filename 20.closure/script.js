// What is closure?
// 다른 함수 내부에 정의된 함수가 있는 경우 
// 외부 함수가 실행을 완료하고
// 해당 변수가 해당 함수 외부에서 더이상 엑세스 없는 경우에도
// 해당 내부함수는 외부 함수의 변수 및 범위에 엑세스 가능

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');
// newFunction('inside');
// outer function : outside
// inner function : inside  출력

// console.log('New function: ' + newFunction);
//     New function : function innerFunction(innerVariable) {
//         console.log('Outer Variable: ' + outerVariable);
//         console.log('Inner Variable: ' + innerVariable);
//     }
// } 출력된다.

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
