const compBtn = document.getElementById("compare");
const resetBtn = document.getElementById("reset");
const result = document.getElementById("result");

const num1 = document.getElementById("number1");
const num2 = document.getElementById("number2");
let res = "";

compBtn.addEventListener("click", function () {
  const number1 = parseInt(num1.value, 10);
  const number2 = parseInt(num2.value, 10);
  let res = "";

  if (number1 < number2) res = `${number1} is less than ${number2}`;
  else if (number1 > number2) res = `${number1} is greater than ${number2}`;
  else res = `${number1} is equal to ${number2}`;
  result.innerHTML = res;
});

resetBtn.addEventListener("click", function () {
  num1.value = "0";
  num2.value = "0";
});
