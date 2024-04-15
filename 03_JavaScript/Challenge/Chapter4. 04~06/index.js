// run `node index.js` in the terminal

/*
기본 요구사항
1. Math.abs, Math.floor, Math.pow, Math.random, 
   Math.sign, Math.sqrt 메서드를 사용하여 간단한 수학적 작업을 실행할 수 있어야 합니다. 
*/

// 1. abs
function absoluteDifference(a, b) {

    /*
      주어진 두 숫자(a,b)의 차이의 절댓값을 반환하는 함수 absoluteDifference를 정의하세요.
    */
      return Math.abs(a - b)
  }
  
  // 2. floor
  function custom_floor(x) {
    /*
      주어진 숫자(x)를 내림하여 반환하는 함수 custom_floor를 정의하세요.
    */
   return Math.floor(x);
  }
  
  // 3. pow
  function custom_pow(base, exponent) {
    /*
     주어진 밑(base)과 지수(exponent)에 따라 거듭제곱을 계산하여 반환하는 함수 
     custom_pow를 정의하세요.
    */
   return Math.pow(base, exponent);
  }
  
  // 4. random
  function custom_random() {
    /*
      0과 1 사이에서 랜덤한 숫자를 반환하는 함수 custom_random를 정의하세요.
    */
   return Math.random();
  }
  
  // 5. sign
  function custom_sign(x) {
    /*
      주어진 숫자(x)의 부호를 반환하는 함수 custom_sign를 정의하세요.
    */
   return Math.sign(x);
  }
  
  // 6. sqrt
  function custom_sqrt(x) {
    /*
     주어진 숫자(x)의  제곱근을 반환하는 함수 custom_sqrt를 정의하세요.
    */
   return Math.sqrt(x);
  }
  
  /*
  아래에 있는 코드는 위 함수를 테스트하는 코드입니다. 절대 테스트 코드를 수정하지 말아주세요! 
  임의로 변경할 시 테스트 코드가 작동하지 않을 수 있다는 점 유의하여 주시기 바랍니다. 
  */
  //테스트 코드
  // 1. abs
  var num1 = 10;
  var num2 = 7;
  var difference = absoluteDifference(num1, num2);
  console.log(`1. ${num1}와 ${num2}의 차이의 절댓값은 ${difference} 입니다.`);
  // 2. floor
  var num3 = 5.7;
  var floored_num = custom_floor(num3);
  console.log(`2. ${num3}의 내림은 ${floored_num} 입니다.`);
  // 3. pow
  var base = 2;
  var exponent = 3;
  var result = custom_pow(base, exponent);
  console.log(`3. ${base}의 ${exponent}승은 ${result} 입니다.`);
  // 4. random
  console.log('4. 0과 1 사이의 난수는' + custom_random() + ' 입니다.');
  // 5. sign
  var num4 = -5;
  var sign = custom_sign(num4);
  console.log(`5. ${num4}의 부호는 ${sign} 입니다.`);
  // 6. sqrt
  var num5 = 25;
  var sqrt_num = custom_sqrt(num5);
  console.log(`6. ${num5}의 제곱근은 ${sqrt_num} 입니다.`);
  