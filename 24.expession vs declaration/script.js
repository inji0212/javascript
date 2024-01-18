 //함수 선언문
 // 함수 만들고 이름지정
 function funcDeclaration() {
    return 'A function declaration 함수 선언문';
}

//함수 표현식
//함수 만들고 변수 할당 함수는 익명으로 이름없다.
let funcExpression = function () {
    return 'A function expression 함수 표현식';
}


// 선언식은 호이스팅 영향받지만
// 표현식은 호이스팅 영향 없다.

// Function Expression
alert(foo()); 
var foo = function () { return 5; }

// Function Declaration
alert(foo());
function foo() { return 5; }