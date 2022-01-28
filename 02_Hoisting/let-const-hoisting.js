"use strict";
console.log(myName); // Error
let myName = "Max";

console.log(myAge); // Error
const myAge = 21;

//'use strict' , won't allow hoisting even for var
console.log(subject);
var subject = "JavaScript"; // Error
