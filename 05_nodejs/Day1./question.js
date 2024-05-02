/* 
  TODO2: questionsAndAnswers 모듈의 각 요소에 있는 userAnswer 프로퍼티에 올바른 답을 입력하세요. (맞으면 'O', 틀리면 'X')
*/
const questionsAndAnswers = [
    {
        id: 1,
        question: 'Node.js는 JavaScript의 런타임 환경이다. (O/X)',
        userAnswer: 'o', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 2,
        question: '현재 사용 중인 Stackblitz 환경의 Node.js 버전은 v18.18이다. (O/X)',
        userAnswer: 'o', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 3,
        question: 'Node.js는 Microsoft사가 만들었다. (O/X)',
        userAnswer: 'x', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 4,
        question: 'JavaScript는 브라우저에서만 동작이 가능한 프로그래밍 언어다. (O/X)',
        userAnswer: '', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 5,
        question: '터미널에 node를 입력하면 REPL 모드가 실행된다. (O/X)',
        userAnswer: '', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 6,
        question: '다른 모듈을 불러오고 싶으면 import 키워드를 사용한다. (O/X)',
        userAnswer: 'o', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 7,
        question: '모듈을 다른 파일에서 불러오려면 export가 되어 있어야 한다. (O/X)',
        userAnswer: 'o', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 8,
        question: 'require 객체는 브라우저에서도 사용 가능하다. (O/X)',
        userAnswer: 'o', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 9,
        question: 'console 객체는 Node.js에서만 사용 가능하다. (O/X)',
        userAnswer: 'x', // 대소문자를 구분하지 않습니다.
    },
    {
        id: 10,
        question: 'Node.js는 프론트엔드 개발자는 학습할 필요가 없다. (O/X)',
        userAnswer: 'x', // 대소문자를 구분하지 않습니다.
    },
];

module.exports = questionsAndAnswers;
