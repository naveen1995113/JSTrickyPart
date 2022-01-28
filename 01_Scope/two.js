console.log(myName); // Max , defined with var hence added to global object/context
console.log(this.myName); // Max
console.log(self.myName); // Max

console.log(myAge); // 31 , defined with const hence added to global scope
console.log(this.myAge); // Error ,
// defined with const hence added to global scope,but not added to global object/context
console.log(self.myAge); // Error
