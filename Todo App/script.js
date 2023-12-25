
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

let taskId = 1;

function addTask(event){
    event.preventDefault()
    const taskText = taskInput.value.trim();

    if(taskText !== "")
    {
        const taskItem = document.createElement('li')

        taskItem.innerHTML = `
        <span>${taskText}</span>
        <button class='delete-btn'>Delete</button>
        `;

        taskList.append(taskItem);

        taskInput.value = ""
        taskId++;

        const deleteBtn = taskItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', deleteTask)
    }
}

function deleteTask(event){
    const taskItem = event.target.parentElement
    console.log(taskItem)
    taskList.removeChild(taskItem);
}

taskForm.addEventListener('submit', addTask)