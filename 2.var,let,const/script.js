//var 중복선언 O,재할당 O
// 중복이 심해져서 자주 사용 x
// var greeting = 'hello';
// console.log(greeting); // hello

// var greeting = 'hi';
// console.log(greeting); //hi

// greeting = 'how are you?';
// console.log(greeting); //how are you?

//let 중복선언X, 재할당O
// let greeting = 'hello';
// console.log(greeting); // hello

// let greeting = 'hi';
// console.log(greeting);
// //Uncaught SyntaxError: Identifier 'greeting' has already been declared

// greeting = 'how are you?';
// console.log(greeting); //how are you?

// const 중복선언 X, 재할당 X
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

let hello;
console.log(hello);



// a = 5;
// console.log(a);
// var a; // 5


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
