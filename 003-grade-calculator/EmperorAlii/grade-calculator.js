//Exam Score Input
const examScoreInput = document.querySelector('#score');

// Button
const calculateGradeBtn = document.querySelector('#calculate-btn');

// Result
const showResult = document.querySelector('#result');

// Error class
const ERROR_CLASS = 'border-red-400';

// Error message
const errorMessage = document.querySelector('#error-message');

// Function to check if it only contains number
function containsOnlyNumber(str) {
  return /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(str.trim());
}

// Function to show error message
function showError(msg) {
  errorMessage.innerText = msg;
  errorMessage.classList.remove('hidden');
  examScoreInput.classList.add(ERROR_CLASS);
}

// Function to clear Errors
function clearError() {
  errorMessage.innerText = '';
  errorMessage.classList.add('hidden');
  examScoreInput.classList.remove(ERROR_CLASS);
  showResult.innerText = '';
}

// Function to check validity of Input
function checkValidity() {
  //checking if input consist only numbers
  const isOnlyNumber = containsOnlyNumber(examScoreInput.value);

  //Out of bounds and numeric input validation logic
  if (isOnlyNumber) {
    const examScore = parseFloat(examScoreInput.value);

    //Out of bounds logic
    if (examScore > 100 || examScore < 0) {
      const outOfBoundsErrorMessage = 'Input value out of range';
      showError(outOfBoundsErrorMessage);
    } else {
      return true;
    }
  } else {
    const invalidNumberErrorMessage = 'Input is not a number';
    showError(invalidNumberErrorMessage);
  }
}

function calculateGrade() {
  // Clear each time button is pressed
  clearError();

  // To check if isValid is true and if not show error message
  const isValid = checkValidity();

  // If condition is valid then this runs
  if (isValid) {
    const examScoreValue = parseFloat(examScoreInput.value);
    let resultMessage = '';

    // Grade logic
    if (examScoreValue >= 0 && examScoreValue <= 32) {
      resultMessage = 'F';
    } else if (examScoreValue > 32 && examScoreValue <= 39) {
      resultMessage = 'D';
    } else if (examScoreValue > 39 && examScoreValue <= 49) {
      resultMessage = 'C';
    } else if (examScoreValue > 49 && examScoreValue <= 59) {
      resultMessage = 'B';
    } else if (examScoreValue > 59 && examScoreValue <= 69) {
      resultMessage = 'A-';
    } else if (examScoreValue > 69 && examScoreValue <= 79) {
      resultMessage = 'A';
    } else {
      resultMessage = 'A+';
    }
    showResult.innerText = resultMessage;
  }
}

calculateGradeBtn.addEventListener('click', calculateGrade);
