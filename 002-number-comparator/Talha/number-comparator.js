const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resultDiv = document.getElementById("result");
const resetButton = document.getElementById("reset");

compareButton.addEventListener("click", function () {
  let firstNum = parseFloat(firstInput.value);
  let secondNum = parseFloat(secondInput.value);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("Please enter valid numbers to compare!!!");
    resetFunction();
  } else if (firstNum > secondNum) {
    resultDiv.textContent = firstNum + " is greater than " + secondNum;
  } else if (firstNum < secondNum) {
    resultDiv.textContent = firstNum + " is less than " + secondNum;
  } else {
    resultDiv.textContent = "Both numbers are equal";
  }
});

function resetFunction() {
  firstInput.value = "0";
  secondInput.value = "0";
  resultDiv.textContent = "";
}

resetButton.addEventListener("click", resetFunction);
