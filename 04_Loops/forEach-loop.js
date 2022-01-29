//forEach : It is method which is available on every array
//It is bit of a worst performer when compare to remaining array loops like for-of or for-loop
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num, index, arr) {
  console.log("value: " + num);
  console.log("index: " + index);
  //   console.log("arr: " + arr);
});
