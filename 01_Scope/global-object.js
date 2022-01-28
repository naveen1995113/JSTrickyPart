//global object/context(i.e.windows)

var myName = "Max"; // A variable declared with var is added to the gloabl object/context

console.log(this.myName); // Max
console.log(self.myName); // Max, self is a latest notation of this-keyword

function printAge() {
  console.log("I am 26 years old");
}

this.printAge(); // I am 26 years old
self.printAge(); // I am 26 years old

/*******************************************/

let subject = "JavaScript";
console.log(subject); // Javascript
console.log(this.subject); // undefined,
console.log(this.subject); // undefined
// since let is defined under block scope(global scope),but not assigned to global object/context

const printRole = function () {
  console.log("Author");
};
printRole(); // Author
this.printRole(); // Error
self.printRole(); //  Error
// since function expression printRole is assigned to const
// const is defined under block scope(global scope), but not assigned to global object/context
