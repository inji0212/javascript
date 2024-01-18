//조용히 무시된 에러 발생
//최적화되어 실수 줄여 좀더 빨리 작동

// "use strict" 사용하면 스트릭 모드
// html에서 script scr="script.js" type="module"></sript> 
// 타입 모듈 을 추가 하면 스트릭 모드


function sum(a, b) {
    a = 10
    return [a + b,
    arguments[0] + arguments[1]];
}

console.log(sum(1, 2));





// function sum(a, b) {
//     console.log(this);
//     return a + b;
// }

// console.log(this);
// sum.bind(this)(1, 2);






// "string".prop = 7;

// console.log("string".prop);






// function add(a, a, b) {
//     return a + a + b;
// }

// console.log(add(1, 2, 3));







// const obj = {
//     get readOnly() {
//         return 7;
//     }
// };

// console.log(obj.readOnly);

// obj.readOnly = 10;
// 이게 에러

// console.log(obj.readOnly);







// const obj = {};

// Object.defineProperty(obj, "readOnly",
//     { writable: false, value: 7 });

// console.log(obj);

// obj.readOnly = 10;
//이게 에러

// console.log(obj);







// undefined = 7;
// NaN = 10;

// console.log(undefined);
// console.log(NaN);







// let greeting = 'hello';

// greating = 'hi';

// console.log(greeting);
// console.log(greeting, window.greating);





// function sum(a, b) {
//     "use strict"
//     return a + b;
// }

// class Cat {

// }


