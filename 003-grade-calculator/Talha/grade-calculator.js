const scoreInput = document.getElementById("score");
const calculateGradeButton = document.getElementById("calculate-btn");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset");
const errorMessage = document.getElementById("error-message");

const ERROR_CLASS = "border-red-500";

function resetErrorStyles() {
  scoreInput.classList.remove(ERROR_CLASS);
  errorMessage.classList.add("hidden");
}

function isValidInput() {
  resetErrorStyles();
  if (!scoreInput.value) {
    scoreInput.classList.add(ERROR_CLASS);
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please enter a valid score!!";
    return false;
  }
  if (scoreInput.value < 0 || scoreInput.value > 100) {
    scoreInput.classList.add(ERROR_CLASS);
    errorMessage.classList.remove("hidden");
    errorMessage.textContent = "Please enter score between 0 to 100!!";
    return false;
  }
  return true;
}

calculateGradeButton.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }

  let score = parseFloat(scoreInput.value);

  if (score >= 0 && score < 33) {
    result.textContent = "F";
  } else if (score >= 33 && score < 40) {
    result.textContent = "D";
  } else if (score >= 40 && score < 50) {
    result.textContent = "C";
  } else if (score >= 50 && score < 60) {
    result.textContent = "B";
  } else if (score >= 60 && score < 70) {
    result.textContent = "A-";
  } else if (score >= 70 && score < 80) {
    result.textContent = "A";
  } else if (score >= 80 && score <= 100) {
    result.textContent = "A+";
  }
});

resetButton.addEventListener("click", function () {
  scoreInput.value = "";
  result.textContent = "";
  resetErrorStyles();
});
