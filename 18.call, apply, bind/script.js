//call은 함수를 호출하는 함수
//첫번쨰 매개변수를 전달해주면 호출되는 함수의 this안에 
//window 객체가 아닌 전달받은것을 받게 됩니다.

// // Call();
// const fullName = function () {
//     console.log(this.firstName + " " + this.lastName);
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// // This will return "John Doe"
// fullName.call(person1); 


// // Call() with arguments
// const fullName = function (city, country) {
//     console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
// }
//    =console.log(this.firstName + ' ' + this.lastName,city,country);        
// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// fullName.call(person1, "Oslo", "Norway");
//------------------------------------



// // Apply() with arguments
//apply는 배열로 호출하면 된다.

// const fullName = function (city, country) {
//     console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// fullName.apply(person1, ["Oslo", "Norway"]);
//--------------------------------------


// bind()
// 바로 출력 불가능 정의 내려야함

function func(language) {
    if (language === "kor") {
        console.log(`language: ${this.korGreeting}`);
    } else {
        console.log(`language: ${this.engGreeting}`);
    }
}

const greeting = {
    korGreeting: "안녕 ",
    engGreeting: "Hello ",
};

const boundFunc = func.bind(greeting);
boundFunc('kor');

//안녕 출력
//const boundFunc = func.bind(greeting)('kor');
//바로 출력가능

///////////////////////////////////
//조건부 삼항 연산자
//if (a){
//    a="a";
//  } else {
//    a="b";
//  }
//를 한줄로 작성가능
//a ? a="a":a="b";