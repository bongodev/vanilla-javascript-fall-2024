const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const result = document.getElementById("result")
const compareBtn = document.getElementById("compare");
const resetBtn = document.getElementById("reset");
const ERROR_CLASS = 'border-red-500';

function resetStyles() {
    firstInput.classList.remove(ERROR_CLASS);
    secondInput.classList.remove(ERROR_CLASS);
    result.innerText = '';
}
// input validation checker
function isValidInput() {
    resetStyles();
    if(firstInput.value === '') {
        firstInput.classList.add(ERROR_CLASS);
        return false;
    }
    if(secondInput.value === '') {
        secondInput.classList.add(ERROR_CLASS);
        return false;
    }
    
    return true;
}
function handleCompare() {
    if(!isValidInput()){
        alert("invalid input");
        return;
    }
    const firstNumber = parseFloat(firstInput.value);
    const secondNumber = parseFloat(secondInput.value);
    if(firstNumber > secondNumber) {
        result.innerText = `${firstNumber} is greater than ${secondNumber}`;
    } else if(firstNumber < secondNumber) {
        result.innerText = `${firstNumber} is less than ${secondNumber}`;
    } else {
        result.innerText = `${firstNumber} is equal to ${secondNumber}`;
    }
}

function handleReset() {
    firstInput.value = '0';
    secondInput.value = '0';
    resetStyles();
    result.innerText = '';
}

compareBtn.addEventListener("click", handleCompare);
resetBtn.addEventListener("click", handleReset);