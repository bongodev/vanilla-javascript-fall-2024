const compBtn = document.getElementById("compare");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
let res = "";
const errorClass = "border-red-500";

function reset() {
  num1.classList.remove(errorClass);
  num2.classList.remove(errorClass);
  result.innerHTML = "";
}

function validInputs() {
  reset();
  if (num1.value === "") {
    num1.classList.add(errorClass);
    return false;
  }
  if (num2.value === "") {
    num2.classList.add(errorClass);
    return false;
  }
  return true;
}

compBtn.addEventListener("click", function () {
  if (!validInputs()) {
    result.innerHTML = "Enter both numbers!!";
    return;
  }
  const number1 = parseInt(num1.value);
  const number2 = parseInt(num2.value);

  if (number1 < number2) res = `${number1} is less than ${number2}`;
  else if (number1 > number2) res = `${number1} is greater than ${number2}`;
  else res = `${number1} is equal to ${number2}`;
  result.innerHTML = res;
});

resetBtn.addEventListener("click", function () {
  num1.value = "";
  num2.value = "";
  reset();
  result.innerHTML = "";
});
