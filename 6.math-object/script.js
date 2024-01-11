const num1 = 20;
const num2 = 10;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 * num2;
val = num1 - num2;
val = num1 / num2;
val = num1 % num2; // 나머지 연산자(%)는 왼쪽 피연산자를 오른쪽 피연산자로 나눴을 때의 나머지를 구합니다. 

// Math Object
val = Math.E        // returns Euler's number
val = Math.PI       // returns PI
val = Math.SQRT2    // returns the square root of 2
val = Math.SQRT1_2  // returns the square root of 1/2
val = Math.LN2      // returns the natural logarithm of 2
val = Math.LN10     // returns the natural logarithm of 10
val = Math.LOG2E    // returns base 2 logarithm of E
val = Math.LOG10E   // returns base 10 logarithm of E
val = Math.round(2.4); // 가장 가까운 정수로 변환 returns the nearest integer:
val = Math.ceil(2.4); // 무조건 올린 정수로 변환 returns the value of x rounded up to its nearest integer
val = Math.floor(2.8); // 무조건 내린 정수로 변환 returns the value of x rounded down to its nearest integer
val = Math.abs(-2); // 절댓값 Returns the absolute value of a number
val = Math.sqrt(64); // Returns 8 sqrt 는 특정숫자의 제곱근 값을 계산해주는 함수
val = Math.pow(8, 2); // Return 16 pow 는 특정숫자의 거듭제곱 값을 계산해주는 함수
val = Math.min(2, 3, 5, 7, 11, 6, 8, -1);  //가장 작은 수 -1만 리턴
val = Math.max(2, 3, 5, 7, 11, 6, 8, -1);  //가장 큰 수 11만 리턴
val = Math.random(); // 0과 1사이 수 랜덤 Returns a random number between 0 and 1

//1-20
val = Math.floor(Math.random() * 20 + 1);

console.log(val);

//백틱{'} 문자열 표현이 더 쉬움
// ''안에서 엔터치면 엔터로 리턴
// 수식표현은 ${a+b}로 표현

console. log('text line1 text line2');

console.log('line ${a+b}');

