//shallow compare 얕은 비교
//숫자 문자열 등 원시 자료형 값을 비교
//배열 객체등 참조자료형은 참조되는 위치를 비교

//깊은비교
//객채의 경우에도 값으로 비교
//깊은 비교 방법
//1. object depth가 깊지 않은 경우 : 
//JSON.stringify()사용
console.log(JSON.stringify(obj1)==JSON.stringify(obj2));

//2. object depth가 깊은 경우:lodash 라이브러리의 isEqual()사용

//---------------------------------------

//얕은 복사
// // // shallow copy
// // const aArray = [1, 2, 3];

// // // shallow copy with spread operator
// // const bArray = [...aArray, 4];
// // // console.log('aArray', aArray);
// // // console.log('bArray', bArray);
// // // console.log('aArray === bArray', aArray === bArray);

// // // shallow copy with Object.assign()
// // const cArray = Object.assign([], bArray);
// // // console.log('cArray', cArray);
// // // console.log('bArray === cArray', bArray === cArray);


//얕은 복사
// // // Nested Arrays and Objects
// // cArray.push([5, 6, 7]);
// // console.log('cArray', cArray);
// // const dArray = [...cArray, 10];
// // console.log('dArray', dArray);
// // dArray[4].push(8);
// // console.log('cArray', cArray);
// // console.log('dArray', dArray);
//spread operator, Object.assign 이외에도
//Array.from() slice도 가능
//중첩된 부분만 잠깐 변경


// // 얕은 동결
// 동결된 객체는 변경 불가
const aObject = {
    "a": "a",
    "b": "b",
    "cObject": { "a": 1, "b": 2 }
}

// // Object.freeze(aObject);
// // aObject.a = "c";
// // console.log('aObject', aObject);
// // aObject.cObject.a = 3;
// // console.log('aObject', aObject);



//------------------------

//깊은 복사
// // deep copy 
// // deep copy with json.parse(json.stringify())

// // const newAObject = JSON.parse(JSON.stringify(aObject));
// // console.log('aObject', aObject);
// // console.log('newAObject', newAObject);
// // aObject.cObject.a = 3;
// // console.log('aObject', aObject);
// // console.log('newAObject', newAObject);

// // // deep copy with nested spread operator

// // const newAObject = { ...aObject, cObject: { ...aObject.cObject } }
// // console.log('aObject', aObject);
// // console.log('newAObject', newAObject);
// // aObject.cObject.a = 3;
// // console.log('aObject', aObject);
// // console.log('newAObject', newAObject);

// deep copy with lodash
//index.html에 
//<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.11/lodash.min.js"></script>
//필요
const newAObject = _.cloneDeep(aObject);
console.log('aObject', aObject);
console.log('newAObject', newAObject);
aObject.cObject.a = 3;