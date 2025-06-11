const increaseButton = document.getElementById("increment");
const decreaseButton = document.getElementById("decrement");
const resetButton = document.getElementById("reset");
const counterDisplay = document.getElementById("counter");
console.log(increaseButton);
let counter =0;

function increment() {
    if(counter < 12) {
    counter ++;
    counterDisplay.textContent = counter ; }
}

function decrement() {
    if(counter > 0) {
    counter --;
    counterDisplay.textContent = counter ; }
}

function reset () {
    counter = 0;
    counterDisplay.textContent = counter;
}
increaseButton.addEventListener("click" ,increment);
decreaseButton.addEventListener("click", decrement);
resetButton.addEventListener("click", reset);
