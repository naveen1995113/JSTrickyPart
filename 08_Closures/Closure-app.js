//Closures : Every Function is a Closure
// A Closure is the combination of a function with its "lexical environment"(the variables inscope)
// function createGreeter() {
//   const myName = "Max";
//   return function () {
//     console.log(myName);
//   };
// }

// const greet = createGreeter();
// greet();

function createGreeter(myName) {
  return function () {
    setTimeout(function () {
      console.log(myName);
    }, 1000);
    // myName = "Manu";
  };
}
const greetMax = createGreeter("Max");
const greetManu = createGreeter("Manu");
greetMax();
// greetManu();
