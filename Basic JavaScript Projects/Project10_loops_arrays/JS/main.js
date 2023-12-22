function Call_Loop() {
    var Digit ="";
    var X = 1;
    while (X < 11) {
        Digit += "<br>" + X;
        X++;
    }
    document.getElementById("Loop").innerHTML = Digit;
}

// Calculate the length of a string
let exampleString = "Hello World!";
let stringLength = exampleString.length;
document.getElementById("stringLength").innerHTML = "The length of '" + exampleString + "' is: " + stringLength;

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "violion", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop () {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function cat_pics() {
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In this picture, the cat is " + Cat_Picture[2] + ".";
}

function Constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"Fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "&pound;900";
    document.getElementById("Constant").innerHTML = "The cost of the " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

var X = 82;
document.getElementById("output").innerHTML =X;
{
    let X = 33;
    document.getElementById("output").innerHTML +="<br>" + X;
}
document.getElementById("output").innerHTML +="<br>" + X;

function multiplyNumbers(a, b) {
    return a * b;  // Return statement to return the result once calculated
}
document.getElementById("output").innerHTML = "Result of multiplication: " + multiplyNumbers(5, 8); // Calling function and displaying the result in aHTML

let anime = {
    title: "Attack on Titan",
    author: "Hajime Isayama",
    genre: ["Dark Fantasy", "Action", "Horror"],
    year: 2009,
    description: function() {
        return "The anime is titled '" + this.title + "', written by " + this.author + ". It belongs to the " + this.genre.join(", ") + " genre and was published in " + this.year + ".";
    }
};

document.getElementById("Anime_Object").innerHTML = anime.description();

function Break_function() { // Break Statement Example
let breakText = "";
for (let i = 0; i < 7; i++) { 
    if (i === 4) {
        break;
    }
    breakText += "Breaking at " + i + "<br>";
}
document.getElementById("BreakExample").innerHTML = breakText;
}

function Continue_function() { // Continue Statement Example
let continueText = "";
for (let i = 0; i < 7; i++) {
    if (i === 2 || i === 5) {
        continue;
    }
    continueText += "Continuing at " + i + "<br>";
}
document.getElementById("ContinueExample").innerHTML = continueText;
}
