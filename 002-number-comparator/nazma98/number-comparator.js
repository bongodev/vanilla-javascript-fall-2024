const number1Element = document.getElementById("number1");
const number2Element = document.getElementById("number2");
const resultElement = document.getElementById("result");
const compareBtnElement = document.getElementById("compare");
const resetBtnElement = document.getElementById("reset");

compareBtnElement.addEventListener('click', function () {
    let number1 = parseFloat(number1Element.value);
    let number2 = parseFloat(number2Element.value);

    if (isNaN(number1) || isNaN(number2)) {
        alert("Please enter valid integer numbers!");
        resetInput();
    } else {
        if (number1 === number2) {
            resultElement.innerText = "Both numbers are equal!";
        } else if (number1 > number2) {
            resultElement.innerText = "First number is greater than second number!";
        } else {
            resultElement.innerText = "Second number is greater than first number!";
        }
    }
});

function resetInput() {
    number1Element.value = "0";
    number2Element.value = "0";
    resultElement.innerText = "";
}

resetBtnElement.addEventListener('click', resetInput);

