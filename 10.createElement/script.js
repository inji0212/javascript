// element 생성
const li = document.createElement('li');

// class 추가하기
li.className = 'list-group-item';

// id 추가하기
li.id = 'new-item';

// attribute 추가하기 (속성추가하기)
li.setAttribute('name', 'New list item');

// 새로운 text node 생성하고 더하기
li.appendChild(document.createTextNode('New list item '));

// 새로운 link element 생성하기
const link = document.createElement('a');
// classes 추가하기
link.className = 'alarm-item';
// icon html 추가하기
link.innerHTML = '<i class="bi-alarm"></i>';
//hi 넣으면 hi 만 출력된다.

// link를 li에 더하기
li.appendChild(link);

// li 를 ul의 자식으로 더하기
document.querySelector('ul.list-group').appendChild(li);

console.log(li);

