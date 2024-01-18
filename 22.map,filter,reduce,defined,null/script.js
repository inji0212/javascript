//Map 메서드
//map() 은 배열 내의 모든 요소 각각에 대하여
//주어진 함수를 호출한 결과를 모아새로운 배열을 반환

//const arr1=[1,2,3,4];

//pass a function to map
//const map1= arr1.map(x=>x*2);
//msp1은 2,4,6,8새로 만들어잔다.

//arr.map(callback(currentValue[, index[, array]])[, thisArg]) 


//filter 메소드
//filter() 는 주어진 함수의 테스트를 통과하는 모든 요소를 
//새 배열로 반환

 //const arr1=['spray','limit',exuberant','destruction'];
//const result=arr1.filter(word=>word.length>6);


//reduce 메소드
//reduce() 은 배열의 각요소에 대해주어진 함수를 실행하고
//하나의 결과값을 반환
//arr.reduce(reducer함수, initialValue)
//acc 누산기(계산값), cur 현재값, idx 현재 인덱스, src 원본 배열
//[0,1,2,3,4].reduce(function(acc,cur,idx,src){return acc,cur;});
// 0 1 1 []=>1
// 1 2 2 []=>3
// 3 3 3 []=>6
// 6 4 4 []=>10

//초기값 제공하려면 
//[0,1,2,3,4].reduce(function(acc,cur,idx,src){return acc,cur;},10);


//undefined과 null
//둘다 원시 자료형
//undefined 타입은 undefined 값이 유일하고
//null도 null 값이 유일하다. 
//undefined 아무값도 할당받지 않은 상태
//null 의도적으로 비어있는 값을 명시
//null은 NULL,Null과 다르다.
