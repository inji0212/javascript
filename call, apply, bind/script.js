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

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// fullName.call(person1, "Oslo", "Norway");


// // Apply() with arguments
// const fullName = function (city, country) {
//     console.log(`${this.firstName}, ${this.lastName}, ${city}, ${country}`);
// }

// const person1 = {
//     firstName: "John",
//     lastName: "Doe"
// }

// fullName.apply(person1, ["Oslo", "Norway"]);

// bind()
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