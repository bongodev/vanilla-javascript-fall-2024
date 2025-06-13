let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');

function increaseCount() {
  if (count === 10) {
    alert('Count overflow!');
    return;
  }
  count++;
  counterElement.innerText = count;
}
function decreaseCount(){
    if (count === 0) {
        alert('Count will be negative');
      } else {
        count--;
        counterElement.innerText = count;
      }
}
function resetCount(){
    count=0;
    counterElement.innerText=count;
}

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click',decreaseCount);
resetButton.addEventListener('click',resetCount);