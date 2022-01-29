const books = [
  { name: "Atomic Habits", author: "James Clear", price: 100 },
  { name: "The Psychology of Money", author: "Morgan Housel", price: 150 },
  { name: "Rich Dad Poor Dad", author: "Robert Kiyosaki", price: 125 },
  { name: "Ikigai", author: "Hector Garcia", price: 500 },
  {
    name: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    price: 250,
  },
];
console.log("---map---");
//map: return an array
const bookNames = books.map((book) => {
  return book.name;
});
console.log(bookNames);

console.log("---filter---");
//filter: return a list of books which are under r.s.150
const listOfBooks = books.filter((book) => {
  return book.price < 150;
});
console.log(listOfBooks);

console.log("---find---");
//find: return  a book which name is Ikigai
const findIkigai = books.find((book) => {
  return book.name === "Ikigai";
});
console.log(findIkigai);

console.log("---forEach---");
//forEach: unlike above methods this one does not return any value
books.forEach((book) => {
  console.log("Author Name: " + book.author);
});

console.log("---some---");
//some(): instead of returning an array it will return a boolean either true or flase
//some(): If any one of the items in the array satifies the condition it will return true
const ifArrayHasAtomicHabitsBook = books.some((book) => {
  return book.name === "Atomic Habits";
});
console.log(ifArrayHasAtomicHabitsBook); // true

console.log("---every---");
//every(): instead of returning an array it will return a boolean either true or flase
//every(): All the items in the array should satify the condition then it will return true
const hasInexpensiveItems = books.every((book) => {
  return book.price <= 1000;
});
console.log(hasInexpensiveItems); // true

console.log("---reduce---");
//reduce(); returns a cumulative value from an array
//reduce-callback function accepts two parameters as shown below
//1st parm: It will have the value of each iteration
//2nd parm: It will be the item in the array on which we are looping
// default value:  the value which we give after comma in this it is 0.
//this values 0 serves as default value of the currentTotal value
const total = books.reduce((currentTotal, book) => {
  return book.price + currentTotal;
}, 0);
console.log(total);
