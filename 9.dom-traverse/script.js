let val;
const list = document.querySelector('ul.list-group');
const listItem = document.querySelector('li.list-group-item:first-child');

val = listItem;
val = list;

// child nodes 반환
val = list.childNodes;  // NodeList를 반환(line break도 포함됨-text로 나타남)
// val = list.childNodes[0];
// val = list.childNodes[0].nodeName;
// val = list.childNodes[3].nodeType;

// // nodeType
// // 1 - Element
// // 2 - Attribute (deprecated)
// // 3 - Text node
// // 8 - Comment   <!-- Comment Node -->
// // 9 - Document itself
// // 10 - Doctype

// // children element nodes 반환
// val = list.children; // HTML Collection을 반환(line break 포함X)
// val = list.children[1];
// list.children[1].textContent = 'Hi';

// // First child
// val = list.firstChild;
// list.firstChild === list.childNode[0];
// val = list.firstElementChild; //text node를 포함 X

// // Last child
// val = list.lastChild;
// list.lastChild === list.childNodes[list.childNodes.length-1];
// val = list.lastElementChild;

// // child 요소 count
// val = list.childElementCount;//5

// // parent node 반환
// val = listItem.parentNode;
// val = listItem.parentElement;
// val = listItem.parentElement.parentElement;

// // next sibling 반환
// val = listItem.nextSibling;
// val = listItem.nextElementSibling; 2
// val = listItem.nextElementSibling.nextElementSibling; 3
// val = listItem.nextElementSibling.nextElementSibling.previousElementSibling; 2

// // previous sibling 반환
// val = listItem.previousSibling; text
// val = listItem.previousElementSibling; null
// console.log(val);


// // DOM Collection 
// 사용가능한 반복문
// for (let node of list.childNodes) {
//     console.log(node); // 컬렉션 내의 모든 노드를 보여줍니다.
// }

// console.log(list.childNodes.filter) // undefined (filter 메서드가 없습니다.) 배열이 아니라서


console.log(Array.from(list.childNodes).filter) // 유사배열로 사용가능해진다

