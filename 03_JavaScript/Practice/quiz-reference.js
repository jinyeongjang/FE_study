// 1. 출석 체크하기
const 출석부 = ['철수', '영희', '진수', '미애', '수지', '은우', '고은', '도현', '지민', '지수']
const 교실 = 출석부.filter(()=> Math.random() < 0.7) 
console.log(교실)

let 출석인원 = 0

for (let 번호 = 1; 번호 <= 10 ; 번호++ ) {
    console.log(`교수님: ${번호}번 ${출석부[번호 - 1]} 학생 왔나요?`)

    if ( 교실.includes( 출석부[번호 - 1] )) {
        console.log(`${출석부[번호 - 1]}: 네 왔습니다!`)
        출석인원 += 1
    } else {
        console.log(`교수님: 안 왔나보네...`)
    }
}

console.log(`교수님: 오늘은 ${출석인원}명 왔네~`)


// 2. 사과 갯수 세보기
let 사과박스 = new Array(Math.floor(Math.random()*100)).fill('🍎')
console.log(사과박스)
const 정답 = 사과박스.length

let 개수 = 0

while ( 사과박스.length !== 0 ) {
    사과박스.pop()
    개수 += 1
}

console.log('사과는 ' + 개수 + '개 있었어!')
console.log(정답 === 개수 ? '맞게 잘 세었네!' : '잘못 셌네...')



// 3. 1부터 n까지 더하기
let sum = 0
let n = 3

for (let i = 1; i <= n; i++) {
    sum += i
}

console.log(sum)


// 4. 모음 개수 세기
const 모음 = ['a','i','u','e','o']
let 단어 = 'oz coding school'  //5개

let 모음개수 = 0

for (let i = 0; i < 단어.length; i++) {
    if ( 모음.includes(단어[i]) ) {
        모음개수++
    }
}

console.log(모음개수)


// 5. 구구단 찍기
for (let i = 2; i <= 9; i++) {
    for (let j = 2; j <= 9; j++) {
        console.log(`${i} X ${j} = ${i*j}`)
    }
}


// 6. 배열 & 객체 다루기
const 회원목록 = [
    {회원번호:0, 성별:'남', 나이:16},
    {회원번호:1, 성별:'여', 나이:18},
    {회원번호:2, 성별:'남', 나이:21},
    {회원번호:3, 성별:'여', 나이:25},
    {회원번호:4, 성별:'여', 나이:29},
    {회원번호:5, 성별:'여', 나이:30},
    {회원번호:6, 성별:'남', 나이:31},
    {회원번호:7, 성별:'여', 나이:37},
    {회원번호:8, 성별:'여', 나이:39},
    {회원번호:9, 성별:'남', 나이:41},
    {회원번호:10, 성별:'여', 나이:45},
    {회원번호:11, 성별:'남', 나이:48},
    {회원번호:12, 성별:'남', 나이:51},
    {회원번호:12, 성별:'남', 나이:61},
    {회원번호:12, 성별:'남', 나이:71},
]

// 6-1. 남성 여성 회원 수 세기

let 남성 = 0
let 여성 = 0

for (let i = 0; i < 회원목록.length; i++) {
    if (회원목록[i].성별 === '여') {
        여성 += 1
    } else {
        남성 += 1
    }
}

console.log('남성: ' + 남성)
console.log('여성: ' + 여성)



// 6-2. 평균 나이 구하기
let 나이합 = 0

for (let i = 0; i < 회원목록.length; i++) {
    나이합 += 회원목록[i].나이
    console.log(나이합)
}

console.log((나이합 / 회원목록.length).toFixed(1))


// 6-3. 가장 어린 나이, 가장 많은 나이 구하기
let 어린나이 = 100
let 많은나이 = 0

for (let i = 0; i < 회원목록.length; i++) {
    if (회원목록[i].나이 < 어린나이) {
        어린나이 = 회원목록[i].나이
    }
    if (회원목록[i].나이 > 많은나이) {
        많은나이 = 회원목록[i].나이
    }
}

console.log('가장 어린 회원은 ' + 어린나이 + '살 입니다.')
console.log('가장 나이가 많은 회원은 ' + 많은나이 + '살 입니다.')



// 6-4. 나이대 별로 회원 수 세기
    // 객체로 정리하기
const result = {}

for (let i = 0; i < 회원목록.length; i++) {
    const 나이대 = Math.floor(회원목록[i].나이 / 10) * 10 +'대'

    if (나이대 in result) {
        result[나이대] += 1
    } else {
        result[나이대] = 1
    }
}

console.log(result)

// 객체의 키, 값 쌍을 다루는 방법
// 배열의 각 요소에 반복문으로 접근하는 방법


// 7. 사과 박스 곰팡이 검사하기
const 곰팡이 = '🦠'
    //곰팡이가 생길 수도 있고 안 생길 수도 있는 코드
사과박스 = new Array(Math.floor(Math.random()*100)).fill('🍎')
Math.random() < 0.5 ? 사과박스[ Math.floor(Math.random() * 사과박스.length) ] = 곰팡이 : ''

console.log(사과박스)

let is곰팡이 = false

while (is곰팡이 === false && 사과박스.length !== 0) {
    if (사과박스.pop() === '🦠') {
        is곰팡이 = true
    }
}

console.log(is곰팡이 === false ? '곰팡이가 없네!' : '으악! 곰팡이다!!')




// 8. 몬스터 잡기
    // 명중률이 있음
    // 몬스터가 나도 때림
const player = {
    체력: 100,
    공격력: 12,
    명중률: 80,
}

const monster = {
    체력: 60,
    공격력: 22,
    명중률: 70,
}

while (player.체력 > 0 && monster.체력 > 0) {
    console.log('플레이어가 공격합니다!')
    if ( Math.random() * 100 < player.명중률 ) {
        console.log('공격이 명중했습니다!')
        monster.체력 -= player.공격력
        if (monster.체력 < 0) {
            monster.체력 = 0
        }
        console.log('몬스터 체력: ' + monster.체력)
    } else {
        console.log('공격이 실패했습니다!')
    }

    if (monster.체력 > 0) {
        console.log('몬스터가 공격합니다!')
        if ( Math.random() * 100 < monster.명중률 ) {
            console.log('공격이 명중했습니다!')
            player.체력 -= monster.공격력
            if (player.체력 < 0) {
                player.체력 = 0
            }
            console.log('플레이어 체력: ' + player.체력)
        } else {
            console.log('공격이 실패했습니다!')
        }
    }
}

console.log(player.체력 > 0 ? '플레이어의 승리입니다!' : '플레이어가 사망했습니다!')