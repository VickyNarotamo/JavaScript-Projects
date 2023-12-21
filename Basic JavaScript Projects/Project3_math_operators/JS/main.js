function performAddition() { // Addition function // Define two numbers
    var num1 = 20;  // Replace with your desired numbers
    var num2 = 30; // Replace with your desired numbers
// Calculate the sum
    var result = num1 + num2;
    var mathParagraph = document.getElementById("Math"); // Update HTML element with the result
    mathParagraph.innerHTML = "Result: " + result;
}

function subtraction_Function() { // Subtraction function
    var Subtraction = 5 - 2; // Calculate subtraction
    document.getElementById("Subtraction").innerHTML = "5 - 2 = " + Subtraction; // Update HTML element with the result
}

function multiplication_Function() { // Multiplication function
    var multiplication = 7 * 2; // Calculate multiplication
    var multiplicationParagraph = document.getElementById("Multiplication"); // Update HTML element with the result
    multiplicationParagraph.innerHTML = "Result: 7 * 2 = " + multiplication;
}

function division_Function() { // Division function
    var division = 27 / 3; // Calculate division
    var divisionParagraph = document.getElementById("Division"); // Update HTML element with the result
    divisionParagraph.innerHTML = "Result: 27 / 3 = " + division;
}

function more_Math() { // More Math function
    var simple_Math = (1 + 2) * 10 / 2 - 5; // Perform a series of mathematical operations
    var moreMathParagraph = document.getElementById("MoreMath"); // Update HTML element with the result
    moreMathParagraph.innerHTML = "Result: 1 plus 2, multiplied by 10, divided in half, and then subtracted by 5 equals " + simple_Math;
}

function modulus_Operator() { // Modulus Operator function
    var remainder_Math = 25 % 6;  // Calculate modulus
    var remainderMathParagraph = document.getElementById("RemainderMath"); // Update HTML element with the result
    remainderMathParagraph.innerHTML = "Result: When you divide 25 by 6 you have a remainder of: "+ remainder_Math;
}

function negation_operator() { // Negation Operator function
    var x = 10; // Perform unary negation on the number 10
    var unaryMathParagraph = document.getElementById("UnaryMath");  // Update HTML element with the result
    unaryMathParagraph.innerHTML = "Result: Unary Negation of " + x + " is " + (-x);
}

var x = 5; // Increment Operation
        x++; // Increment x
        document.getElementById("IncrementResult").innerHTML += x;

var y = 5.25; // Decrement Operation
        y--; // Decrement y
        document.getElementById("DecrementResult").innerHTML += y;

window.alert(Math.random()); // Random Number Operations
var randomNum = Math.random(); // Display random number in alert
        document.getElementById("RandomNumberResult").innerHTML += randomNum;

window.alert(Math.random() * 100); // Display random number multiplied by 100 in alert
var randomNumTimes100 = Math.random() * 100;
        document.getElementById("RandomNumberTimes100Result").innerHTML += randomNumTimes100;

function calculateSquareRoot() { // Square Root Operation
    var squareRootResult = Math.sqrt(16); // Calculate square root of 16
    document.getElementById("SquareRootResult").innerHTML = "Square root of 16: " + squareRootResult;  // Update HTML element with the result
}