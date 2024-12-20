let count = 0;

const increaseButton = document.getElementById("increment");
const decreaseButton = document.getElementById("decrement");
const counterElement = document.getElementById("counter");

function increaseCount() {
  if (count === 10) {
    alert("Count overflow");
    return;l
  }
  count++;
  counterElement.innerText = count;
}

function decreaseCount() {
  if (count === 0) {
    alert("The count will not be negative");
    return;
  }
  count--;
  counterElement.innerText = count;
}

increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
