// Storing input id
const num1Input = document.getElementById("number1");
const num2Input = document.getElementById("number2");
const result = document.getElementById("result");
const button = document.getElementById("compare");
const resetBtn = document.getElementById("reset");

const handleButton = () => {
  // Retrieve values from input fields
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  // Validate input
  if (isNaN(num1) || isNaN(num2)) {
    result.textContent = "Please enter valid numbers.";
    return;
  }
  if (num1 > num2) {
    result.innerText = `First Number is larger than Second Number`;
  } else if (num1 === num2) {
    result.innerText = `Two numbers are equal`;
  } else {
    result.innerText = `Second  Number is larger than  First Number`;
  }
};

button.addEventListener("click", handleButton);
resetBtn.addEventListener("click", () => {
  num1Input.value = "";
  num2Input.value = "";
  result.innerText = " ";
});
