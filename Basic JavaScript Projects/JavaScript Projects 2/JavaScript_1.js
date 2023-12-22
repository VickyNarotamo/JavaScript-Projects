function Vehicle_Function() {
    var Vehicle_Output;
    var VehicleChoice = document.getElementById("Vehicle_Input").value;
    var Vehicle_String = "is a great choice!";
    
    switch (VehicleChoice.toLowerCase()) {
        case "ferrari":
            Vehicle_Output = "Ferrari " + Vehicle_String;
            break;
        case "porsche":
            Vehicle_Output = "Porsche " + Vehicle_String;
            break;
        case "lamborghini":
            Vehicle_Output = "Lamborghini " + Vehicle_String;
            break;
        case "aston martin":
            Vehicle_Output = "Aston Martin " + Vehicle_String;
            break;
        case "bugatti":
            Vehicle_Output = "Bugatti " + Vehicle_String;
            break;
        case "mclaren":
            Vehicle_Output = "McLaren " + Vehicle_String;
            break;
        default:
            Vehicle_Output = "Invalid choice. Please pick a vehicle from the list.";
            break;
    }

    document.getElementById("Output").innerHTML = Vehicle_Output;
}

function changeText() {
    var elements = document.getElementsByClassName("changeable");     // Get elements with the class "changeable"
    for (var i = 0; i < elements.length; i++) {  // Loop through the elements and change the text
        elements[i].innerHTML = "The text has changed!";
    }
}

// Get the first canvas and context
const theCanvas = document.getElementById("theCanvas");
const ctx1 = theCanvas.getContext("2d");

// Set the border style for the first canvas
theCanvas.style.border = "5px solid black";

// Draw a simple circle on the first canvas
ctx1.beginPath();
ctx1.arc(75, 75, 50, 0, 2 * Math.PI); // (x, y, radius, startAngle, endAngle)
ctx1.fillStyle = "blue"; // Set fill color
ctx1.fill(); // Fill the circle
ctx1.lineWidth = 2; // Set line width for the circle border
ctx1.strokeStyle = "black"; // Set border color
ctx1.stroke(); // Draw the circle border

// Get the second canvas and context
const myCanvas = document.getElementById("myCanvas");
const ctx2 = myCanvas.getContext("2d");

// Create a linear gradient on the second canvas
const gradient = ctx2.createLinearGradient(0, 0, 500, 0); // (x0, y0, x1, y1)

// Define gradient colors
gradient.addColorStop(0, "red");
gradient.addColorStop(0.5, "green");
gradient.addColorStop(1, "blue");

// Fill a rectangle with the gradient on the second canvas
ctx2.fillStyle = gradient;
ctx2.fillRect(20, 20, 460, 200);

// Set the border style for the second canvas
myCanvas.style.border = "5px solid black";


