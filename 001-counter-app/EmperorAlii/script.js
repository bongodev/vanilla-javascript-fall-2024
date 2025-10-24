// Get the buttons and counter display element
let increaseButton = document.getElementById("increment");
let decreaseButton = document.getElementById("decrement");

// Initialize current value and counter tracker
let currentValue = document.getElementById("counter").innerText;
let countTracker = document.getElementById("counter");

// Set up event listeners for the buttons
increaseButton.addEventListener("click", Increment);
decreaseButton.addEventListener("click", Decrement);

// Define the Increment and Decrement functions
function Increment() {
  currentValue++;
  countTracker.innerText = currentValue;
}

function Decrement() {
  // Prevent decrementing below zero
  if (currentValue > 0) currentValue--;
  else alert("Negative Number not allowed");
  countTracker.innerText = currentValue;
}
