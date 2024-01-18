// global this
let a = 'a'
console.log(window);

// // Method => object
// const audio = {
//     title: 'a',
//     play() {
//         console.log('play this', this);
//     }
// }

// audio.play();

// audio.stop = function () {
//     console.log('stop this', this)
// }

// audio.stop();

// Function => Window Object
// function playAudio() {
//     console.log(this);
// }

// playAudio();

// // Constructor Function => {}
// function Audio(title) {
//     this.title = title;
//     console.log(this);//이것만 있으면 {}호출
// }

// const audio = new Audio('a');
//{title:'a'}출력

// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop', 'jazz'],
//     displayCategories() {
//         this.categories.forEach(function (category) {
//             console.log(`title: ${this.title}, category: ${category}`);
//         }, this);
//     }
// }

// audio.displayCategories();
// title: undefined, category: rock ... 출력
//마지막 this로 title : audio 출력


//화살표 함수===> this 항상 상위 스코프의 this를 가리키게 됩니다.
//Lexical this

// const audio = {
//     title: 'audio',
//     categories: ['rock', 'pop', 'hiphop', 'jazz'],
//     displayCategories() {
//         this.categories.forEach((category) => {
//             console.log(this);
//         });
//     }
// }

// audio.displayCategories();

