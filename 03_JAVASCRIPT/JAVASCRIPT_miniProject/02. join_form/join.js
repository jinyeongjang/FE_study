// 제출 이벤트를 받는다. (이벤트 핸들링)
const form = document.getElementById("form")

// 익명함수
form.addEventListener("submit", function(event){
    event.preventDefault() // 기존 기능 차단(submit 새로고침)

    let userId = event.target.id.value
    let userPw1 = event.target.pw1.value
    let userPw2 = event.target.pw2.value
    let userName = event.target.name.value
    let userPhone = event.target.phone.value
    let userPosition = event.target.position.value
    let userGender = event.target.gender.value
    let userEmail = event.target.email.value
    let userintro = event.target.intro.value

    console.log(userId, userPw1, userPw2, userName, userPhone, userPosition, userGender, userEmail, userintro)

    // 특정 조건에 따라 경고문 출력.
    // 입력값에 문제가 있는 경우 이를 감지한다.
    if(userId.length < 6){
        alert("아이디가 너무 짧습니다. 6자 이상 입력해주세요.")
        return
    }

    if(userPw1 !== userPw2){
        alert("비밀번호가 일치하지 않습니다.")
        return
    }


// 특정조건을 충족한다면 가입 환영인사.
// userId님 환영합니다.
// 회원 가입 시 입력하신 내역은 다음과 같습니다.
// 아이디: userId
// 이름: userName
// 전화번호: userPhone
// 원하는 직무: userPosition

    document.body.innerHTML = ""

    document.write(`<p>${userId}님 환영합니다</p>`)
    document.write(`<p>회원가입시 입력하신 내역은 다음과 같습니다.</p>`)
    document.write(`<p>아이디: ${userId}</p>`)
    document.write(`<p>이름: ${userName}</p>`)
    document.write(`<p>전화번호: ${userPhone}</p>`)
    document.write(`<p>원하는 직무: ${userPosition}</p>`)


// 제출된 입력 값들을 참조한다.
// 가입 환경을 제공한다.


})


