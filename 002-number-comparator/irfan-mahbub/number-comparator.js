const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const result = document.getElementById("result");

const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");

compareButton.addEventListener("click", function () {
  const number1 = parseFloat(number1Input.value);
  const number2 = parseFloat(number2Input.value);

  if (number1 > number2) {
    result.innerText = "First number is LARGE";
  } else if (number1 < number2) {
    result.innerText = "Second number is LARGE";
  } else {
    result.innerText = "Both number are EQUAL";
  }
});

resetButton.addEventListener("click", function () {
  number1Input.value = "";
  number2Input.value = "";
  result.innerText = "";
});
