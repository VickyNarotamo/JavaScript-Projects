function full_Sentence() {
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence. ";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {
    var Sentence = "All study and no recreation makes Sarah a dull person."
    var Section = Sentence.slice(34,39);
    document.getElementById("Slice").innerHTML = Section;
}

function convertToUpperCase() {
    var originalString = document.getElementById("originalString").innerHTML;
    var uppercaseString = originalString.toUpperCase();
    document.getElementById("result").innerHTML = uppercaseString;
}

function searchForWord() {
    var content = document.getElementById("content").innerHTML;
    var searchWord = document.getElementById("searchInput").value;
     var pattern = new RegExp(searchWord, "i");
    var searchResult = content.search(pattern);
     if (searchResult !== -1) {
        document.getElementById("searchResult").innerHTML = "Word found at index: " + searchResult;
    } else {
        document.getElementById("searchResult").innerHTML = "Word not found.";
    }
}

function string_Method(){
    var x = 576;
    document.getElementById("Numbers_to_string").innerHTML = x.toString();
}

function precision_Method () {
    var x =           12232.39493084308434;
    document.getElementById("Precision").innerHTML = x.toPrecision(10);
}

function fixed_Method() {
    var num = 192.437389;
    var fixedNumber = num.toFixed(2);
    document.getElementById("FixedNumber").innerHTML = "Fixed Number: " + fixedNumber;
}

function valueOf_Method() {
    var num = new Number(29);
    var primitiveValue = num.valueOf();
    document.getElementById("ValueOfResult").innerHTML = "Primitive Value: " + primitiveValue;
}

