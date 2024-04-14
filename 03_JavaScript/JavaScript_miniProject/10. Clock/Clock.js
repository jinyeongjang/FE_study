/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. 실시간으로 시간이 업데이트되는 시계를 생성해야 합니다.
// 2. 1초마다 현재 시각으로 업데이트될 수 있도록 해야 합니다. (setInterval)
// 3. 형식은 ' 🕖현재 시각은 00시 00분 00초 입니다.' 로 작성해주세요.
// 4. stop 버튼을 클릭하면, 시계가 정지해야 합니다. (clearInterval)
// 5. 정각이 되기까지 몇 분이 남았는지 표시하도록 해야 합니다.
// 6. 형식은 '정각까지 00분 남았습니다!'로 작성해주세요.
// 7. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/

let timer;
timer = setInterval(function () {
  // 현재 시각을 표시할 p요소
  const p = document.querySelector('#now_time');
  // 정각 되기까지 남은 분을 나타내는 div 요소
  const div = document.querySelector('#sharp');
  // 1. 빌트인 객체를 사용하여 오늘 날짜를 받아온 후 변수에 할당해 주세요.
  const nowTime = new Date();
  // 2. 현재 시각을 표현하기 위한 값을 알맞는 메소드를 사용하여 받아온 후 변수에 할당해 주세요.
  let hour = nowTime.getHours();
  let minute = nowTime.getMinutes();
  let second = nowTime.getSeconds();
  // 정각이 되기까지의 남은 분

  let time = 60 - minute;
  // 4. 모든 값이 준비되었다면, 알맞는 요소에 text 값을 추가해주세요.

  p.textContent = `현재 시각은 ${hour}시 ${minute}분 ${second} 초 입니다.`;
  div.textContent = `정각까지 ${time}분 남았습니다!`;
}, 1000); // 1초마다 함수가 실행되도록 설정

// 5. 버튼에 click 이벤트가 발생했을 경우, 시계가 정지하도록 이벤트리스너를 등록해주세요.
const button = document.getElementById('stop');
button.addEventListener('click', function () {
  clearInterval(timer);
});
