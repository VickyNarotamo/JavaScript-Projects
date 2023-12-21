var myDictionary = {
    "name": "John",
    "age": 25,
    "city": "Example City",
    "occupation": "Engineer",
    "occupation2": "Developer"  // Different key was added here
};

// Function to output values from the dictionary to the HTML element
function displayDictionaryValues() {
    // Output values to the HTML element with the ID "Dictionary"
    var outputParagraph = document.getElementById("Dictionary");
    outputParagraph.innerHTML = "Name: " + myDictionary["name"] + "<br>" +
                                "Age: " + myDictionary["age"] + "<br>" +
                                "City: " + myDictionary["city"] + "<br>" +
                                "Occupation: " + myDictionary["occupation"] + "<br>" +
                                "Occupation 2: " + myDictionary["occupation2"];
}

function deleteAndDisplayValue() { // Function to delete a value from the dictionary and update the display
    delete myDictionary["age"]; // Use the delete operator to remove a key-value pair
    displayDictionaryValues();  // Display the updated values
}
