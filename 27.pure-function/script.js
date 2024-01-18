//1.같은 입력값이 주여졌을떄,언제나 결과값을 리턴
//2. 사이드 이펙트 만들지 않는다.

//클린코드를 위해 
//테스트를 쉽게하기위해 
///디버그 쉽게하기 위해 
//독립적코드를위해

// // Same Input => Same Output
// const add = (x, y) => x + y;
// console.log(add(10, 20));

// const fullName = (first, last) => `${first} ${last}`;
// console.log(fullName("John", "Ahn"));


// // No Side Effects
// const z = 1;
// const sum = (x, y) => x + y + z;
// console.log(sum(10, 20));
// 밖에있는 z로 값이 바뀐다.


// // Impure Function Example 
// let x = 0;
// const numberUp = () => x += 1;
// console.log(numberUp());
// console.log(x);

// const alphabetArray = ['A', 'B'];
// const addItemToArray = (originalArray, newItem) => {
//     originalArray.push(newItem);
//     return originalArray;
// }
// console.log(addItemToArray(alphabetArray, 'C'));
// console.log(alphabetArray);



// Impure to pure function
let x = 0;
const pureNumberUp = (num) => num += 1;
console.log(pureNumberUp(x));
console.log(x);
//내부에서만 바뀌고 x는 그대로


const alphabetArray = ['A', 'B'];
const pureAddItemToArray = (originalArray, newItem) => {
    return [...originalArray, newItem]
}
console.log(pureAddItemToArray(alphabetArray, 'C'));
console.log(alphabetArray);
