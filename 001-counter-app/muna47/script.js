var counterVar = document.getElementById("counter");

const incrementButton = document.getElementById("increment");
function increment() {
  let current = parseInt(counterVar.innerText, 10);
  if (current < 10) counterVar.innerText = current + 1;
  else alert("count cannot be greater than 10");
}
incrementButton.addEventListener("click", increment);

const decrementButton = document.getElementById("decrement");
function decrement() {
  let current = parseInt(counterVar.innerText, 10);
  if (current > 0) counterVar.innerText = current - 1;
  else alert("count cannot be less than 0");
}
decrementButton.addEventListener("click", decrement);

const resetButton = document.getElementById("reset");
function reset() {
  counterVar.innerText = "0";
}
resetButton.addEventListener("click", reset);
