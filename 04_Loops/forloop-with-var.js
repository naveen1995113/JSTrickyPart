var i = 10;
for (var i = 0; i < 5; i++) {
  console.log(i); // 0,1,2,3,4
}
console.log("outside loop: " + i); // 5 , this is due to var , global scoped
