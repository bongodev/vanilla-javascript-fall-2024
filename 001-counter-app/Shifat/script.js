// Md. Shifat Bin Reza

let counter = 0;

const counterElement = document.getElementById("counter");
const incrementButtonElement = document.getElementById("increment");
const decrementButtonElement = document.getElementById("decrement");
const resetButtonElement = document.getElementById("reset");

function displayCounter() {
  counterElement.innerHTML = counter;
}

function increment() {
  if (counter === 10) {
    alert("Overflow");
    return;
  }

  counter++;
  displayCounter();
}

function decrement() {
  if (counter === 0) {
    alert("Number will be negative");
    return;
  }

  counter--;
  displayCounter();
}

function reset() {
  counter = 0;
  displayCounter();
}

incrementButtonElement.addEventListener("click", increment);
decrementButtonElement.addEventListener("click", decrement);
resetButtonElement.addEventListener("click", reset);
