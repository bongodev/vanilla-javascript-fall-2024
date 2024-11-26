let number1Element = document.getElementById("number1");
let number2Element = document.getElementById("number2");
let resultElement = document.getElementById("result");
let compareBtnElement = document.getElementById("compare");
let resetBtnElement = document.getElementById("reset");

compareBtnElement.addEventListener('click', function () {
    let number1 = Number(number1Element.value);
    let number2 = Number(number2Element.value);

    if (number1 === number2) {
        resultElement.innerText = "Both numbers are equal!";
    } else if (number1 > number2) {
        resultElement.innerText = "First number is greater than second number!";
    } else {
        resultElement.innerText = "Second number is greater than first number!";
    }
});
