const inputScore = document.getElementById("score");
const calculateButton = document.getElementById("calculate-btn");
const resultDisplay = document.getElementById("result");
const errorMsg = document.getElementById("error-message");

const ERROR_BORDER = "border-red-900";

function inputValidation() {
  // check if the fields are empty or not
  if (!inputScore.value) {
    baseError("Please enter a score ");

    return false;
  }
  // check if  the number is negative or more than 100
  const inputScoreNum = parseFloat(inputScore.value);

  if (inputScoreNum < 0 || inputScoreNum > 100) {
    baseError("Score must be between 0-100.");

    return false;
  }
  return true;
}

// Common function for all types of errors

function baseError(errorTypeMsg) {
  inputScore.classList.add(ERROR_BORDER);
  errorMsg.innerText = errorTypeMsg;
  errorMsg.classList.remove("hidden");
}

// clearing error indicators after an invalid input

function clearError() {
  inputScore.classList.remove(ERROR_BORDER);
  errorMsg.classList.add("hidden");
}

// clearing grades after a valid input
function clearGrade() {
  resultDisplay.innerText = "";
}

function gradeCalculate(scoreNum) {
  let grade = "";
  if (scoreNum >= 90) {
    grade = "A+";
  } else if (scoreNum >= 80) {
    grade = "A";
  } else if (scoreNum >= 70) {
    grade = "B+";
  } else if (scoreNum >= 60) {
    grade = "B";
  } else if (scoreNum >= 50) {
    grade = "C";
  } else if (scoreNum >= 40) {
    grade = "D";
  } else {
    grade = "F";
  }

  // F -> red otherwise green

  const res = `<span class="${grade === "F" ? "text-red-900" : "text-green-900"}">  ${grade}  </span>`;
  //ternary operator

  return res;
}

calculateButton.addEventListener("click", function () {
  clearGrade();

  if (!inputValidation()) {
    return;
  }
  clearError();

  const inputScoreNum = parseFloat(inputScore.value);

  resultDisplay.innerHTML = gradeCalculate(inputScoreNum);
});
