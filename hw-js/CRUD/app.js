const taskListUpdate = document.getElementsByTagName("ul")[0];
const task = document.getElementById("text-task");
const inputTask = task.value;

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let history = JSON.parse(localStorage.getItem("history")) || [];

if (localStorage.tasks) {
  for (let i = 0; i < tasks.length; i++) {
    console.log(tasks[i]);
    taskListUpdate.innerHTML += `<li><span>${tasks[i].length > 20 ? tasks[i].slice(0, 20) + "..." : tasks[i]
      } </span></li>`;
  }
}
taskListUpdate.addEventListener('mouseenter', () => {
  let taskListUpdateChild = document.querySelectorAll('.task-list-update li');

  for (let i = 0; i < taskListUpdateChild.length; i++) {
    taskListUpdateChild.length
    taskListUpdateChild[i].addEventListener("contextmenu", (e) => {
      e.preventDefault();
      confirm("Видалити?")
      taskListUpdateChild[i].remove();
      tasks.splice(i, 1);
      localStorage.setItem('tasks', JSON.stringify(tasks));


    });
  }
})

document.querySelector(".task-btn").addEventListener("click", (e) => {
  e.preventDefault();
  if (task.value) {
    tasks.push(task.value);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    alert("Введіть текст завдання");
  }
  updateTaskList();
  updateHistoryList();
  document.getElementById("text-task").value = "";
});

taskListUpdate.addEventListener('mouseenter', () => {
  let taskListUpdateChild = document.querySelectorAll('.task-list-update li');
  for (let i = 0; i < taskListUpdateChild.length; i++) {
    taskListUpdateChild[i].addEventListener("click", () => {
      task.value = tasks[i];
      console.log(task.value);
      updateTaskList();
    });
  }
});




function updateTaskList() {
  taskListUpdate.innerHTML = "";
  tasks.forEach((inputTask) => {
    taskListUpdate.innerHTML += `<li><span>${inputTask.length > 20 ? inputTask.slice(0, 20) + "..." : inputTask
      } </span></li>`;
  });
}

function updateHistoryList() {
  let taskUpdateHistory = document.querySelector(".history-task");
  taskUpdateHistory.innerHTML = "";
  history.push(tasks);
  localStorage.setItem("history", JSON.stringify(history));
  history[history.length - 1].forEach((inputTask) => {
    taskUpdateHistory.innerHTML += `<li><span>${inputTask.length > 20 ? inputTask.slice(0, 20) + "..." : inputTask
      } </span> </li>`;
  });
}
function timeDate(timeNow) {
  const date = new Date();
  const options = {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  timeNow = new Intl.DateTimeFormat("en-US", options).format(date);
  console.log(timeNow);
  return timeNow;
}