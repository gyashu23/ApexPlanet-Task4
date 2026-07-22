let addBtn = document.getElementById("addBtn");
let taskInput = document.getElementById("taskInput");
let taskList = document.getElementById("taskList");

let allBtn = document.getElementById("allBtn");
let completedBtn = document.getElementById("completedBtn");
let pendingBtn = document.getElementById("pendingBtn");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

displayTasks();

addBtn.addEventListener("click", addTask);

allBtn.addEventListener("click", function () {
    displayTasks("all");
});

completedBtn.addEventListener("click", function () {
    displayTasks("completed");
});

pendingBtn.addEventListener("click", function () {
    displayTasks("pending");
});

function addTask() {
    let text = taskInput.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    tasks.push({
        text: text,
        completed: false
    });

    saveTasks();
    displayTasks();
    taskInput.value = "";
}

function displayTasks(filter = "all") {

    taskList.innerHTML = "";

    tasks.forEach((task, index) => {

        if (filter === "completed" && !task.completed) {
            return;
        }

        if (filter === "pending" && task.completed) {
            return;
        }

        let li = document.createElement("li");

        if (task.completed) {
            li.classList.add("complete");
        }

        li.innerHTML = `
            <span>${task.text}</span>
            <div>
                <button class="action-btn done">✔</button>
                <button class="action-btn edit">Edit</button>
                <button class="action-btn delete">Delete</button>
            </div>
        `;

        taskList.appendChild(li);

        li.querySelector(".done").onclick = function () {
            task.completed = !task.completed;
            saveTasks();
            displayTasks(filter);
        };

        li.querySelector(".edit").onclick = function () {

            let updated = prompt("Edit Task", task.text);

            if (updated !== null && updated.trim() !== "") {
                task.text = updated.trim();
                saveTasks();
                displayTasks(filter);
            }
        };

        li.querySelector(".delete").onclick = function () {
            tasks.splice(index, 1);
            saveTasks();
            displayTasks(filter);
        };

    });

}

function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

let contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill all fields");
        return;
    }

    alert("Message sent successfully!");

    contactForm.reset();

});