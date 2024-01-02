var todo = {
    task: "Complete assignment",
    dueDate: "20-01-2024",
    priority: "High",
    completed: false
};

// Convert todo object to JSON string
var todoJSONString = JSON.stringify(todo);

// Assuming you have an element with id 'todos', you can append the todo JSON string to it
var todosElement = document.getElementById("todos");
todosElement.innerHTML = todoJSONString;

// This is a JSON string variable representing data
var jsonDataString = '{"title": "Webpage", "author": "Vicky Narotamo", "date": "02-01-2024"}';

// Convert JSON string to JavaScript object
var dataObject = JSON.parse(jsonDataString);

// Display the data on the webpage
var dataElement = document.getElementById("myData");
dataElement.innerHTML = `
    <h2>${dataObject.title}</h2>
    <p>Author: ${dataObject.author}</p>
    <p>Date: ${dataObject.date}</p>
`;

document.addEventListener("DOMContentLoaded", function () {
    // Check if there is existing todo list data in local storage
    var storedTodos = localStorage.getItem("todos");

    // Initialize todos with existing data or an empty array
    var todos = storedTodos ? JSON.parse(storedTodos) : [];

    // Function to render todos on the webpage
    function renderTodos() {
        var todosElement = document.getElementById("todos");
        // Clear the existing content
        todosElement.innerHTML = "";

        // Render each todo in the todos array
        todos.forEach(function (todo) {
            var todoItem = document.createElement("li");
            todoItem.textContent = todo.task;
            todosElement.appendChild(todoItem);
        });
    }

    // Render existing todos on page load
    renderTodos();

    // Event listener for adding a new todo
    document.getElementById("add").addEventListener("click", function () {
        var taskInput = document.getElementById("task");
        var newTask = taskInput.value;

        if (newTask.trim() !== "") {
            // Add the new todo to the todos array
            todos.push({ task: newTask, completed: false });

            // Save the updated todos array to local storage
            localStorage.setItem("todos", JSON.stringify(todos));

            // Render the updated todos on the webpage
            renderTodos();

            // Clear the input field
            taskInput.value = "";
        }
    });
});