var Family = "The Arezzinis", Dad = "Jeremiah", Mom = "Hermoine", Daughter = "Penny", Son = "Zorro"; // Assigning values to variables for a family

document.body.innerHTML = Dad; // Display the Dad's name in the document body

var bluesMessage = document.createElement("p"); // Creating a paragraph element for a blues message
bluesMessage.innerHTML = "I have the blues.";
bluesMessage.style.color = "blue";

document.body.appendChild(bluesMessage); // Appending the blues message element to the document body

var resultMessage = document.createElement("p"); // Creating a paragraph element for a result message
resultMessage.innerHTML = "Result: " + (3 + 3);

document.body.appendChild(resultMessage); // Appending the result message element to the document body