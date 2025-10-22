const scoreInput = document.getElementById("score");
const calculateBtn = document.getElementById("calculate-btn");
const errorMessage = document.getElementById("error-message");
const result = document.getElementById("result");

const ERROR_CLASS = "border-red-600";

calculateBtn.addEventListener("click", function () {
  clearError();
  const score = validateInput();
  if (score === null) {
    return;
  }
  const grade = calculateGrade(score);
  result.innerText = grade;
});

function validateInput() {
  result.innerText = "";
  if (!scoreInput.value) {
    showError("Please provide a score");
    return null;
  }

  const score = parseFloat(scoreInput.value);

  if (score < 0 || score > 100) {
    showError("Invalid score");
    return null;
  }

  return score;
}

function showError(message) {
  scoreInput.classList.add(ERROR_CLASS);
  errorMessage.classList.remove("hidden");
  errorMessage.innerText = message;
}

function clearError() {
  scoreInput.classList.remove(ERROR_CLASS);
  errorMessage.classList.add("hidden");
}

function calculateGrade(marks) {
  if (marks >= 80 && marks <= 100) {
    return "A+";
  } else if (marks >= 75 && marks < 80) {
    return "A";
  } else if (marks >= 70 && marks < 75) {
    return "A-";
  } else if (marks >= 60 && marks < 70) {
    return "B";
  } else if (marks >= 50 && marks < 60) {
    return "C";
  }

  return "F";
}
