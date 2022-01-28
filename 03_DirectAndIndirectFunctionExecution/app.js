const bombTimerEl = document.querySelector("#bomb h2");
const defuseButton = document.querySelector("button");

const availableTime = 5 * 1000; // 5 seconds in milliseconds

let bombTimer;
let remainingTime = availableTime;

// Indirect Function Execution
// To pass parameters we use bind() property available in JS
defuseButton.addEventListener("click", defuse.bind(null, "You won!"));

init("Game on!"); // Direct Function Execution

function defuse(successMessage) {
  clearInterval(bombTimer);
  console.log(successMessage); // You won!
}

function updateTimer() {
  bombTimerEl.textContent = remainingTime / 1000;
}

function init(message) {
  console.log(message); // Game on!
  updateTimer();
  bombTimer = setInterval(function () {
    remainingTime = remainingTime - 1000;
    if (remainingTime <= 0) {
      console.log("You lost!");
      clearInterval(bombTimer);
      return;
    }
    updateTimer();
  }, 1000);
}
