// Global Vairabile
var x=10;
function Add_numbers_1 () {
    document.getElementById("output").innerHTML +=(20 + x + "<br>");
}
function Add_numbers_2() {
    document.getElementById("output").innerHTML +=(x + 100);
}
Add_numbers_1();
Add_numbers_2();

// Local Variable
function Add_numbers_3() {
    var x = 10;
    document.getElementById("output").innerHTML +=(20 + x + "<br>");
}
function Add_numbers_4() {
    document.getElementById("output").innerHTML +=(x + 100);
}
Add_numbers_3();
Add_numbers_4(); // Add_numbers_4(); this line will commence the result to show up as an error

// Using and understanding console for debugging

function Add_numbers_5() {
    var y = 10;
    console.log(15 + y);
}
function Add_numbers_6() {
    console.log(y + 100); // This line will commence the result to show up as an error in the console
}
Add_numbers_5();
Add_numbers_6(); // Add_numbers_6(); this line will commence the result show up as an error in the console

function showMessage() {
    if (new Date().getHours() < 12) { // function including an if statement using new Date().getHours() method
        document.getElementById("CustomMessage").innerHTML = "Good morning!"; // reference the id attribute in the HTML file
    } else {
        document.getElementById("CustomMessage").innerHTML = "Good afternoon!";
    }
}

function checkAge() {
    var userAge = document.getElementById("userAge").value;
    if (userAge >= 18) {
        document.getElementById("ageStatus").innerHTML = "You are an adult!";
    } else {
        document.getElementById("ageStatus").innerHTML = "You are not an adult.";
    }
}

function processFeedback() {
    var userFeedback = document.getElementById("feedbackInput").value; // Gets user feedback from the input field
    if (userFeedback.trim() !== "") { // Check if the user provided feedback
        document.getElementById("feedbackMessage").innerHTML = "Thank you for your feedback: " + userFeedback;
    } else {
        document.getElementById("feedbackMessage").innerHTML = "Please provide your feedback before submitting.";
    }
}

function Time_function() {
    var Time = new Date().getHours();
    var Reply;

    if (Time < 12 && Time > 0) {
        Reply = "It is morning time!";
    } else if (Time >= 12 && Time < 18) {
        Reply = "It is the afternoon.";
    } else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}