# 손근영의 모멘텀 앱

### 사용된 기술 스택

1. html
2. css
3. javascript

### 적용된 기능

1. 시간을 업데이트 하는 기능

```javascript
function updateTime() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = String(now.getMinutes()).padStart(2, "0");
  document.getElementById("time").innerText = `${String(hours).padStart(
    2,
    "0"
  )}:${minutes}`;
```

now 변수로 현재 시간을 불러오고, hours와 minutes 변수에 현재 시각과 분을 입력받음.
hours는 string으로 먼저 받지 않는 이유는 추후에 대소비교를 하기 위함.

2. 시간에 따라 인사말을 업데이트 하는 기능

```javascript

  const helloElement = document.getElementById("hello");
  if (hours >= 6 && hours < 12) {
    helloElement.innerText = "Good Morning";
  } else if (hours >= 12 && hours < 18) {
    helloElement.innerText = "Good Afternoon";
  } else {
    helloElement.innerText = "Good Night";
  }
}
```

hours의 크기를 비교하여 아침에는 굿모닝, 점심에는 굿애프터눈, 저녁에는 굿나잇을 출력하도록 만듬.

3.To-do list 기능 추가

```javascript
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
```

to-do list 기능을 통해 할일을 추가, 삭제할 수 있도록 만듬.

### 추후 개발할 기능

1. 할 일에 대하여 진행률을 표시하거나 메모를 할 수 있도록 하기
2. 할 일 검색기능 만들기
3. 할 일 알람기능 만들기
