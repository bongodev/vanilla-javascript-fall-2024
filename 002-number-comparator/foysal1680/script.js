const numberInput1 = document.getElementById("number1");
const numberInput2 = document.getElementById("number2");
const result = document.getElementById("result");

const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");

compareButton.addEventListener("click", function () {
  const number1 = parseFloat(numberInput1.value);
  const number2 = parseFloat(numberInput2.value);

  if (number1 > number2) {
    result.innerText = "First number is large";
  } else if (number1 < number2) {
    result.innerText = "Second number is large";
  } else {
    result.innerText = "Both numbers are equal";
  }
});

resetButton.addEventListener("click", function () {
  numberInput1.value = "";
  numberInput2.value = "";
  result.innerText = "";
});
