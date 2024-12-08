let count = 0;
const counterElement = document.getElementById("counter");
const incrementButton = document.getElementById("increment");
const decrementButton = document.getElementById("decrement");

const increaseCount = () => {
  if (count >= 10) {
    alert(`Count can not be greater or equal to 10.OverFlow problem`);
    return;
  } else {
    count = count + 1;
  }
  counterElement.innerText = count;
};

incrementButton.addEventListener("click", increaseCount);

const decreaseCount = () => {
  if (count == 0) {
    alert(`underflow`);
    return;
  } else {
    count = count - 1;
  }

  counterElement.innerText = count;
};
decrementButton.addEventListener("click", decreaseCount);
