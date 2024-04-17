/**
 * 로또 번호 생성기: 사용자 인터페이스를 통해 로또 당첨 번호 및 로또 번호를 자동으로 생성하고 표시합니다.
 *
 * 기본 요구사항:
 * 1. 로또 당첨 번호 생성 기능:
 *    - '이번 주 당첨 번호 생성하기' 버튼을 클릭하면 1부터 45까지의 숫자 중 랜덤하게 6개를 선택하여 오름차순으로 표시합니다.
 *    - 중복된 숫자가 없어야 하며, 이전에 생성된 번호는 새 번호 생성 시 화면에서 제거됩니다.
 * 2. 로또 번호 자동 선택 기능:
 *    - '로또 번호 자동 생성' 버튼을 클릭하면 5세트의 로또 번호(각 세트는 6개의 숫자)를 랜덤하게 생성하여 표시합니다.
 *    - 각 번호 세트는 중복 없이 오름차순으로 정렬되어야 하며, 당첨 번호 생성 후에만 사용 가능해야 합니다.
 * 3. 매칭 표시 기능: 자동 생성된 번호 중 당첨 번호와 일치하는 숫자는 특별히 강조하여 표시합니다.
 *
 * 사용 예:
 * - 당첨 번호 생성하기 버튼 클릭 -> 당첨 번호가 화면에 표시됩니다.
 * - 로또 번호 자동 생성 버튼 클릭 -> 5세트의 로또 번호가 화면에 표시됩니다. 당첨 번호와 일치하는 숫자는 강조됩니다.
 */

// '이번 주 당첨 번호 생성하기' 버튼에 대한 참조를 가져옵니다.
const generateWinningNumbers = document.getElementById(
    'generateWinningNumbers'
  );
  // '로또 번호 자동 생성' 버튼에 대한 참조를 가져옵니다.
  const generateLottoNumbers = document.getElementById('generateLottoNumbers');
  // 당첨 번호를 보여줄 HTML 요소에 대한 참조를 가져옵니다.
  const winningNumContainer = document.getElementById('winningNumbers');
  // 자동 생성된 로또 번호를 보여줄 HTML 요소에 대한 참조를 가져옵니다.
  const lottoNumContainer = document.getElementById('lottoNumbers');
  
      /* TODO: 
      1. 1부터 45까지의 숫자 중에서 무작위로 6개의 숫자를 선택하여 배열로 반환하는 함수입니다.
      2. 중복된 숫자가 없어야 합니다.
      3. 배열은 오름차순으로 정렬하여 return합니다. 
    */

  function generateNumbers() {
    let numbers = []; // numbers 배열 선언하여 무작위 선택된 숫자를 저장.
    while (numbers.length < 6) {
      let number = Math.floor(Math.random() * 45) + 1; // 1에서 45사이의 랜덤숫자 생성.
      if (!numbers.includes(number)) { // 생성된 숫자가 이미 배열에 존재하지 않을 경우에.
        numbers.push(number); // 배열에 숫자를 추가.
      }
    }
    return numbers.sort((a, b) => a - b); // 배열을 오름차순으로 정렬하여 반환.
    }

        /* TODO:
      1. 숫자 배열을 받아서 HTML 요소로 변환하여 반환하는 함수입니다.
      2. 각 숫자는 <span> 요소로 감싸지며, 당첨 번호와 일치하는 경우 특별한 스타일이 적용됩니다.
      3. 매개변수에 대한 설명
        - numbers - 표시할 숫자의 배열
        - winningNumbers - 당첨 번호 배열 (선택 사항)
    */

        function displayNumbers(numbers, winningNumbers = []) {
          const numSetElement = document.createElement('div'); // 숫자를 담을 새로운 div 요소 생성.
          numSetElement.classList.add('number-set'); // 스타일을 위한 클래스 추가.
      
          numbers.forEach((number) => {
            const numElement = document.createElement('span'); // 각 숫자를 담을 span 요소 생성.
            numElement.classList.add('number'); // 스타일을 위한 클래스 추가.
      
            if (winningNumbers.includes(number)) { // 현재 숫자가 당첨번호중 하나와 일치할 경우.
              numElement.classList.add('match'); // 일치하는 숫자 표시 클래스 추가하기.
            }
            numElement.textContent = number; // span 요소에 숫자 텍스트 설정.
            numSetElement.appendChild(numElement); // 숫자를 담은 span을 div에 추가하기.
          });
      
          return numSetElement; // 완성된 div 요소 반환하기.        
  }
  
  // 초기 당첨 번호 배열
  let winningNumbers = [];
  
  generateWinningNumbers.addEventListener('click', () => {
    winningNumbers = generateNumbers();
    winningNumContainer.innerHTML = ''; // 이전 당첨번호를 화면에서 제거하기.
    winningNumContainer.appendChild(displayNumbers(winningNumbers)); // 새 당첨 번호 표시.
    /* TODO:
      - '이번 주 당첨 번호 생성하기' 버튼 클릭 시 실행되는 이벤트 핸들러입니다.
      - generateNumbers 함수를 호출하여 당첨 번호를 생성하고, 이를 화면에 표시합니다.
      - 이전에 표시된 당첨 번호가 있다면, 화면에서 제거한 후 새로운 당첨 번호를 표시합니다.
    */
  });
  

  // 이벤트 리스너 - 로또 번호 자동 생성.
  generateLottoNumbers.addEventListener('click', () => {
    if (winningNumbers.length !== 0) {
      lottoNumContainer.innerHTML = ''; // 이전에 생성된 로또번호를 화면에서 제거.
      for (let i = 0; i < 5; i++) {
      const lottoNumbers = generateNumbers(); // 로또번호 생성.
      lottoNumContainer.appendChild(
        displayNumbers(lottoNumbers, winningNumbers) // 생성된 로또번호 화면에 표시.
      );
    }
  } else {
    alert('이번 주 당첨 번호 생성하기 버튼을 눌러주세요.');
  } 
    /* TODO:
      - '로또 번호 자동 생성' 버튼 클릭 시 실행되는 이벤트 핸들러입니다.
      - 당첨 번호가 먼저 생성되어 있는지 확인한 후, 5세트의 로또 번호를 생성하고 화면에 표시합니다.
      - 당첨 번호가 아직 생성되지 않았다면, 사용자에게 경고 메시지를 표시합니다.
      - 이전에 생성된 로또 번호가 있다면, 화면에서 제거한 후 새로운 로또 번호를 표시합니다.
    */
  });
  