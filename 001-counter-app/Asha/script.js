count = 0;

const counterDisplay = document.getElementById("counter");
const incrementButton = document.getElementById('increment');
function incrementCounter() {
    if(count === 10){
        alert("Counter has reached its maximum value of 10!");
        return;
    }
    count++;
    counterDisplay.innerText = count;
}

incrementButton.addEventListener('click', incrementCounter);

const decrementButton = document.getElementById("decrement");
function decrementCounter() {
    if(count === 0){
        alert("Counter cannot go below 0!");
        return;
    }
    count--;
    counterDisplay.innerText = count;
}
decrementButton.addEventListener("click", decrementCounter);

const resetButton = document.getElementById("reset");
function resetCounter(){
    count = 0;
    counterDisplay.innerText = count;
}
resetButton.addEventListener("click",resetCounter);