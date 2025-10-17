const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

compareButton.addEventListener("click", function () {
  const inputNum1 = parseFloat(firstInput.value); //typecasting (string to float)
  const inputNum2 = parseFloat(secondInput.value);
  if (inputNum1 > inputNum2) {
    result.innerText = "First number is larger";
  } else if (inputNum1 < inputNum2) {
    result.innerText = "Second number is larger";
  } else {
    result.innerText = "Both numbers are equal";
  }
});

resetButton.addEventListener("click", function () {
  firstInput.value = "0";
  secondInput.value = "0";
  result.innerText = " ";
});
