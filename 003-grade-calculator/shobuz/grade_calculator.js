const inputGradeMarks = document.getElementById("inputGrade");
const marksCalculate = document.getElementById("calculator");
const marksReset = document.getElementById("reset");
const errorMessageShow = document.getElementById("errorMessage");
const showResult = document.getElementById("result");

let error_class = "border-red-800";

function resetErrorStyles() {
  inputGradeMarks.classList.remove(error_class);
  errorMessageShow.classList.add("hidden");
}

function isValidInput() {
  resetErrorStyles();
  if (!inputGradeMarks.value) {
    inputGradeMarks.classList.add(error_class);
    errorMessageShow.classList.remove("hidden");
    errorMessageShow.textContent = "plz enter a valid number";
    return false;
  }
  if (inputGradeMarks.value < 0 || inputGradeMarks.value > 100) {
    inputGradeMarks.classList.add(error_class);
    errorMessageShow.classList.remove("hidden");
    errorMessageShow.textContent =
      "plz enter number that is above 0 but less than 101";
    return false;
  }
  return true;
}

marksCalculate.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }
  let score = parseFloat(inputGradeMarks.value);

  if (score > 0 && score < 33) {
    showResult.textContent = "F";
  } else if (score >= 33 && score < 40) {
    showResult.textContent = "D";
  } else if (score >= 40 && score < 50) {
    showResult.textContent = "C";
  } else if (score >= 50 && score < 60) {
    showResult.textContent = "B";
  } else if (score >= 60 && score < 70) {
    showResult.textContent = "A-";
  } else if (score >= 70 && score < 80) {
    showResult.textContent = "A";
  } else if (score >= 80 && score <= 100) {
    showResult.textContent = "A+";
  } //else{
  // showResult.textContent="Invalid Number";
  //}
});

marksReset.addEventListener("click", function () {
  inputGradeMarks.value = "";
  showResult.textContent = "";
  errorMessageShow.textContent = "";
  resetErrorStyles();
});
