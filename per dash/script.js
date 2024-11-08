document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Button
    const themeToggleButton = document.getElementById("theme-toggle");
    themeToggleButton.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

    // To-Do List: Add Task
    const addTaskButton = document.getElementById("add-task");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    addTaskButton.addEventListener("click", addTask);

    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    function addTask() {
        const task = taskInput.value.trim();
        if (task) {
            const listItem = document.createElement("li");
            listItem.textContent = task;
            taskList.appendChild(listItem);
            taskInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a valid task.");
        }
    }

    // Reminders: Set Reminder
    const setReminderButton = document.getElementById("set-reminder");
    const reminderInput = document.getElementById("reminder-input");
    const reminderList = document.getElementById("reminder-list");

    setReminderButton.addEventListener("click", setReminder);

    reminderInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            setReminder();
        }
    });

    function setReminder() {
        const reminder = reminderInput.value.trim();
        if (reminder) {
            const reminderItem = document.createElement("li");
            reminderItem.textContent = reminder;
            reminderList.appendChild(reminderItem);
            reminderInput.value = ""; // Clear the input field
        } else {
            alert("Please enter a valid reminder.");
        }
    }
});
