const buttonIncrement = document.getElementById("increment");
const buttonDecrement = document.getElementById("decrement");
const countNumber = document.getElementById("counter");

let count = 0;

function increaseNumber() {
  if (count >= 10) {
    alert("counting can not exceed 10");
    return;
  }
  count++;
  countNumber.innerText = count;
}

function decreaseNumber() {
  if (count === 0) {
    alert("the counting cannot be negative");
    return;
}
  count--;
  countNumber.innerText = count;
}

buttonIncrement.addEventListener("click", increaseNumber);
buttonDecrement.addEventListener("click", decreaseNumber);
