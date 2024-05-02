/* 
  TODO1: question.js와 answers.js에서 필요한 모듈을 불러와야 합니다.
  힌트1: answers.js에 있는 모듈의 이름은 answersDetails입니다.
  힌트2: question.js에 있는 모듈의 이름은 questionsAndAnswers입니다.
  힌트3: require
*/
/* 
  TODO2: question.js 파일에 있는 OX 퀴즈에 답안을 작성하고 터미널에 node index.js를 입력하면 채점이 됩니다.
  (문제는 총 10문제이며, 100점 만점입니다.)
*/

// 여기에 코드를 입력하세요.
const answersDetails = require('./answers.js');
const questionsAndAnswers = require('./question.js');

// 아래 코드는 채점용 함수입니다. 절대 수정하지 마세요.
function gradeQuiz(questionsAndAnswers, answersDetails) {
    let score = 0; // 총점을 저장할 변수
    let explanations = []; // 틀린 문제의 설명을 저장할 배열

    // 모든 문제를 순회하며 채점합니다.
    questionsAndAnswers.forEach((item, index) => {
        if (item.userAnswer.toUpperCase() === answersDetails[index].answer) {
            score += 10; // 사용자의 답변이 정답과 일치하면 점수를 10점 추가합니다.
        } else {
            // 틀린 경우, 해당 문제의 설명을 explanations 배열에 추가합니다.
            explanations.push(`문제 ${item.id}: ${answersDetails[index].explain}`);
        }
    });

    // 총점과 문제 수를 출력합니다.
    console.log(`총점: ${score}점, 총 문제 수: ${questionsAndAnswers.length}`);
    if (score === questionsAndAnswers.length * 10) {
        // 모든 문제를 맞춘 경우
        // 모든 문제를 맞췄다면 모든 문제의 설명을 출력합니다.
        console.log('모든 문제를 정답으로 맞추셨습니다! 모든 해설을 확인하세요:');
        answersDetails.forEach((detail) => console.log(detail.explain));
    } else if (explanations.length > 0) {
        // 틀린 문제가 있는 경우, 틀린 문제의 설명만 출력합니다.
        console.log('틀린 문제에 대한 해설:');
        explanations.forEach((explanation) => console.log(explanation));
    }
}

// 퀴즈를 시작하고 결과를 평가합니다.
gradeQuiz(questionsAndAnswers, answersDetails);
