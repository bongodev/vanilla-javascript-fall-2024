let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');

function increaseCount() {
  count++;
  counterElement.innerText = count;
}

incrementButton.addEventListener('click', increaseCount);
