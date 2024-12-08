const numberInput = document.getElementById("score");
const errorAlert = document.getElementById("error-message");
const calculateButton = document.getElementById("calculate-btn");
const resultElement = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");
const ERROR_CLASS = "border-red-500";
const ERROR_TEXT = "text-red-600";
const PASS_TEXT = "text-green-600";
function resetErrorStyles() {
  errorAlert.classList.add("hidden");
  resultElement.classList.add("hidden");
  numberInput.classList.remove(ERROR_CLASS);
  resultElement.classList.remove(ERROR_TEXT);
  resultElement.classList.remove(PASS_TEXT);
}
function isEmptyInput() {
  if (!numberInput.value) {
    return false;
  }
  return true;
}
function isValidInput() {
  if (numberInput.value > 100 || numberInput.value < 0) {
    return false;
  }
  return true;
}

function calculateGrade() {
  resetErrorStyles();
  let marks = Number(numberInput.value);
  if (!isEmptyInput()) {
    errorAlert.classList.remove("hidden");
    numberInput.classList.add(ERROR_CLASS);
    errorAlert.classList.add(ERROR_TEXT);
    errorAlert.innerText = "Your input is empty. Please Enter a Valid Number";
    return;
  }

  if (!isValidInput()) {
    errorAlert.classList.remove("hidden");
    numberInput.classList.add(ERROR_CLASS);
    errorAlert.classList.add(ERROR_TEXT);
    errorAlert.innerText = "Please Enter Number between 0-100";
    return;
  }
  resultElement.classList.remove("hidden");
  resultElement.classList.add(PASS_TEXT);
  if (marks >= 90 && marks <= 100) {
    resultElement.innerText = "A+";
  } else if (marks >= 85 && marks <= 89) {
    resultElement.innerText = "A";
  } else if (marks >= 80 && marks <= 84) {
    resultElement.innerText = "A-";
  } else if (marks >= 75 && marks <= 79) {
    resultElement.innerText = "B+";
  } else if (marks >= 70 && marks <= 74) {
    resultElement.innerText = "B";
  } else if (marks >= 65 && marks <= 69) {
    resultElement.innerText = "B-";
  } else if (marks >= 60 && marks <= 64) {
    resultElement.innerText = "C+";
  } else if (marks >= 50 && marks <= 59) {
    resultElement.innerText = "C";
  } else if (marks >= 40 && marks <= 49) {
    resultElement.innerText = "D";
  } else if (marks >= 0 && marks <= 39) {
    resultElement.classList.remove(PASS_TEXT);
    resultElement.classList.add(ERROR_TEXT);
    resultElement.innerText = "F";
  }
}
calculateButton.addEventListener("click", calculateGrade);
resetButton.addEventListener("click", function () {
  numberInput.value = "";
  resultElement.innerText = "";
  errorAlert.innerText = "";
  resetErrorStyles();
});
