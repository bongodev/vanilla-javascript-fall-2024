const inputField = document.getElementById("score");
const calculateBtn = document.getElementById("calculate-btn");
const resultDisplay = document.getElementById("result");
const resetBtn = document.getElementById("reset-btn");
const errorMsg = document.getElementById("error-message");

function calculateGrade() {
  let grade = "";
  let borderClass = "";
  let backgroundClass = "";
  if (inputField.value === "") {
    errorMsg.innerText = "Please enter a valid score.";
    errorMsg.classList.remove("hidden");
    errorMsg.classList.add("text-red-500", "mt-2");
    return;
  }
  const scoreValue = parseFloat(inputField.value);

  if (scoreValue < 0 || scoreValue > 100) {
    errorMsg.innerText = "Score must be between 0 and 100.";
    errorMsg.classList.remove("hidden");
    errorMsg.classList.add("text-red-500", "mt-2");
    return;
  } else {
    errorMsg.classList.add("hidden");
  }
  if (scoreValue >= 80) {
    grade = "A+";
    borderClass = "border-green-500";
    backgroundClass = "bg-green-100";
  } else if (scoreValue >= 75) {
    grade = "A";
    borderClass = "border-green-400";
    backgroundClass = "bg-green-50";
  } else if (scoreValue >= 70) {
    grade = "A-";
    borderClass = "border-green-300";
    backgroundClass = "bg-green-50";
  } else if (scoreValue >= 65) {
    grade = "B+";
    borderClass = "border-blue-400";
    backgroundClass = "bg-blue-100";
  } else if (scoreValue >= 60) {
    grade = "B";
    borderClass = "border-blue-300";
    backgroundClass = "bg-blue-50";
  } else if (scoreValue >= 55) {
    grade = "B-";
    borderClass = "border-blue-200";
    backgroundClass = "bg-blue-50";
  } else if (scoreValue >= 50) {
    grade = "C+";
    borderClass = "border-yellow-400";
    backgroundClass = "bg-yellow-100";
  } else if (scoreValue >= 45) {
    grade = "C";
    borderClass = "border-yellow-300";
    backgroundClass = "bg-yellow-50";
  } else if (scoreValue >= 40) {
    grade = "D";
    borderClass = "border-orange-400";
    backgroundClass = "bg-orange-100";
  } else {
    grade = "F";
    borderClass = "border-red-500";
    backgroundClass = "bg-red-100";
  }

  resultDisplay.innerText = "Your Grade is " + grade;
  resultDisplay.className = `mt-4 text-xl font-bold border-2 rounded-lg ${borderClass} ${backgroundClass}`;
}

function clearFields() {
  inputField.value = "";
  resultDisplay.innerText = "";
  errorMsg.innerText = "";
  errorMsg.classList.add("hidden");
  resultDisplay.className = "mt-4 text-xl font-bold";
}

calculateBtn.addEventListener("click", calculateGrade);
resetBtn.addEventListener("click", clearFields);
