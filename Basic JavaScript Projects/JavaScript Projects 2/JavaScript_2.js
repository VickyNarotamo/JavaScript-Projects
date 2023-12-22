function validateForm() {
    let fname = document.forms["myForm"]["fname"].value;
    let lname = document.forms["myForm"]["lname"].value;

    if (fname == "") {
        alert("First name must be filled out");
        return false;
    }

    if (lname == "") {
        alert("Last name must be filled out");
        return false;
    }
    return true;
}