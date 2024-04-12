// 1. table 대신 flexbox를 사용하여 요소들을 정렬해야 합니다.
// 2. 입력받아야 하는 정보와 사용할 요소는 아래와 같습니다.
//     - 이름: `input:text`
//     - 주민번호: `input:text` - `input:password`
//     - 아이디: `input:text`
//     - 비밀번호: `input:password`
//     - 비밀번호 확인: `input:password`
//     - 이메일: `input:text` + `select`
//     - 주소: `input:text`
//     - 성별: `input:radio`
//     - 개인정보 동의: `input:checkbox`
// 3. 모든 항목은 필수 입력 항목이어야 합니다.
// 4. 비밀번호와 비밀번호 확인이 일치하지 않는 경우, 알림창으로 유저에게 알려야 합니다.
// 5. 아이디는 4글자 이상, 8글자 이하로 입력해야 합니다. 그렇지 않을 경우 알림창으로 유저에게 알려야 합니다.
// 6. submit 이벤트가 발생했을 때 새로고침이 일어나지 않아야 합니다.
// 7. 회원가입 버튼을 클릭했을 때 콘솔창에 입력한 모든 정보가 출력되어야 합니다.

// form 요소를 선택
const form = document.querySelector('form');

// 입력한 정보를 객체로 만들어 반환하는 함수를 제공합니다.
// HINT. 이 함수를 이벤트리스너 내부에서 호출하세요.
function getUserInfo(
  name,
  ssn_front,
  ssn_back,
  username,
  password,
  emailId,
  mailbox,
  address,
  gender,
  agree
) {
  const userInfo = {
    name: name,
    ssn: ssn_front + '-' + ssn_back,
    username: username,
    password: password,
    email: emailId + '@' + mailbox,
    address: address,
    gender: gender,
    agree: agree,
  };
  return userInfo;
}

// 폼 제출 이벤트 리스너
form.addEventListener('submit', function (event) {
  // 여기에 코드를 작성하세요.
  // HINT. 사용해야할 모든 요소를 DOM 메서드로 변수에 할당합니다.
  // 아이디(username)의 길이에 따라 알림창을 보여줍니다.(4글자 이상 8글자 이하))
  // 비밀번호(password), 비밀번호 확인(passwordRetype) 일치 여부에 따라 알림창을 보여줍니다.
  // 그렇지 않은 경우 입력한 정보를 객체로 만들어 콘솔에 출력합니다.
});
