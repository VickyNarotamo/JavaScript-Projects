const val = () => {
    document.getElementById("output").innerHTML = "Hello World!";
};

val();

const words = ["banana", "orange", "apple", "grape", "kiwi"];
let someContainApple = words.some(checkForApple);

document.getElementById("show").innerHTML = "Some words contain 'apple': " + someContainApple;

function checkForApple(value, index, array) {
  return value.includes("apple");
}