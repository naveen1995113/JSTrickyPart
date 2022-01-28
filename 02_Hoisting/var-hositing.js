// Hoisting : Bringing to the top
// Declerations are hoisted not definitions
// Varibales declaration is hoisted(partially hoisted)
// Function declaration is hoisted
//Hoisting also happens inside the function

/*******************************/
// Function declaration is hoisted

greet();

function greet() {
  console.log("Hi There!"); // Hi There!
}

/*******************************/
// Varibales declaration is hoisted(partially hoisted)
console.log(myName); // undefined

var myName = "Max";

/*******************************/
console.log(printAge); // undefined
printAge(); // Error , since printAge is a variable

var printAge = function () {
  console.log("I am 26");
};


//Hoisting also happens inside the function
/************************/

printHobbies();

function printHobbies() {
  console.log(hobbies); // undefined

  var hobbies = ["Sports", "Movies"];