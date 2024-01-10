function funcDeclaration() {
    return 'A function declaration 함수 선언문';
}

let funcExpression = function () {
    return 'A function expression 함수 표현식';
}


// Function Expression
alert(foo()); 
var foo = function () { return 5; }

// Function Declaration
alert(foo());
function foo() { return 5; }