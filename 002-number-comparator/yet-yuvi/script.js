const inputValue1 = document.getElementById("number1");
const inputValue2 = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const resultValue = document.getElementById("result");

const ERROR_CLASS = "border-red-500";

compareButton.addEventListener("click", compareFunction);
resetButton.addEventListener("click", resetFunction);

function compareFunction() {
  resetErrorEffect();

  if (!isValidInput()) {
    return;
  }

  const number1 = parseFloat(inputValue1.value);
  const number2 = parseFloat(inputValue2.value);

  if (number1 > number2) {
    resultShowing("First number is bigger");
  } else if (number1 < number2) {
    resultShowing("Second number is bigger");
  } else {
    resultShowing("Both Number are equal");
  }
}

function isValidInput() {
  let isValid = true;
  const val1 = inputValue1.value;
  const val2 = inputValue2.value;

  if (!val1 || isNaN(parseFloat(val1))) {
    inputValue1.classList.add(ERROR_CLASS);
    isValid = false;
  }

  if (!val2 || isNaN(parseFloat(val2))) {
    inputValue2.classList.add(ERROR_CLASS);
    isValid = false;
  }

  return isValid;
}

function resultShowing(msg) {
  resultValue.innerText = msg;
}

function resetErrorEffect() {
  inputValue1.classList.remove(ERROR_CLASS);
  inputValue2.classList.remove(ERROR_CLASS);
}

function resetFunction() {
  inputValue1.value = "";
  inputValue2.value = "";
  resultShowing("");
  resetErrorEffect();
}
