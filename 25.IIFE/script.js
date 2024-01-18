//즉시 실행 함수 표현식

// // 기본 형태
// (
//     function () {
//         // Do fun stuff
//     }
// )()
//첫번쨰 () 전역선언 막고 내부 안으로 다른 변수 접근 막기
//두번쨰 () 즉시 실행 함수 생성 함수 즉시 해석및 실행


//주된 사용목적은 
//변수를 전역으로 선언하는 것을 막고 
//내부에 다른 변수가 들어오는 것을 막기위해

// (function () {
//     var aName = "Barry";
// })();
// // IIFE 내부에서 정의된 변수는 외부 범위에서 접근이 불가능하다

// console.log(aName)
// // throws "Uncaught ReferenceError: aName is not defined"




// var result = (function () {
//     var name = "Barry";
//     return name;
// })();
// // 즉시 결과를 생성한다.
// console.log(result);
// // "Barry" 출력됨



//이름 없는 함수를 위해 사용가능
//함수 이름은 선택사항
//이름이 없을려면 
//1. 할당받을 변수가 지정되어있어야한다.
//2. 함수를 즉시 호출해야한다.

// function minus(a, b) {
//     return a - b;
// }

// function (a, b) {
//     return a - b;
// }

// const minus = function (a, b) {
//     return a - b;
// }

// (function (a, b) {
//     return console.log(a - b);
// })(1, 2);




//앞에 연산자를 붙여서 사용가능하다.
//화살표 함수에서는 무조건(로 시작
// !function() { return console.log("hi") }() 
// void function() { return console.log("hi") }() 
// +function() { return console.log("hi") }() 
// -function() { return console.log("hi") }() 
// ~function() { return console.log("hi") }() 
// *function() { return console.log("hi") }() 
// ^function() { return console.log("hi") }() 
// &function() { return console.log("hi") }();

const increment = (() => {
    let counter = 0;
    console.log(counter);
    const number = (num) => console.log(`it is ${num} number`);
    return () => { counter++; number(counter); }
})()

console.log(increment); //0
increment(); //()부분만 호출 하면 결국 넘버카운터가 호출 it is 1~이 호출된다.
increment(); // it is 2~



//---------------------------
//심화
// const Score = (() => {
//     let count = 0;
//     return {
//         current: () => { return count },
//         increment: () => { count++ },
//         reset: () => { count = 0 }
//     }
// })();

// console.log(typeof Score);
// console.log(Score);

// Score.increment();
// console.log(Score.current());0


// Score.increment();
// console.log(Score.current());1
// Score.reset();0
// console.log(Score.current());0

// let count는 한번만 선언되고 다음부턴 리턴계산만실행된다.