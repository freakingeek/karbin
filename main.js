let tasks = []
const addTodoPanel = document.querySelector(".add-todo-modal")
const todoForm = document.querySelector(".add-todo-modal__form")
const addTodoButton = document.querySelector('.add-todo-button')

// onForm submition
todoForm.addEventListener("submit", (e) => {
  e.preventDefault()

  if (validateTask()) {
    const task = getTask()
    tasks.unshift(task)
    createTaskElement(task)

    clearData()
  } else {
    // Error Handeling!
    console.error("Validator");
  }

  closePanel()
});


// Toggle add-todo panel
addTodoButton.addEventListener('click', () => {
  addTodoPanel.classList.toggle("add-todo-modal_display-show");
  addTodoButton.classList.toggle("rotate-45");
})


// Get task
function getTask() {
  return {
    name: document.getElementById("task-name").value,
    inDay: document.getElementById("minutes-a-day").value,
    inMonth: document.getElementById("number-per-month").value,
  }
};

// Clear old data
function clearData() {
  document.getElementById("task-name").value = null
  document.getElementById("minutes-a-day").value = null
  document.getElementById("number-per-month").value = null
}

// Validate task
function validateTask() {
  const task = getTask()

  return (!task.name) ? false : true
}

// Show add-todo panel
function showPanel() {
  addTodoPanel.classList.add("add-todo-modal_display-show");
  addTodoButton.classList.add("rotate-45");
};

// Close add-todo panel
function closePanel() {
  addTodoPanel.classList.remove("add-todo-modal_display-show");
  addTodoButton.classList.remove("rotate-45");
};

// Print task
function createTaskElement({ name, inMonth, inDay }) {
  const todoContainer = document.querySelector(".todos__todos-list");
  const todoElement = document.createElement("li");

  todoElement.classList.add("input", "todos__items");
  todoElement.addEventListener('click', (e) => taskDone(e))
  todoElement.textContent = name;

  todoContainer.appendChild(todoElement);
};

// Task Done
function taskDone(e) {
  const el = e.target
  el.classList.toggle("done"); 
}