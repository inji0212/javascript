// Book Constructor 
function Book(title, author) {
    this.title = title;
    this.author = author;
}


// UI Constructor
function UI() { }

// event listeners 를 추가하기 
document.getElementById('book-form').addEventListener('submit', function (e) {
    // form value 가져오기
    const title = document.getElementById('title').value,
        author = document.getElementById('author').value;

    const book = new Book(title, author);

    const ui = new UI();

    if (title === '' || author === '') {
        // Error Alert
        ui.showAlert('모든 필드를 추가해주세요.', 'error');
    } else {
        // 책을 리스트에 추가
        ui.addBookToList(book);
        // 성공을 보여주기
        ui.showAlert('책이 추가되었습니다.', 'success');
        // 필드 초기화해주기
        ui.clearFields();
    }
    e.preventDefault();

})

document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI();

    ui.deleteBook(e.target);

    ui.showAlert('책이 지워졌습니다.', 'success');

    e.preventDefault();

})



UI.prototype.addBookToList = function (book) {
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#" class="delete">X</a></td>
    `
    list.appendChild(row);
}

UI.prototype.clearFields = function () {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
}

UI.prototype.showAlert = function (message, className) {
    const div = document.createElement('div');

    div.className = `alert ${className}`;

    div.appendChild(document.createTextNode(message));

    const container = document.querySelector('.container');

    const form = document.querySelector('#book-form');

    container.insertBefore(div, form);

    setTimeout(() => {
        document.querySelector('.alert').remove();
    }, 3000);
}

UI.prototype.deleteBook = function(target) {
    if(target.className === 'delete') {
        target.parentElement.parentElement.remove();
    }
}