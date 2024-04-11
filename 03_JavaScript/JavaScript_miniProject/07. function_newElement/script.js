// TODO: 조건에 맞는 div 요소를 생성하는 함수 createDiv를 작성하고, createDiv를 str의 길이만큼 호출하세요.
let str = '0123456';
const body = document.querySelector('body');

function createDiv(content, backgroundColor) {
  const div = document.createElement('div');
  // 조건1. div 요소의 textContent와 배경색은 외부에서 입력받은 content, backgroundColor가 되어야 합니다.
  // 조건2. div 요소의 padding 값은 상하 10px, 좌우 20px이 되어야 합니다.
  // 조건3. div 요소의 margin은 상 5px, 우 2px, 하 3px, 좌 8px가 되어야 합니다.
  // 조건4. div 요소의 글자색은 'white'가 되어야 합니다.
  // 여기에 코드를 작성하세요.

  div.style.backgroundColor = backgroundColor;
  div.style.color = 'white';
  div.style.padding = '10px 20px';
  div.style.margin = '5px 2px 3px 8px';
  div.textContent = content;
  document.body.appendChild(div);
}
// TODO: for 반복문을 사용하여 createDiv를 호출하세요.
// 원하는 매개변수를 넣어보세요.

  // 여기에 코드를 작성하세요.
  for (let i = 0; i < str.length; i++) {
    createDiv('안녕하세요', 'purple');
}
