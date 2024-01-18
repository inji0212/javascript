
const list = document.getElementById("list");
const createBtn = document.getElementById("create-btn");

let todos = [];

createBtn.addEventListener('click', createNewTodo);
 // addEventListener  => 어떠한 이벤트가 발생했을 때 함수를 등록.
function createNewTodo() {
	// 새로운 아이템 객체 생성
	const item = {
		id: new Date().getTime(), //1690604133472
		text: "",
		complete: false
	}

	// 배열에 처음에 새로운 아이템을 추가
	todos.unshift(item);

	// 요소 생성하기
	const { itemEl, inputEl,editBtnEl,removeBtnEl } = createTodoElement(item);

	// 리스트 요소 안에 방금 생성한 아이템 요소 추가(가장 첫번째 요소로 추가)
	list.prepend(itemEl);

	// disabled 속성 제거
	inputEl.removeAttribute("disabled");
	// input 요소에 focus 
	// 바로 타이핑 가능할 수 있게
	inputEl.focus();

	saveToLocalStorage();
}

/* <div class="item">
	<input type="checkbox" />
	<input 
		type="text" 
		value="Todo content goes here" 
		disabled />
	<div class="actions">
		<button class="material-icons">edit</button>
		<button class="material-icons remove-btn">remove_circle</button>
	</div>
</div> */
function createTodoElement(item) {
	//html에서 div처럼 선언한 것들 만들기
	const itemEl = document.createElement("div");
	itemEl.classList.add("item");

	const checkbox = document.createElement("input");
	checkbox.type = "checkbox";
	checkbox.checked = item.complete;
	//이게 있어야 체크를 유지해준다

	//아이템은 체크박스가 있는데
	//체크박스가 체크될때 를 위에서 선언했고 이를 실행했을떄
	if (item.complete) {
		itemEl.classList.add("complete");
	}

	//글을 적을 텍스트 선언
	const inputEl = document.createElement("input");
	inputEl.type = "text";
	inputEl.value = item.text;
	inputEl.setAttribute("disabled", "");
	//포커싱이되어야 입력이 될 수 있어서
	//당장은 불가선언


	const actionsEl = document.createElement("div");
	actionsEl.classList.add("actions");

	//버튼 선언하고
	//아이콘 이미지를 가져오고(링크를 통해)
	//이름을 edit이라 선언
	const editBtnEl = document.createElement("button");
	editBtnEl.classList.add("material-icons");
	editBtnEl.innerText = "edit";

	const removeBtnEl = document.createElement("button");
	removeBtnEl.classList.add("material-icons", "remove-btn");
	removeBtnEl.innerText = "remove_circle";

	 
	//선언만 하고 클래스에 넣기 전이라서
	//div에 넣어주기
	actionsEl.append(editBtnEl); 
	actionsEl.append(removeBtnEl);

	itemEl.append(checkbox);
	itemEl.append(inputEl);
	itemEl.append(actionsEl);

	// EVENTS
	//체크박스 체크할때
	checkbox.addEventListener("change", () => {
		item.complete = checkbox.checked;

		if (item.complete) {
			itemEl.classList.add("complete");
		} else {
			itemEl.classList.remove("complete");
		}

		saveToLocalStorage();
	});
	//텍스트 입력할떄
	inputEl.addEventListener("input", () => {
		item.text = inputEl.value;
	});
	//다른 곳 누르먼 입력 못하게
	inputEl.addEventListener("blur", () => {
		inputEl.setAttribute("disabled", "");

		saveToLocalStorage();
		//블러한것도 남아야한다.

	});
	//편집버튼을 누를떄
	editBtnEl.addEventListener("click", () => {
		inputEl.removeAttribute("disabled");
		inputEl.focus();
	});

	//제거 버튼 누를 때 데이터와 요소 전부 지워줘야한다.
	removeBtnEl.addEventListener("click", () => {
		todos = todos.filter(t => t.id != item.id);
		//배열이라서 filter사용 가능
		//같은아이디의 데이터를 삭제
		itemEl.remove();
		//요소삭제
		saveToLocalStorage();
		//지운것을 기억

	});

	//현재 function createTodoElement(item)안
	//결과값으로 각버튼들 내기

	return { itemEl, inputEl, editBtnEl, removeBtnEl }
}

//아이템 요소들을 보여주는것
function displayTodos() {
	loadFromLocalStorage();

	for (let i = 0; i < todos.length; i++) {
		const item = todos[i];

		const { itemEl } = createTodoElement(item);

		list.append(itemEl);
	}
}

displayTodos();
//새로고침해도 데이터및 요소들을 로컬에 저장히기위해

function saveToLocalStorage() {
	const data = JSON.stringify(todos);
	//배열로 된것을 스트링으로 
	localStorage.setItem("my_todos", data);
}

//데이터 가져오기
function loadFromLocalStorage() {
	const data = localStorage.getItem("my_todos");

	if (data) {
		todos = JSON.parse(data);
		//스트링을 다시 배열로 변환
	}
}

