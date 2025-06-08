const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

compareButton.addEventListener("click", function () {
    if (!isValidInput()) {
        return;
    }
    // Convert the string values to integers
    const number1 = parseFloat(firstInput.value);
    const number2 = parseFloat(secondInput.value);

    if (number1 > number2) {
        result.innerText = `${number1} is greater than ${number2}`;
    } else if (number1 < number2) {
        result.innerText = `${number1} is less than ${number2}`;
    } else {
        result.innerText = "Both numbers are equal";
    }
});
