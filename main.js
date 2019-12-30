// Get Task
const getTask = () => {
  let taskName = document.getElementById("task-name").value;
  console.log(taskName);

  // let inMonth = document.getElementById("in-month").value;
  // let inDay = document.getElementById("in-day").value;
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

const taskDone = () => {
  let todoItem = document.getElementById("todo-list__items");
  todoItem.classList.toggle("task-done");
};
