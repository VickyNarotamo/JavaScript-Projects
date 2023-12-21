function Ride_Function() {
    var Height, Can_ride;
    Height = document.getElementById("Height").value; 
    Can_ride = (Height < 52) ? "You are too short" : "You are tall enough"; 
    document.getElementById("ride").innerHTML = Can_ride + " to ride."; 
}

function checkVotingEligibility() {
    var age = document.getElementById("userAge").value;
    var votingStatus = (age >= 18) ? "You can vote!" : "You are not old enough to vote";
    document.getElementById("votingStatus").innerHTML = votingStatus;
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " +Erik.Vehicle_Model + 
    " manufactures in " + Erik.Vehicle_Year;
}

function displayReservedWord() {
    // Use a different variable name instead of a reserved word
    var reservedWord = "Reserved Word";
    document.getElementById("reservedWordShowcase").innerHTML = reservedWord;
}

function intentionalError() {
    // Attempting to log an undefined variable
    try {
        console.log(undefinedVariable); // Replace with a non-existent variable || If replaced with a reserved word such as Const There will be errors.
    } catch (error) {
        console.error("Error:", error.message);
    }
}

function NewAndThis() {
    var exampleObject = {
        property1: Jack.Vehicle_Make,
        property2: Jack.Vehicle_Model,
        property3: Jack.Vehicle_Color,
        property4: Jack.Vehicle_Year,
        Info: function() {
            document.getElementById("New_and_This").innerHTML =
                "Vehicle Make: " + this.property1 + "<br>" +
                "Vehicle Model: " + this.property2 + "<br>" +
                "Vehicle Color: " + this.property3 + "<br>" +
                "Vehicle Year: " + this.property4;
        }
    };
    exampleObject.Info(); // calling method info when button is clicked
}

function count_Function() {
    document.getElementById("Nested_Function").innerHTML = Count();
    function Count() {
    var Starting_point = 9;
    function Plus_one() {Starting_point += 1;}
    Plus_one();
    return Starting_point;
    }
}