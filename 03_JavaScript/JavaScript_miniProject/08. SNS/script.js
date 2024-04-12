/* -----------------------------------------------------------------------------*/
// <요구사항>
// 1. input에 트윗을 입력하고 '게시'버튼을 누르면 트윗이 생성되어야 합니다.
// 2. 생성된 트윗은 게시글, 좋아요 버튼, 좋아요 카운트하는 요소를 포함해야 합니다.
// 3. input에 아무것도 입력되어 있지 않으면 트윗이 생성되지 않아야 합니다. (if문)
// 4. 좋아요 버튼을 클릭하면 좋아요 카운트가 1씩 증가해야 합니다.
// 5. styles.css 파일을 보고 새롭게 생성한 요소에 class를 추가하면 미리 작성해둔 스타일이 적용됩니다.
// 6. 스타일은 마음껏 수정해도 좋습니다.
/* -----------------------------------------------------------------------------*/
// 트윗 게시 버튼 요소
const postTweet = document.querySelector('#postTweet');
postTweet.addEventListener('click', function () {
  // 트윗을 입력할 input 요소
  const tweetInput = document.querySelector('#tweetInput');

  // 트윗이 게시될 컨테이너
  const tweetsContainer = document.querySelector('#tweets_container');

  // 여기에 코드를 입력하세요.

  if (tweetInput.value) {
    const newTweet = document.createElement('div'); // 새로운 트윗 게시 div 요소 생성.
    const tweetText = document.createElement('span'); // 텍스트가 들어갈 새로운 span 요소 생성.

    newTweet.classList.add('tweet'); // style.css 참고하여 class 추가.
    tweetText.classList.add('tweet-text'); // style.css 참고하여 class 추가.

    // 좋아요 버튼 생성.
    const likeButton = document.createElement('button');
    likeButton.classList.add('like-button'); // style.css 참고하여 class 추가.

    likeButton.textContent = '♡';
    const likeCounter = document.createElement('span'); // 좋아요 버튼 눌렀을때 카운트가 올라갈 span 생성.
    let likeCount = 0; // 좋아요 카운트 초기값 0 설정.

    tweetText.textContent = tweetInput.value; // tweetText의 텍스트에 Input 입력된 value 할당.
    likeCount.textContent = likeCount; // 좋아요 카운트의 텍스트에 변수 likeCount(초기값:0) 할당.
    likeCounter.classList.add('like-counter'); // style.css를 참고하여 class 추가.

    newTweet.appendChild(tweetText); // 새롭게 만든 tweetText를 appendChild에 포함.
    newTweet.appendChild(likeButton); // 새롭게 만든 likeButton을 appendChild에 포함.
    newTweet.appendChild(likeCounter); // 새롭게 만든 likeCounter를 appendChild에 포함.

    likeButton.addEventListener('click', function () {
      likeCount++; // 카운트 증가.
      likeCounter.textContent = `${likeCount}`;
    });

    tweetsContainer.appendChild(newTweet); // newTweet을 tweetsContainer의 자식요소로 포함.
    tweetInput.value = '';
  }
});

// 엔터키를 누르면 트윗이 게시될 수 있도록 추가.
tweetInput.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') {
    postTweet.click();
  }
});
