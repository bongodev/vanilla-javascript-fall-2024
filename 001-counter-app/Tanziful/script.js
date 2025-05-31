let counter = 0;

const CounterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");
const resetButtonelemnent = document.getElementById("reset");

function incrementCounter() {
  counter++;
  CounterDisplay.innerText = counter;
}

incrementButton.addEventListener("click", incrementCounter);
decrementButton.addEventListener("click", function () {
  //if counter is equal to 0,donot decrement
  if (counter == 0) {
    alert("counter will be negative");
    return;
  }
  counter--;
  CounterDisplay.innerText = counter;
});
function reset() {
  counter = 0;
  CounterDisplay.innerText = counter;
}
resetButtonelemnent.addEventListener("click", reset);

//alert

function decrement() {
  alert("Decrement button has been clicked!");
}
function increment() {
  alert("Increment button has been clicked!");
}
decrementButton.addEventListener("click", decrement);
incrementButton.addEventListener("click", increment);
