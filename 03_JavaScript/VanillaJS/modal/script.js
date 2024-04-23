const openButton = document.getElementById("open"); //id가 open인 요소 반환 - Open Modal 반환
 const modal = document.querySelector(".modal");
 const overlay = modal.querySelector(".modal__overlay");
 const closeBtn = modal.querySelector("button1"); //선택자의 첫번째 요소 반환
 const openModal = () => {
            modal.classList.remove("hidden"); //숨김 제거
        }
 const closeModal = () => {
            modal.classList.add("hidden"); //숨김 실행
        }
 overlay.addEventListener("click", closeModal);
 closeBtn.addEventListener("click", closeModal);
 openButton.addEventListener("click", openModal);