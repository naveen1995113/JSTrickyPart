//Forin: this is used to loop through keys of an object
const user = { name: "Max", age: "30" };

for (const key in user) {
  //   console.log(key); // name age
  //   console.log(user[key]); // Max 30
}

//Forin: It a also considers function as a property

const person = {
  name: "Nic",
  age: "23",
  greet: function () {
    console.log("Hello");
  },
};

for (const key in person) {
  //   console.log(key); // name age greet
  //   console.log(person[key]);
}

//For in not just loops thorugh the keys of an object propetries.
//Instead, it also loops through the keys of properties of its(=objects) inherited object's properties
//To overcome this , we have special property in JS , which will help in resulting only the objects own property
//i.e. .hasOwnProptery(key) as shown below
const student = {
  name: "Petr",
  id: "15",
};
// student._proto_.test = 5;
for (const key in student) {
  if (student.hasOwnProperty(key)) {
    console.log(key); //  name id
    console.log(student[key]);
  }
}
