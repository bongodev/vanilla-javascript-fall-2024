let count = 0;
const counterElement = document.getElementById('counter');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');

function increaseCount() {
  if(count>=10)
  {
    alert("The max count can't exceed 10");
  }
  else{
  count = count + 1;
  counterElement.innerText = count;}
}

incrementButton.addEventListener('click', increaseCount);

function decreaseCount() {
  if(count === 0)
  {
    alert("The count can't be negative");
  }
  else{
  count = count - 1;
  counterElement.innerText = count;}
}

decrementButton.addEventListener('click', decreaseCount);
