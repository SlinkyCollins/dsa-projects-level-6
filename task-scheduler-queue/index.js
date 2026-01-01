const inputTextBox = document.getElementById("inputTextBox");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");
const errorMsg = document.getElementById("errorMsg");
const processBtn = document.getElementById("processBtn");
const currentTask = document.getElementById("currentTask");

let taskQueue = JSON.parse(localStorage.getItem("tasks")) || [];

addEventListener("load", () => {
    renderTasks();
    currentTask.textContent = taskQueue[0]
        ? `Next task: ${taskQueue[0]}`
        : "No tasks found";
});

addButton.addEventListener("click", () => {
    if (inputTextBox.value == "") {
        errorMsg.textContent = "Input field cannot be empty";
        return;
    }
    taskQueue.push(inputTextBox.value);
    localStorage.setItem("tasks", JSON.stringify(taskQueue));
    inputTextBox.value = "";
    errorMsg.textContent = "";
    renderTasks();
    currentTask.textContent = taskQueue[0]
        ? `Next task: ${taskQueue[0]}`
        : "No tasks found";
});

renderTasks = () => {
    taskList.innerHTML = "";
    taskQueue.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${index + 1}: ${task}`;
        taskList.appendChild(listItem);
    });
};

processBtn.addEventListener("click", () => {
    if (taskQueue.length === 0) return;

    const processedTask = taskQueue.shift();
    localStorage.setItem("tasks", JSON.stringify(taskQueue));
    renderTasks();

    alert(`${processedTask} was processed.`);
    currentTask.textContent = taskQueue[0]
        ? `Next task: ${taskQueue[0]}`
        : "No tasks found";
});
