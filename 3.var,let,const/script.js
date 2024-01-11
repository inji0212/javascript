// var greeting = 'hello';
// console.log(greeting); // hello

// var greeting = 'hi';
// console.log(greeting); //hi

// greeting = 'how are you?';
// console.log(greeting); //how are you?


// let greeting = 'hello';
// console.log(greeting); // hello

// let greeting = 'hi';
// console.log(greeting);
// //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// greeting = 'how are you?';
// console.log(greeting); //how are you?

// const greeting = 'hello';
// console.log(greeting); // hello

// const greeting = 'hi';
// console.log(greeting);
// //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// greeting = 'how are you?';
// console.log(greeting);
// //Uncaught TypeError: Assignment to constant variable

// const arrayList = [1, 2, 3];
// arrayList.push(4);
// console.log(arrayList);

// const objectList = { a: 'a', b: 'b' };
// objectList.c = "c"
// console.log(objectList);


//var==> 함수 레벨 스코프
//함수 안에서 사용가능
//함수 밖에서는 사용 불가

// function func() {
//     if (true) {
//         var a = 'a';
//         console.log(a); // 'a'
//     }
//     console.log(a); // 'a'
// }

// func();
// console.log(a); // ReferenceError: a is not defined



//let, const ==>block레벨 스코프
//if 안에서만 사용가능
//밖에선 오류 

// function func() {
//     if (true) {
//         let a = 'a';
//         console.log(a); // 'a'
//     }
//     console.log(a); // ReferenceError: a is not defined
// }

// console.log(a); // ReferenceError: a is not defined


//let은 호스팅되고 undefined이 할당되어 출력

console.log(hello);
let hello;



// a = 5;
// console.log(a);
// var a; // 5


//let, const는 호스팅은되나
//초기 undefined이 안되어 에러

// console.log(greeting);
// // Uncaught ReferenceError: Cannot access 'greeting' before initialization
// const greeting = "hello";

// console.log(greeting);
// // undefined
// let greeting = "hello";



// func(); //hoisting test

// function func() {
//     console.log("hoisting test");
// }
