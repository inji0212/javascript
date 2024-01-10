// // MAP METHOD
// const array1 = [1, 4, 9, 16];

// // pass a function to map
// const map1 = array1.map(x => x * 2);

// console.log(map1);
// // expected output: Array [2, 8, 18, 32]

// const array1 = [1, 4, 9, 16];

// const map1 = array1.map(function (item, index, array) {
//     console.log(item, index, array, this)
//     return (item * 2)
// }, { a: 'a' });

// console.log(map1);

// // FILTER METHOD
// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// // expected output: Array ["exuberant", "destruction", "present"]

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(function (word, index, array) {
//     console.log(word, index, array, this);
//     return word.length > 6
// }, { a: 'a' });

// console.log(result);


// Reducer
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
});

// 두 번째 인수로 초기값 제공
[0, 1, 2, 3, 4].reduce(function (accumulator, currentValue, currentIndex, array) {
    return accumulator + currentValue;
}, 10);