function setTimeOut(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject(); // this promise is always rejected
    }, duration);
  });
}

setTimeOut(2000)
  .then((response) => {
    console.log("First then block resolved!");
    return response;
  })
  .then(() => {
    console.log("Second then block resolved!");
    return setTimeOut(3000);
  })
  .catch(() => {
    console.log("An error occured");
  })
  .then(() => {
    console.log("This block is executed since catch always yields promise");
  });
