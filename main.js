// Prevent Form Submit
document.querySelector(".add-todo-form").addEventListener(
  "click",
  function(event) {
    event.preventDefault();
  },
  false
);

// Get Task
const getTask = () => {
  let task = {
    name: document.getElementById("task-name").value,
    inMonth: document.getElementById("todo-in-month").value,
    inDay: document.getElementById("min-in-day").value
  };
  printTask(task);
};

const printTask = task => {
  let todoContainer = document.querySelector(".todo-list");
  let todoKhod = document.createElement("li");
  todoKhod.classList.add("todo-list__items");
  todoKhod.textContent = task.name;
  todoContainer.appendChild(todoKhod);

  closePanel();
};

// Show add-todo Panel
const showPanel = () => {
  let addTodoBTN = document.getElementById("addTodoBTN");
  addTodoBTN.classList.toggle("rotate-15");

  let panel = document.getElementById("panel");
  panel.classList.toggle("display");
};

const closePanel = () => {
  panel.classList.toggle("display");

  let addTodoBTN = document.getElementById("addTodoBTN");
  addTodoBTN.classList.toggle("rotate-15");
};

// Task Done [Change Color]

const taskDone = () => {
  let todoItem = document.querySelector(".todo-list__items");
  todoItem.classList.toggle("task-done");
};

// let todoLi = document.querySelector(".todo-list__items");
// todoLi.setAttribute("onClick", "taskDone()");
