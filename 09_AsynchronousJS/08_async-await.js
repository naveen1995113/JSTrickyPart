// async-await :Syntactical sugar for promises
// currently, async-await only works in functions
// In order to handle errors in async-await we need to use try-catch blocks
async function sendRequest() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode/todos/1",
      {}
    );
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
sendRequest();
