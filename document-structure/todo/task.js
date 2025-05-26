const taskInput = document.getElementById("task__input");
const btn = document.getElementById("tasks__add");
const remove = document.querySelector("task__remove");
const taskList = document.getElementById("tasks__list");
const checkbox = document.querySelector(".checkbox")


function addTask () {
    let tasks = taskInput.value.trim();
    if(tasks !== "") {
        const newTask = document.createElement("div");
        newTask.classList.add("task");
        newTask.innerHTML = `
            <div class="task__title">${tasks}</div>
            <input type="checkbox" class="checkbox">
            <a href="#" class="task__remove">×</a>
        `;
        taskList.prepend(newTask); 
        taskInput.value = "";
}}

btn.addEventListener("click", (event) => {
  event.preventDefault();
  addTask()
});

taskList.addEventListener("click", event => {
    if (event.target.classList.contains("task__remove")) {
        event.target.parentNode.remove(); 
    }  else if(event.target.type === 'checkbox') {
        event.target.previousElementSibling.style.color = event.target.checked ? "gray" : "#000";  
    }
});

