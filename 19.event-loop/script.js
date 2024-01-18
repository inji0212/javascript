//동기는 시간순 비동기는 순서상관X
//자바는 동기코드
// 자바스크립트 이외의도움을 받아 비동기코드 작성
//브라우저의 도움을 받는게 가장 쉬운 예시

//자바스크립트 엔진
//함수들 콜스택, 쌓인다.

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
//재귀함수 Maximum 에러난다.