let count = 0;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function increaseCount() {
  count++;
  counterElement.innerText = count;
}

function dcreaseCount() {
  count--;
  counterElement.innerText = count;
}

incrementButton.addEventListener("click", increaseCount);
decrementButton.addEventListener("click", dcreaseCount);
