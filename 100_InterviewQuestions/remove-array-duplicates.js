//using for loop
let a = [1, 2, 3, 1, 2, 5, 6, 7, 8, 9, 3, 4];
console.log("----type1 for loop----");
let b = [];
let len = a.length;
for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i]);
  }
}

console.log(b);

console.log("----type2 Set datatype----");
//using set data type
let c = [...new Set(a)];
console.log(c);

console.log("----type3 filter method----");
//using filter
let d = a.filter(function (item, index) {
  return a.indexOf(item) == index;
});
console.log(d);
