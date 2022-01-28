// precedence in javascript
// precedence is the priroties assigned by JS
/********************************************** */
// Value assigned has high priority than function hositing

var username = "Max"; // value assigned

function username() {
  console.log("this is my name");
}

console.log(username);

//output : Max (due to precedence)
/********************************************** */
// function hoisted has high priority than value decleration.

var username;

function username() {
  console.log("this is my name");
}

console.log(username);
//output : f:username(){} (due to precendence)
