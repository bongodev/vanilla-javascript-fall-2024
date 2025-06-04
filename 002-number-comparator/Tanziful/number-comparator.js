const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

const ERROR_CLASS = "border-red-500";
function resetStyles() {
  firstInput.classList.remove(ERROR_CLASS);
  secondInput.classList.remove(ERROR_CLASS);
  result.innerText = "";
}

//if there is no value the border will be red
function isValidInput() {
  resetStyles();
  if (firstInput.value === "") {
    firstInput.classList.add(ERROR_CLASS);
    return false;
  }
  if (secondInput.value === "") {
    secondInput.classList.add(ERROR_CLASS);
    return false;
  }
  return true;
}

compareButton.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }
  // Convert the string values to integers
  const number1 = parseFloat(firstInput.value);
  const number2 = parseFloat(secondInput.value);

  if (number1 > number2) {
    result.innerText = `${number1} is greater than ${number2}`;
  } else if (number1 < number2) {
    result.innerText = `${number1} is less than ${number2}`;
  } else {
    result.innerText = "Both numbers are equal";
  }
});

//reset button
resetButton.addEventListener("click", function () {
  firstInput.value = "";
  secondInput.value = "";
  resetStyles();
  result.innerText = "";
});
