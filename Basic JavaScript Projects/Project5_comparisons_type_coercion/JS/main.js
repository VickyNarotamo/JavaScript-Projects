function writeToDocument() { // Define a function to execute the document.write code
    document.write("<p>" + typeof "word" + "</p>");
    document.write("<p>" + typeof 3 + "</p>");
}

function my_Function() {
    var result = "Result 1: " + 0 / 0 + "<br>";
    result += "Result 2: " + isNaN('This is a string') + "<br>";
    result += "Result 3: " + isNaN('007');
    
    document.getElementById("Test").innerHTML = result;

    // Additional comparison values
    document.getElementById("comparisonResult1").innerHTML = "Result 4: " + (10 > 2) + "<br>";
    document.getElementById("comparisonResult2").innerHTML = "Result 5: " + (10 < 2);

    var additionalResult = "Result 6: " + 2E310 + "<br>";
    additionalResult += "Result 7: " + -3E310;

    // Display the additional values in the "additionalOutput" div
    document.getElementById("additionalOutput").innerHTML = additionalResult;
}

console.log(2 + 2);

function demonstrateTypeCoercion() {
    var result = Number("10") + 5; // Explicitly convert the string "10" to a number and then add 5
    document.getElementById("typeCoercionResult").innerHTML = "Result 8: " + result; // Display the result in the "typeCoercionResult" div
}

    var isFalse = (13 > 20);
    console.log(isFalse);

    document.getElementById("equalityComparison1").innerHTML = "Result 9: " + (10 == 10) + "<br>";
    document.getElementById("equalityComparison2").innerHTML = "Result 10: " + (3 == 11);

function demonstrateRuleEquality() {
    
    var result1 = (10 === 10); // Return true by ensuring to match the data type and value.
    var result2 = ("10" === 10); // Return false by writing a different data type and different value.
    var result3 = (true === "true"); // Return false by writing a different data type but the same value for both.
    var result4 = (false === true); // Return false by writing the same data type but a different value for both.

    // Display the results in each respective divs
    document.getElementById("RuleEqualityResult1").innerHTML = "Result 11: " + result1 + "<br>";
    document.getElementById("RuleEqualityResult2").innerHTML = "Result 12: " + result2 + "<br>";
    document.getElementById("RuleEqualityResult3").innerHTML = "Result 13: " + result3 + "<br>";
    document.getElementById("RuleEqualityResult4").innerHTML = "Result 14: " + result4 + "<br>";
    }

function demonstrateLogicalOperators() { // Utilizing the AND operator to display true and false.
    var andResult1 = (6 < 12 && 12 > 2);  // true
    var andResult2 = (8 > 20 && 6 < 1);   // false

    // Utilize the OR operator to display true and false.
    var orResult1 = (5 < 10 || 10 > 2);  // true
    var orResult2 = (8 > 15 || 3 < 1);   // false

    // Display the results in their respective divs
    document.getElementById("logicalAndResult1").innerHTML = "Result 15: " + andResult1 + "<br>";
    document.getElementById("logicalAndResult2").innerHTML = "Result 16: " + andResult2 + "<br>";

    document.getElementById("logicalOrResult1").innerHTML = "Result 17: " + orResult1 + "<br>";
    document.getElementById("logicalOrResult2").innerHTML = "Result 18: " + orResult2 + "<br>";
}

function not_Function() {
    document.getElementById("Not").innerHTML = !(5 > 10);
}

function wont_Function() {
    document.getElementById("Wont").innerHTML = !(20 > 10);
}
