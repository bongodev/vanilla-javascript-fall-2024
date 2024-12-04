//Storing the input
const inputScore = document.getElementById("score");
const calculatorBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");
const errorMsg = document.getElementById("error-message");
const resetBtn = document.getElementById("reset-btn");

//Container for text color
const PASS_GRADE = "text-green-700";
const ERROR_CLASS = "border-red-700";
const FAIL_GRADE = "text-red-700";

//Set Error style
function setErrorStyles(message) {
  inputScore.classList.add(ERROR_CLASS);
  errorMsg.innerText = message;
}

//reset Error style
function resetErrorStyles() {
  inputScore.classList.remove(ERROR_CLASS);
  result.classList.remove("hidden");

  errorMsg.innerText = "";
}

//Checking if the input is empty or not
const isEmptyInput = () => {
  return !inputScore.value ? true : false;
};

//Grade Calculate Event
function gradeCalculate(marks) {
  result.classList.remove(FAIL_GRADE, PASS_GRADE);
  if (marks > 100 || marks < 0) {
    result.innerText = `Please enter a number between 0 and 100.`;
    result.classList.add(FAIL_GRADE);
    return;
  }
  result.classList.add(PASS_GRADE);
  if (marks >= 80 && marks <= 100) {
    result.innerText = "A+";
  } else if (marks >= 75 && marks < 80) {
    result.innerText = "A";
  } else if (marks >= 70 && marks < 75) {
    result.innerText = "A-";
  } else if (marks >= 65 && marks < 70) {
    result.innerText = "B+";
  } else if (marks >= 60 && marks < 65) {
    result.innerText = "B";
  } else if (marks >= 55 && marks < 60) {
    result.innerText = "B-";
  } else if (marks >= 50 && marks < 55) {
    result.innerText = "C+";
  } else if (marks >= 45 && marks < 50) {
    result.innerText = "C";
  } else if (marks >= 40 && marks < 45) {
    result.innerText = "D";
  } else if (marks < 40 && marks >= 0) {
    result.classList.add(FAIL_GRADE);
    result.innerText = "F";
  } else {
    errorMsg.classList.remove("hidden");
    errorMsg.innerText = "Please enter score between  0 to 100 ";
  }
}

function MarksCalculate() {
  resetErrorStyles();
  if (isEmptyInput()) {
    setErrorStyles("Score cannot be empty.");
    return;
  }
  const score = parseFloat(inputScore.value);

  gradeCalculate(score);
}

// Calculate Button Event
calculatorBtn.addEventListener("click", MarksCalculate);

//Reset Button Event
resetBtn.addEventListener("click", function () {
  inputScore.value = "";
  result.innerText = "";
  errorMsg.innerText = "";
  resetErrorStyles();
});
