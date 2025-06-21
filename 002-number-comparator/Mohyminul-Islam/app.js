const numInput1 = document.getElementById("number1");
const numInput2 = document.getElementById("number2");
const compareBtn = document.getElementById("compare");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset");
const errorClass = "border-red-600";

function resetErrorStyles() {
  numInput1.classList.remove(errorClass);
  numInput2.classList.remove(errorClass);
}

function isValidInput() {
  resetErrorStyles();

  if (!numInput1.value) {
    numInput1.classList.add(errorClass);
    return false;
  }
  if (!numInput2.value) {
    numInput2.classList.add(errorClass);
    return false;
  }

  return true;
}

compareBtn.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }

    num1 = parseInt(numInput1.value);
    num2 = parseInt(numInput2.value);
    if (num1 > num2) {
        result.innerText = `${num1} is greater than ${num2}!`;
    }
    else if (num1 < num2) {
        result.innerText = `${num1} is less than ${num2}!`;
    }
    else {
        result.innerText = `${num1} is equal to ${num2}`;
    }
});

resetButton.addEventListener("click", function () {
  numInput1.value = "0";
  numInput2.value = "0";
  result.innerText = "";
  resetErrorStyles();
});
