const addItem = function (e) {
    if (e.key === "Enter" || e.type === "click") {
        if (document.querySelector("#input_field_task").value.trim() !== "") {

            const taskTextSpan = document.createElement("span");
            taskTextSpan.innerHTML = document.querySelector("#input_field_task").value.trim();
            taskTextSpan.className = "task-text";
            taskTextSpan.addEventListener("click", toggleCompleteTask);

            const btnEdit = document.createElement("span");
            btnEdit.innerHTML = "(edit)";
            btnEdit.className = "btn-edit";
            btnEdit.addEventListener("click", editItem);

            const btnRemove = document.createElement("span");
            btnRemove.innerHTML = "(remove)";
            btnRemove.className = "btn-remove";
            btnRemove.addEventListener("click", removeItem);

            const listItem = document.createElement("li");
            listItem.appendChild(taskTextSpan);
            listItem.appendChild(document.createTextNode(" - "));
            listItem.appendChild(btnEdit);
            listItem.appendChild(document.createTextNode(" - "));
            listItem.appendChild(btnRemove);

            const listItems = Array.from(document.querySelectorAll("li"));
            const firstCompleteItem = listItems.find(element => element.querySelector(".task-text").classList.contains("strikethrough"));

            document.querySelector("#task_list").insertBefore(listItem, firstCompleteItem);
            document.querySelector("#input_field_task").value = "";

        }
    }
}

function removeItem(e) {
    document.querySelector("#task_list").removeChild(e.target.parentElement);
}

function editItem(e) {
    const taskTextSpan = e.target.parentElement.querySelector(".task-text");
    let taskText = prompt("Edit the task...", taskTextSpan.innerText);
    if (taskText !== null) taskText = taskText.trim();
    if (taskText !== null && taskText !== "") taskTextSpan.innerHTML = taskText;
}

function toggleCompleteTask(e) {
    const taskTextSpan = e.target.parentElement.querySelector(".task-text");
    taskTextSpan.classList.toggle("strikethrough");
    const taskList = document.querySelector("#task_list");
    const listItem = taskTextSpan.parentElement;
    const listItems = Array.from(document.querySelectorAll("li"));
    const firstCompleteItem = listItems.find(element => element.querySelector(".task-text").classList.contains("strikethrough"));

    if (taskTextSpan.classList.contains("strikethrough")) {
        taskList.removeChild(listItem);
        taskList.appendChild(listItem);
    } else {
        taskList.removeChild(listItem);
        taskList.insertBefore(listItem, firstCompleteItem);
    }
}

document.querySelector("#input_field_task").addEventListener("keypress", addItem);
document.querySelector("#btn_add_item").addEventListener("click", addItem);

document.querySelectorAll(".task-text").forEach(element => element.addEventListener("click", toggleCompleteTask));
document.querySelectorAll(".btn-edit").forEach(element => element.addEventListener("click", editItem));
document.querySelectorAll(".btn-remove").forEach(element => element.addEventListener("click", removeItem));
