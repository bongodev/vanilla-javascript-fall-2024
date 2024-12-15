let count = 0;

const increaseButton = document.getElementById("increment");
const decreaseButton = document.getElementById("decrement");
const counterElement = document.getElementById("counter");

function increaseCount() {
  count = count + 1;
  counterElement.innerText = count;
}

function decreaseCount() {
  if (count > 0) {
    count = count - 1;
    counterElement.innerText = count;
  } else {
    count = 0;
    counterElement.innerText = count;
  }
}

increaseButton.addEventListener("click", increaseCount);

decreaseButton.addEventListener("click", decreaseCount);
