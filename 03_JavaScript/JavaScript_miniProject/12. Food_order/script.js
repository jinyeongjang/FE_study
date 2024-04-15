/*
기본 요구사항
- 
1. ‘햄버거 주문서’ 를 클릭하면 `classList.toggle()` 메서드를 통해 ‘추가’, ‘제거’ 버튼이 토글 됩니다.
2. 햄버거 아이템 리스트 배열을 생성해줍니다. 
3. 추가 버튼을 클릭하면 배열 리스트 1개가 추가 됩니다.
4. 이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
5. 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
6. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
7. 스타일은 마음껏 수정해도 좋습니다.
*/


// 코드 이상이 없습니다.
// 아이템 리스트 배열
// TODO:햄버거 아이템 리스트 배열을 생성해줍니다. 
let items = [];

// 아이템 추가 버튼 클릭 시 호출되는 함수
function addItem() {
//   TODO:추가 버튼을 클릭하면 v배열 리스트 1개가 추가 됩니다.
//   이때 배열 리스트의 값은 추가 버튼 누를 때 마다 숫자가 1개씩 증가 됩니다. 
let newItem = `🍔 ${items.length + 1}`;; // 햄버거 아이템 추가.
items.push(newItem); // 새로운 햄버거 아이템을 배열에 추가하기.
renderItems(); // 아이템 렌더링
  }
  // 아이템 제거 버튼 클릭 시 호출되는 함수
// TODO: 제거 버튼을 클릭하면 배열 리스트의 값 중 마지막 값 1개가 제거됩니다.
    function removeItem() { // 아이템 제거버튼 클릭시 호출되는 함수 정의.
    if (items.length > 0) { // 배열 마지막의 햄버거 아이템 제거.
        items.pop();
        renderItems(); // 아이템 렌더링
    }
  }

  // 아이템 리스트 렌더링 함수
  function renderItems() {
// TODO: 아이템 리스트 초기화하는 함수를 만들어주세요.
  const itemList = document.getElementById('itemList');
  itemList.innerHTML = ''; // 리스트 초기화.

// TODO: 배열의 각 아이템을 순회하며 리스트에 추가하는 함수를 만들어주세요.
items.forEach((item) => {
  const li = document.createElement('li');
  li.textContent = item;
  itemList.appendChild(li);
});
}

  
  //title '햄버거 주문서' 클릭 시 classList.toggle()메서드 실행
  const title = document.getElementById('title');
  title.addEventListener('click', function () {
    addButton.classList.toggle('show');
    removeButton.classList.toggle('show');
  });

// TODO: style.css 파일의 .show class를 이용하여 토글 기능을 만들어주세요!

  // 아이템 추가 및 제거 버튼 이벤트 핸들러
addButton.addEventListener('click', addItem);
removeButton.addEventListener('click', removeItem);