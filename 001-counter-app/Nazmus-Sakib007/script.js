let count = 0;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

function increaseCount() {
  if(count === 10){
    alert("Stop , Count is too much.");
    return
  }  
  
  count++;
  counterElement.innerText = count;
}

function dcreaseCount() {
  if (count <= 0){
   alert("Stop, Count will be going to Negative.");
  } else{
  count--;
  counterElement.innerText = count;
  }
}

incrementButton.addEventListener("click", increaseCount);
decrementButton.addEventListener("click", dcreaseCount);

