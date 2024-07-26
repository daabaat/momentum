function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("time").innerText = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes}`;

  // 인사말 업데이트
  const helloElement = document.getElementById("hello");
  if (hours >= 6 && hours < 12) {
    helloElement.innerText = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    helloElement.innerText = "Good Afternoon";
  } else {
    helloElement.innerText = "Good Night";
  }
}

// 할 일을 추가하는 함수
function addTodo() {
  const todoInput = document.getElementById("todolist");
  const todoText = todoInput.value.trim();
  if (todoText) {
    const todoList = document.getElementById("todo-list");
    const li = document.createElement("li");
    li.innerText = todoText;

    // 삭제 버튼 추가
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "삭제";
    deleteBtn.className = "delete-btn";
    deleteBtn.onclick = () => {
      if (confirm("삭제하시겠습니까?")) {
        todoList.removeChild(li);
      }
    };

    li.appendChild(deleteBtn);
    todoList.appendChild(li);

    // 입력 필드 초기화
    todoInput.value = "";
  }
}

// 페이지 로드 시 시간 업데이트
updateTime();
setInterval(updateTime, 60000); // 매 60초마다 시간 업데이트

// 버튼 클릭 시 할 일 추가
document.getElementById("add-todo-button").onclick = addTodo;
