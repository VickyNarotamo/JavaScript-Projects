/* This function gets the tasks from input */
function get_todos() {
    /* This creates an array of tasks that are inputted */
    var todos = new Array();
    /* This pulls the tasks that were saved in the web browser memory */
    var todos_str = localStorage.getItem('todo');
    /* If the input is not null, then JSON.parse will
    communicate with the web browser to make the tasks a JavaScript object. */
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

/* This function adds the inputted task to the get_todos function array */
function add() {
    /* This takes the inputted task and creates a variable of it */
    var task = document.getElementById('task').value;

    var todos = get_todos();
    /* This adds a new task to the end of the array */
    todos.push(task);
    /* This converts the tasks input to a JSON string */
    localStorage.setItem('todo', JSON.stringify(todos));
    /* Clear the input field after adding the task */
    document.getElementById('task').value = "";
    /* Refresh the displayed tasks */
    show();

    return false;
}

/* This function creates the functionality of removing a todo item from the array */
function remove() {
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    /* This looks in the show() how to display a removed item on the screen */
    show();
    return false;
}

/* This function keeps the tasks permanently displayed on the screen */
function show() {
    /* This sets the tasks that were retrieved as a variable */
    var todos = get_todos();

    /* This sets up each task as an unordered list */
    var html = '<ul>';
    /* This displays a task to the list in the order that it is inputted */
    for (var i = 0; i < todos.length; i++) {
        /* This also displays the task as a list and creates the button with the "x" */
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>';
    }
    html += '</ul>';
    /* This displays the tasks as a list */
    document.getElementById('todos').innerHTML = html;

    /* Add event listeners to new remove buttons */
    var buttons = document.getElementsByClassName('remove');
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    }
}

/* This displays the inputted task when the 'Add Item' button is clicked */
document.getElementById('add').addEventListener('click', add);
/* This will keep the inputs displayed permanently on the screen */
show();