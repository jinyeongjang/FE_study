const sortableList = document.querySelector(".sortable-list");
const items = sortableList.querySelectorAll(".item");

	// 모든 item(ul>li)에 이벤트 등록
    items.forEach(item => {
        // 드래그 이미지(커서를 따라가는 고스트 이미지)를 브라우저가 제대로 생성하는데 약간의 시간이 걸리기 때문에 setTimeout()를 사용합니다.
        item.addEventListener("dragstart", () => {
          setTimeout(() => item.classList.add("dragging"), 0);
        });
        item.addEventListener("dragend", () => item.classList.remove("dragging"));
      });
    
      const initSortableList = (e) => {
        e.preventDefault();
        const draggingItem = document.querySelector(".dragging");
    
        // dragover는 드래그 중 계속해서 트리거 되기 때문에, initSortableList가 트리거 될 때마다 siblings를 새로 계산합니다.
        // 드래그 앤 드롭 중에 일어난 목록의 정렬 여부에 상관없이 올바른 위치에 삽입할 수 있습니다.
        let siblings = [...sortableList.querySelectorAll(".item:not(.dragging)")];
    
        // sibling.offsetTop + sibling.offsetHeignt / 2 -> 각 형제요소의 중심점을 기준으로 삽입점을 판단합니다.
        // 각 형제 요소의 위치를 확인해서 마우스 커서가 어떤 형제 요소의 중심점 위에 위치한 경우
        // 드래그 하고 있는 요소를 해당 형제 앞에, 아닐 경우 뒤에 삽입합니다.
        let nextSibling = siblings.find(sibling => {
          return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2;
        });
    
        sortableList.insertBefore(draggingItem, nextSibling);
      }
    
      sortableList.addEventListener("dragover", initSortableList);
      sortableList.addEventListener("dragenter", e => e.preventDefault());