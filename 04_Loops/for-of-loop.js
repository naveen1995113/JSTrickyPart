//for-of, loop through only arrays.
//for-of, works well with arrays

const student = {
  name: "Max",
  id: "15",
};

// for (const val of student) {
//      console.log(val); // Error , student is not iterable
// }

// for (const val of Object.entries(student)) {
//   console.log(val); // ['name','Max']
//   // ['id','15']
// }

for (const val of Object.keys(student)) {
  console.log(val); // name id
}

for (const val of Object.values(student)) {
  console.log(val); // Max 15
}
/****************************************************** */
const numbers = [1, 2, 3, 4, 5];
for (const val of numbers) {
  console.log(val); // 1 2 3 4 5
}
for (const key in numbers) {
  console.log(key); // 0 1 2 3 4
}
