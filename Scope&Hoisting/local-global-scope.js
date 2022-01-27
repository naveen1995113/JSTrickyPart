//What is Scope?
//Scope is about the "Visibility of Variables"

var myAge = 31; //global scope

function greet() {
  var myName = "Max"; //local scope (function scope)
  function pritInfo() {
    console.log("Hello " + myName);
    console.log("I am " + myAge + " years old.");
  }
  pritInfo();
}

greet();
console.log(myName); //error
