const subject = "JavaScript"; // block scope,similar to global scope

if (true) {
  //var myAge = 31; // global scope
  let myAge = 31; // block scope

  console.log(myAge); // 31
  console.log(subject); // JavaScript
}

// console.log(myAge); // Error, let is block scoped

{
  // This is a block
  const myName = "Max"; // block scoped
}
console.log(myName); // Error, const is block scoped
