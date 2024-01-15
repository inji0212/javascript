const listParent = document.querySelector('ul');
const list = document.querySelectorAll('li');
//ul,li 가져옴

//요소 지우기

listParent.removeChild(list[1]);
// 첫번째 제거 
//부모노드. removeChild(요소)


//요소 교체하기

const oldElement = document.getElementById('A');
//id A를

const newElement = document.createElement('span');
//새로 생성(바꿔주는 )

newElement.textContent = "Hi";
//hi로 교체

oldElement.parentNode.replaceChild(newElement, oldElement);
// lis에서 span으로 변경