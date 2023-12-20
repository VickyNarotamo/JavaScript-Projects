function updateElements() {
    var firstElement = document.getElementById('firstElementId');
    var secondElement = document.getElementById('secondElementId');
    var paragraphElement = document.getElementById('paragraphElementId');

    if (firstElement && secondElement && paragraphElement) { //Elements
        firstElement.innerHTML = "Welcome to my webpage "; // Assign Values
        secondElement.innerHTML = "-Vicky";

        var concatenatedString = "Concatenated string: "; // Concatenate strings using the += operator
        concatenatedString += firstElement.innerHTML;
        concatenatedString += secondElement.innerHTML;

        paragraphElement.innerHTML = concatenatedString; // Display the concatenated string in the paragraph element
    }
}