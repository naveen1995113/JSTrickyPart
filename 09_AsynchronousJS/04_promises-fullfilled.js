// Creating Promise
// Promises are resolved only once
const myPromise = new Promise(function (resolve, reject) {
  // resolve and reject are functions by themselves
  setTimeout(() => {
    resolve("It worked!");
  }, 2000);
  //   resolve("Promise is resolved!"); // Promises are resolved only once
});
//then's are executed in sequensital order.
myPromise
  .then((successMessage) => {
    console.log("first then: " + successMessage);
    return 123;
  })
  .then((data) => {
    console.log("second then: " + data);
    return myPromise; // Promises are resolved only once
  })
  .then((result) => {
    console.log("third then: " + result);
    return result;
  });

// using a promise API called fetch

fetch("https://jsonplaceholder.typicode.com/todos/1", {})
  .then((response) => response.json())
  .then((data) => console.log(data));
