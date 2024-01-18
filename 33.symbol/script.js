// const sym1 = Symbol();
// const sym2 = Symbol();

// console.log(sym1 === sym2); //false

// const sym3 = Symbol('hi');
// console.log(sym3.description);

// let carA = {
//     id: 1,
//     name: 'morning',
//     brand: 'kia',
//     price: 1000
// }

// const idSym = Symbol('id');
// carA[idSym] = 300;

// console.log(carA);


// carA.id = 300;

// const idSym = Symbol('id');
// let carA = {
//     id: 1,
//     name: 'morning',
//     brand: 'kia',
//     price: 1000,
//     [idSym]: 300
// }


// for (const key in carA) {
//     console.log(key);
// }

// console.log(Object.getOwnPropertyNames(carA));

// console.log(Object.getOwnPropertySymbols(carA));

// console.log(Symbol.for('id') === Symbol.for('id'));
// true

// // description을 이용해 심볼을 찾음
// let sym = Symbol.for("name");
// let sym2 = Symbol.for("id");

// // 심볼을 이용해 description을 얻음
// alert(Symbol.keyFor(sym)); // name
// alert(Symbol.keyFor(sym2)); // id


// const RED = 'red';
// const ORANGE = 'orange';
// const YELLOW = 'yellow';
// const BLUE = 'blue';
// const dog = 'blue';

// function getImportantLevel(color){
//     switch (color) {
//         case RED:
//             return 'very important';
//         case ORANGE:
//             return 'important';
//         case YELLOW:
//             return 'little important';
//         case BLUE:
//             return 'not important';
//         default:
//             console.log(`${color} not included`);
//     }
// }

// console.log(getImportantLevel(BLUE));
// console.log(getImportantLevel(dog));


// const RED = Symbol('red');
// const ORANGE = Symbol('orange');
// const YELLOW = Symbol('yellow');
// const BLUE = Symbol('blue');
// const dog = 'blue';

// function getImportantLevel(color) {
//     switch (color) {
//         case RED:
//             return 'very important';
//         case ORANGE:
//             return 'important';
//         case YELLOW:
//             return 'little important';
//         case BLUE:
//             return 'not important';
//         default:
//             console.log(`${color} not included`);
//     }
// }

// console.log(getImportantLevel(BLUE));
// console.log(getImportantLevel(dog));


// class Car {
//     constructor() {
//         this.length = 0;
//     }

//     add(brand, name) {
//         this[brand] = name;
//         this.length++;
//     }
// }

// let myCars = new Car();
// myCars.add('kia', 'morning');
// myCars.add('hyundai', 'tucson');
// myCars.add('genesis', 'gv80');

// for (const car in myCars) {
//     console.log(car, myCars[car]);
// }


// const length = Symbol('length');
// class Car {
//     constructor() {
//         this[length] = 0;
//     }

//     add(brand, name) {
//         this[brand] = name;
//         this[length]++;
//     }
// }

// let myCars = new Car();
// myCars.add('kia', 'morning');
// myCars.add('hyundai', 'tucson');
// myCars.add('genesis', 'gv80');

// for (const car in myCars) {
//     console.log(car, myCars[car]);
// }


class AlertService {
    constructor() {
        this.alerts = {};
    }

    addAlert(symbol, alertText) {
        this.alerts[symbol] = alertText;
        this.renderAlerts();
    }

    removeAlert(symbol) {
        delete this.alerts[symbol];
    }

    renderAlerts() { }
}

const alertService = new AlertService();

class MyComponent {
    constructor(thing) {
        this.componentId = Symbol(thing);
    }

    errorHandler(msg) {
        alertService.addAlert(this.componentId, msg);
        setTimeout(() => {
            alertService.removeAlert(this.componentId);
            console.log('Removed alert', this.componentId);
        }, 5000);
    }
}

let list = new MyComponent('listComponent');
let list2 = new MyComponent('listComponent');
let form = new MyComponent('inputComponent');

list.errorHandler('문제가 발생했습니다.');
list.errorHandler('이러이러한 이유로 에러가 발생했습니다.');



