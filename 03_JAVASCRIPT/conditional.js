// 여러 퀴즈 풀어서 몇 개 맞췄는지 알려주기

const answer1= 'HTML'
const answer2= 'CSS'
const answer3= 'JS'


const userAnswer1 = prompt('웹 페이지의 구조를 담당하는 언어는?')
const userAnswer2 = prompt('웹 페이지의 디자인을 담당하는 언어는?')
const userAnswer3 = prompt('웹 페이지의 기능을 담당하는 언어는?')

let count = 0

switch (true){
    case answer1 === userAnswer1 :
        count = count + 1
    case answer2 === userAnswer2 :
        count += 1
    case answer3 === userAnswer3 :
        count++
}

alert(count+'개 맞췄어요!')
