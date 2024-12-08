let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('Increment');
const resetButton = document.getElementById('reset');
function increaseCount() {
    if (count == 10) {
        alert('Overflow');
    }
    else {
        count = count + 1;
        counterElement.innerText = count;
    }
}
incrementButton.addEventListener('click', increaseCount);
function decreaseCount() {
    if (count == 0) {
        alert('Count can not be negative');
    }
    else {
        count = count - 1;
        counterElement.innerText = count;
    }
}
function reset() {
    count = 0;
    counterElement.innerText = count;
}
resetButton.addEventListener('click', reset)

const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', decreaseCount);