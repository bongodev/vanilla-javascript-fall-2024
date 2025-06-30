var counterVar = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");

let current = parseInt(counterVar.innerText, 10);

incrementButton.addEventListener("click", function () {
  if (current < 10) counterVar.innerText = ++current;
  else alert("count cannot be greater than 10");
});

decrementButton.addEventListener("click", function () {
  if (current > 0) counterVar.innerText = --current;
  else alert("count cannot be less than 0");
});

resetButton.addEventListener("click", function () {
  counterVar.innerText = "0";
});
