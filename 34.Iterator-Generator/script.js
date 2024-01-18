//iterable: 배열은 반복가능한 객체일 떄
// for of 만족 symbol.iterator값을 가질떄

//iterator: 반복자는 next()호출해서
// {value: ,done: }두개 속성을 가지는 객체를 반환하는 객체


// // Iterator Example
// function makeIterator(numbers) {
//     let nextIndex = 0;

//     return {
//         next: function () {
//             return nextIndex < numbers.length ?
//                 { value: numbers[nextIndex++], done: false } :
//                 { value: undefined, done: true }
//         }
//     }
// }

// // 숫자 배열 생성
// const numbersArr = [1, 2, 3];
// // 이터레이터에 숫자 배열 넣어주기
// const numbersIterator = makeIterator(numbersArr);
// 반복자 두개 값 반환시킨다.

// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());



// //  Symbol.iterator을 사용해서도 가능
// const numbersArr = [1, 2, 3];
//반복가능한 값을 iterator로 가능

// const numbersIterator = numbersArr[Symbol.iterator]();
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());
// console.log(numbersIterator.next());





// // Iterable Object 
// const numbersIterable = [1, 2, 3];
// const numbersNotIterable = { a: 1, b: 2 };
// console.log(typeof numbersIterable);
// console.log(typeof numbersNotIterable);
// for (const n of numbersNotIterable) {
//     console.log(n);
// }

// const arr = [1, 2, 3, 4];
// const set = new Set([1, 2, 3, 4]);
// // console.log('set', set);
// const map = new Map([
//     ['a', '1'],
//     ['b', '2'],
// ]);
// // console.log('map', map);
// const obj = { a: 1, b: 2 };

// // console.log(arr[Symbol.iterator]());
// // console.log(set[Symbol.iterator]());
// // console.log(map[Symbol.iterator]());
// // console.log(obj[Symbol.iterator]());

// console.log(arr[Symbol.iterator]().next());
// console.log(set[Symbol.iterator]().next());
// console.log(map[Symbol.iterator]().next());

//-------------------------------------------
//generator 함수
// 다른 시간 간격으로 여러값 반환
//사용자 요구에 따라 일시정지도, 시작할 수도 있다.
//function* 형태

// // Generator Example
// function* sayNumbers() {
//   yield 1;
//   yield 2;
//   yield 3;
// }

//제너레이터 함수의 반환이 제너레이터
// const number = sayNumbers();

// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);
// console.log(number.next().value);



function* generatorFunction() {
    yield 1;
}

const generator = generatorFunction();

console.log(generator === generator[Symbol.iterator]());



//주로 사용하는 방법


// // ID Creator
// 필요할 떄만 생성
 // lazy evaluation: 계산 결과값이 필요할떄까지 늦춰서 
 // 필요한 데이터를 필요한 순간에 호출

// function* createIds() {
//     let index = 1;

//     while (true) {
//         yield index++;
//     }
// }

// const gen = createIds();

// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next().value);
// console.log(gen.return(10));
//1,2,3 value에 10 억지로 넣을 수 있따.




// function* generatorFunction() {
    // for (const number of [1, 2, 3]) {
    //     yield number;
    // }
        //를   yield*으로 표현할 수 있따.
    // yield* [1, 2, 3];
// }

// const generator = generatorFunction();
// console.log(generator.next());
// console.log(generator.next());
// console.log(generator.next());

// for (const number of generator) {
//     console.log(number);
// }