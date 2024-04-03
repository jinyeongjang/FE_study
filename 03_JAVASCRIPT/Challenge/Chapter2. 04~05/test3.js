// 1부터 10까지의 모든 숫자의 합을 구하는 코드를 작성하세요.
// while 반복문으로 구현해야 합니다.

let num = 1;
let result = 0;
while (num <= 10) {
  result = result + num;
  num ++;
};
console.log("while 반복문을 사용하여 1부터 10까지의 모든 숫자의 합을 구하는 정답은 : " + result+ " 입니다.");
