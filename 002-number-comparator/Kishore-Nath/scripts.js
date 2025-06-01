const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const compareBtn = document.getElementById("compare");
const result = document.getElementById("result");


compareBtn.addEventListener('click', function() {
    const firstNumber  = parseFloat(firstInput.value);
    const secondNumber  = parseFloat(secondInput.value);
    
    if (firstNumber > secondNumber) {
        result.innerText = ` ${firstNumber} is greater than ${secondNumber}`;
    } else if (firstNumber < secondNumber) {
        result.innerText = `${firstNumber} is less than ${secondNumber}`;
    } else {result.innerText = `${firstNumber} is equal to ${secondNumber}`;
}

})