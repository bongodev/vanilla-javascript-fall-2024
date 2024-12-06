let count = 0;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

const increaseCount = () => {
  count = count + 1;
  counterElement.innerText = count;
};

incrementButton.addEventListener("click", increaseCount);

const decreaseCount = () => {
  count = count - 1;
  counterElement.innerText = count;
};
decrementButton.addEventListener("click", decreaseCount);
