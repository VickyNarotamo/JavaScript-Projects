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