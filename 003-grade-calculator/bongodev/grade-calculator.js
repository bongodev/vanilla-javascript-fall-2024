const scoreInput = document.getElementById('score');
const calculateBtn = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function () {
  if (isEmptyInput()) {
    setErrorState();
    return;
  }
  const score = parseFloat(scoreInput.value);
  if (isInvalidMarks(score)) {
    setErrorState();
    return;
  }

  const grade = calculateGrade(score);

  result.innerText = grade;
});

function setErrorState() {
  scoreInput.classList.add('border-red-500');
}

function isEmptyInput() {
  if (!scoreInput.value) {
    return true;
  }
  return false;
}

function isInvalidMarks(marks) {
  if (marks > 100 || marks < 0) {
    return true;
  }
  return false;
}

function calculateGrade(marks) {
  if (marks > 100 || marks < 0) {
    return 'Invalid marks';
  }

  let grade = '';

  if (marks >= 80 && marks <= 100) {
    grade = 'A+';
  } else if (marks >= 70 && marks < 80) {
    grade = 'A';
  } else if (marks >= 65 && marks < 70) {
    grade = 'A-';
  } else if (marks >= 60 && marks < 65) {
    grade = 'B';
  } else if (marks >= 50 && marks < 60) {
    grade = 'C';
  } else {
    grade = 'F';
  }
  return grade;
}
