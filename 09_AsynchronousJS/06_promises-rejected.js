// Let make a call to incorrect url,so that It will throw a rejected promise
// Every then block accepts 2-parameters
// 1st- Is executed when the parents promise is resolved
// 2nd- Is executed when the parents promise is rejected
// To execute the 1st parameter of a then-block, it's immediate parent should yield a promise,orelse it won't be executed
// Any of the prior promise fails, the closest 2nd parameter, which handles rejection is executed
// This closest 2nd Parameter might be available in the immediate then-block or in the subsequent then-blocks.It will search and executed
// Any then-block, either resolved or rejected, yields a promise to its sub-sequent then-blocks
// To throw a reject/error from a then block we need to use ` throw new Error() ` statement
fetch("https://jsonplaceholder.typicode/todos/1", {})
  .then(
    (response) => {
      console.log("First then block resolved");
      //   return response.json();
    },
    (err) => {
      console.log("First then block rejected");
      //   return err;
    }
  )
  .then(
    (data) => {
      console.log("Second then block resolved");
      //   console.log(data);
    },
    (err) => {
      console.log("Second then block rejected: " + err);
    }
  );

/**********************************************************************/
// To throw a reject/error from a then block we need to use ` throw new Error() ` statement
fetch("https://jsonplaceholder.typicode/todos/1", {})
  .then(
    (response) => {
      console.log("First then block resolved");
    },
    (err) => {
      console.log("First then block rejected");
      throw new Error(); // this will yield a rejected promises
    }
  )
  .then(
    (data) => {
      console.log("Second then block resolved");
      //   console.log(data);
    },
    (err) => {
      console.log("Second then block rejected: " + err); // this line will be executed
    }
  );

/**********************************************************************/
// then() and catch()
// Instead of the 2nd-parameter which we discussed above
// we have an alternative to use catch()
// catch(), will be executed if any of it's prior then-block or promises fails

fetch("https://jsonplaceholder.typicode/todos/1", {})
  .then((response) => {
    console.log("First then block resolved");
    return response;
  })
  .catch(() => {
    console.log("Failed!"); // o/p
  });

//Catch(), will always yield a promise. hence any of its subsequent then-block will be resolved (if any)

fetch("https://jsonplaceholder.typicode/todos/1", {})
  .then((response) => {
    console.log("First then block resolved");
    return response;
  })
  .catch(() => {
    console.log("Failed!");
  })
  .then(() => {
    console.log("Second then block subsequent catch resolved");
  });

// Some times we add catch() as the last block of a promise so that if any prior promises are reject
// This last catch() will be executed

fetch("https://jsonplaceholder.typicode/todos/1", {})
  .then((response) => {
    console.log("First then block resolved");
    return response;
  })
  .then(() => {
    console.log("Second then block subsequent catch resolved");
  })
  .catch(() => {
    console.log("Failed!");
  });
