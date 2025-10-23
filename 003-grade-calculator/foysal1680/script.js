
const scoreInput = document.getElementById("score");
const calculateBtn = document.getElementById("calculate-btn");
const resetBtn = document.getElementById("reset-btn");
const errorMessage = document.getElementById("error-message");
const result = document.getElementById("result");


const ERROR_CLASS = "border-red-500";


function isValidInput() {
  clearErrors();

  const value = scoreInput.value.trim();

  if (value === "") {
    showError("Please enter your score");
    return false;
  }

  const score = parseFloat(value);
  if (isNaN(score) || score < 0 || score > 100) {
    showError("invalid input");
    return false;
  }

  return true;
}


function showError(message) {
  scoreInput.classList.add(ERROR_CLASS);
  errorMessage.innerText = message;
  errorMessage.classList.remove("hidden");
  errorMessage.classList.add("text-red-500");
}


function clearErrors() {
  scoreInput.classList.remove(ERROR_CLASS);
  errorMessage.innerText = "";
  errorMessage.classList.add("hidden");
}


function calculateGrade(score) {
  if (score >= 80) return "A+";
  else if (score >= 70) return "A";
  else if (score >= 60) return "A-";
  else if (score >= 50) return "B";
  else if (score >= 40) return "C";
  else if (score >= 33) return "D";
  else return "F";
}


calculateBtn.addEventListener("click", function () {
  if (!isValidInput()) return;

  const score = parseFloat(scoreInput.value);
  const grade = calculateGrade(score);
  result.innerText = `Your Grade: ${grade}`;
  result.classList.add("text-green-600");
});


resetBtn.addEventListener("click", function () {
  scoreInput.value = "";
  result.innerText = "";
  clearErrors();
});
