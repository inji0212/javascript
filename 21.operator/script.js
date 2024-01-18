//객체 구조 분해 할당
//let accessory=animalData.accessory;
//...긴 선언문 대신

//function buildAnimal(animalData){
//    let {accessory,animal,color,hairType}=animaData;
//}
//로 표현가능

//배열 구조 분해 할당
//let a,b,c;
//{a,b,c}=[10,20,30];

//or
//const week=[1,2,3,4,5];
//const [D1,D2,D3,D4,D5]=week;

//[,,D3,,D5]=week; 으로 3과5만 대입가능하다.

//const student{
//    firstName: 'John',
//    lastName:'Mary'
//}

//const{firstName: fName='not given',lastName}=student;

//배열조합
//const arrwrap=arr1.concat(arr2,arr3);
//해도 배열이 합쳐지지만
//const arrwrap=[...arr1,...arr2,...arr3];
//도 배열이 합쳐짐

//Array.prototype.push.apply(arr1,arr2);도
//arr1.push(..arr2);로 배열 합쳐짐

//const obwrap={arr1,arr2};는 객체 자체로 들어가서
//arr1의 {} ,arr2의 {}로 나오지만 

//const obwrap= {...arr1, ...arr2};
//는 각각의 값이 할당되어
//a='',b=''...로 나온다

//기존 배열을 보존
//const arr1=[1,2,3];
// const arr2=arr1.reverse();
//하면 arr1도 리벌스되어 저장되지만

//const arr2=[...arr1].reverse();
//원본 배열을 유지한채 리벌스 할수 있다.