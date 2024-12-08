console.log('JavaScript added');
let titleElement = document.getElementById('title');
titleElement.innerText = 'Counter App';

let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function increaseCount() {
  if (count === 10) {
    alert('Count overflow!');
  }
  else{
  count++;
  counterElement.innerText = count;    
  }

}

incrementButton.addEventListener('click', increaseCount);
decrementButton.addEventListener('click', function () {
  if (count === 0) {
    alert('Count will be negative');
  } else {
    count--;
    counterElement.innerText = count;
  }
});