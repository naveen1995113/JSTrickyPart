//Recursion: Is a process of functional calling itself

// console.log(factorial(3)); // 3*2*1=6
console.log(factorial(4)); // 4*3*2*1=24

/*****without recursion*****/

// function factorial(n) {
//   let result = 1;
//   for (let i = 0; i < n; i++) {
//     result = result * (n - i);
//   }
//   return result;
// }

/*****with recursion*****/

function factorial(n) {
  return n === 0 ? 1 : n * factorial(n - 1);
  //   if (n === 0) {
  //     return 1;
  //   }
  //   return n * factorial(n - 1);
}
