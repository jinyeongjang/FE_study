// 0. 버튼을 클릭했을 때 실행되는 이벤트 함수입니다.
document.getElementById('add-btn').addEventListener('click', function () {
  addTodo();
});

// 할일을 작성할 때 엔터키를 눌러 추가되도록 이벤트 리스너 추가
document
  .getElementById('todo-input')
  .addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      addTodo();
    }
  });

// 할일을 추가하는 함수
function addTodo() {
  // 1. index.html에 있는 input 요소에 입력된 값(value)과 button 요소를 변수에 할당합니다.
  const todoInput = document.getElementById('todo-input');
  const newTodoText = todoInput.value.trim();

  // 2. 새로운 li요소를 만들고 input 요소에 입력된 값을 textContent로 갖도록 합니다.
  if (newTodoText !== '') {
    const li = document.createElement('li');
    li.textContent = newTodoText;

    // 3. li 요소는 클릭하면 해당 li 요소가 지워지는 delete 버튼을 가지고 있어야 합니다. (버튼이 실제로 동작하지 않아도 괜찮습니다.)
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '[삭제]';
    
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = function () {
      this.parentElement.remove();

      // 4. 입력창은 초기화되어야 합니다.
      updateLocalStorage(); // 로컬 저장소 업데이트
    };
    li.appendChild(deleteBtn);
    

    // 심화2) 할 일 항목에 완료 표시를 할 수 있는 체크박스를 추가해 보세요.
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'complete-checkbox';
    checkbox.onclick = function () {
      if (this.checked) {
        li.style.textDecoration = 'line-through';
      } else {
        li.style.textDecoration = 'none';
      }
      updateLocalStorage();
    };
    li.appendChild(checkbox);

    document.getElementById('todo-list').appendChild(li);
    todoInput.value = '';

    updateLocalStorage(); // 로컬 저장소 업데이트
    // 5. 만약 입력창에 아무것도 입력하지 않은 경우 alert로 유저에게 입력을 요청해야 합니다.
  } else {
    alert('할일이 비어있습니다. 할일을 추가한 후 추가버튼을 눌러주세요.');
  }
}

// 입력창 초기화, 입력 여부 검사
function updateLocalStorage() {
  const todoList = document.getElementById('todo-list').innerHTML;
  localStorage.setItem('todoList', todoList);
}

// 페이지 로딩 시 로컬 저장소에서 일정 불러오기
onload = function () {
  // 드래그앤 드롭 정렬 기능 구현.

  // VanillaJS 드래그앤드롭 구현.

      updateLocalStorage();
    }
  // todolist 값 저장을 위한 초기화.
  const savedTodoList = localStorage.getItem('todoList');
  if (savedTodoList) {
    document.getElementById('todo-list').innerHTML = savedTodoList;
  }

  // 저장된 삭제 버튼 이벤트 리스너.
  const deleteButtons = document.getElementsByClassName('delete-btn');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].onclick = function () {
      this.parentElement.remove();
      updateLocalStorage(); // 로컬 저장소 업데이트
    };
  }

  // 저장된 완료 체크박스 이벤트 리스너.
  const completeCheckboxes =
    document.getElementsByClassName('complete-checkbox');
  for (let i = 0; i < completeCheckboxes.length; i++) {
    completeCheckboxes[i].onclick = function () {
      const parentLi = this.parentElement;
      if (this.checked) {
        parentLi.style.textDecoration = 'line-through';
      } else {
        parentLi.style.textDecoration = 'none';
      }
      updateLocalStorage();
    };
  }

  