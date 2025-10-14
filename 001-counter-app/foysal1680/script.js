let count = 0;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function updateCounter() {
  counterElement.innerText = count;
}

incrementButton.addEventListener("click", function () {
  count++;
  updateCounter();
});

decrementButton.addEventListener("click", function () {
  count--;
  updateCounter();
});
