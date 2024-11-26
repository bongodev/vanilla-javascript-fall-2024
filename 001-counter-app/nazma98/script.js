let count = 0;
const incrementElement = document.getElementById("increment");
const decrementElement = document.getElementById("decrement");
const counterElement = document.getElementById("counter");

function increaseCount() {
    if(count === 10) {
        alert("Overflow!");
    }
    count = count + 1;
    counterElement.innerText = count;
}

function decreaseCount() {
    if(count === 0) {
        alert("Count will be negative");
    }
    count = count - 1;
    counterElement.innerText = count;
}

incrementElement.addEventListener('click', increaseCount);
decrementElement.addEventListener('click', decreaseCount);

