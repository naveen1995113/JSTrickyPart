var num1 = 61;
var num1 = 65;
console.log("num1: " + num1); // 35 ,works with var

/************************************************ */
const num2 = 31;
// const num2 = 35;
console.log("num2: " + num2); // Error, doesn't work with let or const

/************************************************ */
var myAge1 = 11;
function printAge1() {
  var myAge1 = 15; // shadowing
  console.log("Age1: " + myAge1); // 35
}
printAge1();
/************************************************ */
const myAge2 = 21;
function printAge2() {
  let myAge2 = 25; // shadowing
  console.log("Age2: " + myAge2); // 35
}
printAge2();
