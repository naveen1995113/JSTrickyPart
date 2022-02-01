addItems(5, 4, (res) => {
  console.log(res);
});

function addItems(num1, num2, cb) {
  const result = num1 + num2;
  cb(result);
}
