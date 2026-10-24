let myTasks = []

// Calculate the user's weekly task goal
function weeklyGoal(userName, dailyGoal, bonusTasks) {

    // Calculate weekly goal based on 5 workdays
    let weeklyGoal = dailyGoal * 5;

    // Add bonus tasks to weekly goal
    let totalGoal = weeklyGoal + bonusTasks;

    // Create output message
    let output = "User: " + userName + "<br>";
    output += "Total Weekly Goal: " + totalGoal;

    // Display results on the page
    document.getElementById("goal-message").innerHTML = output;
}


// Run when the goal button is clicked
document.getElementById("goal-btn").addEventListener("click", function(event) {

    // Prevent the form from submitting
    event.preventDefault();

    // Get values from the form
    let userName = document.getElementById("name-input").value;
    let dailyGoal = Number(document.getElementById("taskgoal-input").value);
    let bonusTasks = Number(document.getElementById("weeklybonustasks-input").value);

    // Call the weeklyGoal function
    weeklyGoal(userName, dailyGoal, bonusTasks);
});


// Update task-manager.js logic

// Create the unordered list dynamically
let userTasks = document.createElement("ul");
userTasks.id = "user-tasks";

let taskList = document.getElementById("task-list");
taskList.appendChild(userTasks);

// Get form elements
let taskManagerForm = document.getElementById("task-manager-form");
let taskNameInput = document.getElementById("task-name");
let taskPriorityInput = document.getElementById("task-priority");
let taskImportantInput = document.getElementById("task-important");
let deleteListButton = document.getElementById("delete-list");


// Function to display all tasks
function displayTasks() {

    // Clear the current list before rebuilding it
    userTasks.innerHTML = "";

    for (let i = 0; i < myTasks.length; i++) {

        let task = myTasks[i];

        // Create list item
        let taskItem = document.createElement("li");

        // Display task information
        taskItem.textContent =
            task.name + " - Priority: " + task.priority;

        // Apply priority styling
        if (task.priority === "High") {
            taskItem.style.fontWeight = "bold";
        } else if (task.priority === "Medium") {
            taskItem.style.fontStyle = "italic";
        } else {
            taskItem.style.opacity = "0.8";
        }

        // Highlight important tasks in red
        if (task.isImportant === true) {
            taskItem.style.color = "red";
        }

        // Apply strikethrough to completed tasks
        if (task.isCompleted === true) {
            taskItem.style.textDecoration = "line-through";
        }


        // Complete Task button
        let completeButton = document.createElement("button");
        completeButton.textContent = "Complete";

        completeButton.addEventListener("click", function() {

            task.isCompleted = !task.isCompleted;

            console.log(JSON.stringify(myTasks));

            displayTasks();
        });


        // Edit Task button
        let editButton = document.createElement("button");
        editButton.textContent = "Edit";

        editButton.addEventListener("click", function() {

            let updatedName = prompt(
                "Edit task name:",
                task.name
            );

            if (updatedName !== null && updatedName.trim() !== "") {
                task.name = updatedName.trim();

                console.log(JSON.stringify(myTasks));

                displayTasks();
            }
        });


        // Delete Task button
        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function() {

            myTasks.splice(i, 1);

            console.log(JSON.stringify(myTasks));

            displayTasks();
        });


        // Add buttons to the list item
        taskItem.appendChild(document.createElement("br"));
        taskItem.appendChild(completeButton);
        taskItem.appendChild(editButton);
        taskItem.appendChild(deleteButton);

        // Add task item to the unordered list
        userTasks.appendChild(taskItem);
    }
}


// Function to add a task
function addTask() {

    let taskName = taskNameInput.value.trim();

    if (taskName === "") {
        alert("Please enter a task name.");
        return;
    }

    let newTask = {
        id: Date.now(),
        name: taskName,
        priority: taskPriorityInput.value,
        isImportant: taskImportantInput.checked,
        isCompleted: false
    };

    myTasks.push(newTask);

    console.log(JSON.stringify(myTasks));

    displayTasks();

    // Clear the form
    taskNameInput.value = "";
    taskPriorityInput.value = "High";
    taskImportantInput.checked = false;
}


// Add task when form is submitted
taskManagerForm.addEventListener("submit", function(event) {

    event.preventDefault();

    addTask();
});


// Function to delete the entire task list
function deleteTaskList() {

    myTasks = [];

    console.log(JSON.stringify(myTasks));

    displayTasks();
}


// Delete entire list button
deleteListButton.addEventListener("click", function() {

    deleteTaskList();
});


