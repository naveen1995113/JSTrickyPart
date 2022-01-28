function printAge(age) {
  console.log("I am " + age); // 31
}
printAge(31);
// console.log(age); // Error, age is functional/local scoped
/***************************************************/
function printName(name) {
  console.log("Hello " + name); // 'Max'
}
printName("Max");
// console.log(name); // prints nothing, no Error too, since 'name' is a special keyword in JS
/***************************************************/
function printDetails(age) {
  function print(name) {
    console.log("Hey " + name); // Hello Ram
    console.log("I am " + age + " years old"); // I am 26 years old
  }
  print("Petr");
}
printDetails(25);
/***************************************************/
// for (var i = 0; i < 10; i++) {
//   console.log(i); // 0,1,2,3,4,5,6,7,8,9
// }

// console.log(i); // 10 , var is global scoped when not defined inside a function
/***************************************************/
for (let i = 0; i < 10; i++) {
  console.log(i); // 0,1,2,3,4,5,6,7,8,9
}

// console.log(i); // Error, let is block scoped
/***************************************************/

try {
  throw new Error();
} catch (err) {
  var text1 = "Does it work?"; // global scoped
  const text2 = "It thowns an issue"; // block scoped
  console.log(err);
}
console.log(text1); // Does it work
confirm.log(text2); // Error, const is block scoper
console.log(err); // Error
// Event though try-catch exists before the concept of block sope in javascript
// The varaible err is not accessible outside of catch blockß
