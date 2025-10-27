//Getting the inputs
let numberOneInput = document.getElementById('number1');
let numberTwoInput = document.getElementById('number2');

//compare and reset buttons
let buttonCompare = document.getElementById('compare');
let buttonReset = document.getElementById('reset');

//result display
let resultDisplay = document.getElementById('result');

//Check if a string only contains number
function containsOnlyNumber(str) {
  return /^[+-]?(\d+(\.\d*)?|\.\d+)$/.test(str.trim());
}

//function to compare numbers
function compareNumbers(numberOne, numberTwo) {
  //conversion
  let firstNumber = parseFloat(numberOne.value);
  let secondNumber = parseFloat(numberTwo.value);

  //message to show result
  let resultMessage = '';

  //logic
  if (firstNumber > secondNumber) {
    resultMessage = `Number One(${firstNumber}) is bigger than Number Two(${secondNumber})`;
  } else if (firstNumber < secondNumber) {
    resultMessage = `Number Two(${secondNumber}) is bigger than Number One(${firstNumber})`;
  } else {
    resultMessage = `Both are equal`;
  }
  resultDisplay.innerText = resultMessage;
}

//function to handle invalid inputs
function handleInvalidInputs() {
  //message to show error
  let errorMessage = '';

  if (!containsOnlyNumber(numberOneInput.value)) {
    numberOneInput.classList.add('border-red-400');
    errorMessage = 'Number One is invalid';
  }
  if (!containsOnlyNumber(numberTwoInput.value)) {
    numberTwoInput.classList.add('border-red-400');
    errorMessage = 'Number Two is invalid';
  }
  if (
    !containsOnlyNumber(numberOneInput.value) &&
    !containsOnlyNumber(numberTwoInput.value)
  ) {
    errorMessage = 'Both inputs are invalid';
  }
  resultDisplay.innerText = errorMessage;
}

function removeErrorBorder() {
  numberOneInput.classList.remove('border-red-400');
  numberTwoInput.classList.remove('border-red-400');
}

//Comparison Operation
buttonCompare.addEventListener('click', function () {
  removeErrorBorder();
  if (
    !containsOnlyNumber(numberOneInput.value) ||
    !containsOnlyNumber(numberTwoInput.value)
  ) {
    handleInvalidInputs();
  } else {
    compareNumbers(numberOneInput, numberTwoInput);
  }
});

//Reset Operation
buttonReset.addEventListener('click', function () {
  //clearing input fields and result display text
  numberOneInput.value = '';
  numberTwoInput.value = '';
  resultDisplay.innerText = '';
  removeErrorBorder();
});
