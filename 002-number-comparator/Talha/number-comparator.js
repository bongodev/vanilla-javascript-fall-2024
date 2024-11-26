const compareButton = document.getElementById("compare");
const result = document.getElementById("result");

compareButton.addEventListener("click", function () {
  let firstNum = parseFloat(document.getElementById("number1").value);
  let secondNum = parseFloat(document.getElementById("number2").value);

  if (isNaN(firstNum) || isNaN(secondNum)) {
    alert("Please enter valid numbers to compare");
    location.reload();
  } else if (firstNum > secondNum) {
    result.innerText = firstNum + " is greater than " + secondNum;
  } else if (firstNum < secondNum) {
    result.innerText = firstNum + " is less than " + secondNum;
  } else {
    result.innerText = firstNum + " is equal to " + secondNum;
  }
});
