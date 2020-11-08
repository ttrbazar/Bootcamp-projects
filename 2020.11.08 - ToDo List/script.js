document.querySelector("#btn_login").onclick = function () {
    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;
    if (username === "abc" && password === "123") {
        document.querySelector("#div_login").hidden = true;
        document.querySelector("#div_logout").style.display = "block";
        document.querySelector("#welcomeName").innerHTML = username;
        loadToDoListContent();
    } else {
        alert("Wrong username or password!");
    }
}

btn_logout.onclick = function () {
    document.body.removeChild(main_content);
    div_logout.style.display = "none";
    div_login.hidden = false;
    username.value = "";
    password.value = "";
}

function loadToDoListContent() {
    let divMainContent = document.createElement("div");
    divMainContent.id = "main_content";
    document.body.appendChild(divMainContent);
    divMainContent.style.border = "2px black solid";
    divMainContent.style.padding = "10px";

    let heading = document.createElement("h1");
    heading.innerHTML = "ToDo List";
    divMainContent.appendChild(heading);

    let buttonAddItem = document.createElement("button");
    buttonAddItem.innerText = "Add Item";
    divMainContent.appendChild(buttonAddItem);

    let buttonRemoveItem = document.createElement("input");
    buttonRemoveItem.id = "remove_item_button"
    buttonRemoveItem.type = "button";
    buttonRemoveItem.value = "Remove Last Item";
    divMainContent.appendChild(buttonRemoveItem);
}