for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 500);
}

// In the above loop, for all 5 Iteration, we create 5 anonymous functions
// Since var is global scope and for loop will be executed less than ~10 milli seconds
// the value of i by the time is 500 milliseconds will be the last value of i i.e. 5
// Since we have created 5 anonymous functon for every iteration, we have five i's stored in memory
// These i's will be executed after 500 milliseconds, Hence the output of above loop will be
// 5 printed 5-times (i.e. 5 5 5 5 5) => This is due to CLOSURES, they lock in the name of the variables not their value

//To fix the above issue, we have can use the below 2 solutions
//First Solution
for (var a = 0; a < 5; a++) {
  //IIFE
  (function () {
    var b = a;
    setTimeout(function () {
      console.log(b);
    }, 500);
  })();
}

// We wrapped the anonymous function, with in an IIFE Immediately Invoked Functional Expression.
// This IIFE, create an enviroment around our inner setTimout anonymous function.
//IIFE,creates and excutes immediatedly, hence this helps closure not to just store the name of the variable
//But also to memorize its value.
//Hence, after 500 milliseconds when the anonymous function executes it will output the memorized values
// prints 0 1 2 3 4 as output

//Second Solution
for (let x = 0; x < 5; x++) {
  setTimeout(function () {
    console.log(x);
  }, 500);
}

//Since let is block scope, for each iteration, a new x with a new enviroment around the anonymous function will be create
//Each x will have different value store in place.
//Hence, it return 0 1 2 3 4
//Though this seems similar to var, but in JavaScript this a one special case where let behaves a bit differently
