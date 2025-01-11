const incrementBtn = document.getElementById('increment');
const decrementBtn = document.getElementById('decrement');
const counterElement = document.getElementById('counter');

let count = 0;

incrementBtn.addEventListener('click', () => {
  count++;
  counterElement.textContent = count;
});

decrementBtn.addEventListener('click', () => {
  if (count === 0) {
    alert('Count can not be negetive');
  } else {
    count--;
    counterElement.textContent = count;
  }
});
