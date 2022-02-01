function setTimeOut(duration) {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(), duration);
  });
}

setTimeOut(2000)
  .then(() => {
    console.log("first then");
    return 123;
  })
  .then((data) => {
    console.log("second then: " + data);
    return setTimeOut(3000);
  })
  .then(() => {
    console.log("Third then");
  });
