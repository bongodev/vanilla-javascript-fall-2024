let counter = 0;

const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");

function incrementCounter() {
if (counter === 10) {
    alert("Counter can not be negative");
    return;

}

counter = counter + 1;
counterDisplay.innerText = counter;

}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', function () {
    if (counter === 0) {
        alert("Counter can not be negative");
        return;
    }
    counter = counter - 1;
    counterDisplay.innerText = counter;

})
