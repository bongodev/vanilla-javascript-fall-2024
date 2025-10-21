const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

// validation check

const ERROR_BORDER = "border-red-900";

function isValidInput() {
  clearError();

  if (!secondInput.value && !firstInput.value) {
    //if both fields are empty
    firstInput.classList.add(ERROR_BORDER);
    secondInput.classList.add(ERROR_BORDER);
    return false;
  } else if (!firstInput.value) {
    firstInput.classList.add(ERROR_BORDER);
    return false;
  } else if (!secondInput.value) {
    secondInput.classList.add(ERROR_BORDER);
    return false;
  }
  return true;
}

// No red border in the input field

function clearError() {
  firstInput.classList.remove(ERROR_BORDER);
  secondInput.classList.remove(ERROR_BORDER);
}

compareButton.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }

  const inputNum1 = parseFloat(firstInput.value); //typecasting (string to float)
  const inputNum2 = parseFloat(secondInput.value);
  if (inputNum1 > inputNum2) {
    result.innerText = "First number is larger";
  } else if (inputNum1 < inputNum2) {
    result.innerText = "Second number is larger";
  } else {
    result.innerText = "Both numbers are equal";
  }
});

resetButton.addEventListener("click", function () {
  firstInput.value = " ";
  secondInput.value = " ";
  result.innerText = " ";
  clearError();
});
