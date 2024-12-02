const firstNumber = document.getElementById('number1');
const secondNumber = document.getElementById('number2');
const compareButton = document.getElementById('compare');
const resultElement = document.getElementById('result');
const resetButton = document.getElementById('reset');
const ERROR_CLASS = 'border-red-500';
const ERROR_TEXT = 'text-red-500';
function resetErrorStyles(){
    firstNumber.classList.remove(ERROR_CLASS);
    secondNumber.classList.remove(ERROR_CLASS);
    resultElement.classList.remove(ERROR_TEXT);
}
function isValidInput(){
    resetErrorStyles();
    let isValid = true;
    if (firstNumber.value === '' ){
        firstNumber.classList.add(ERROR_CLASS);
        isValid = false;
    }
    if (!secondNumber.value){
        secondNumber.classList.add(ERROR_CLASS)
        isValid = false;
    }
    return isValid;

}
compareButton.addEventListener('click', function(){
    if (!isValidInput()){
        resultElement.innerText= 'Please Enter a valid number';
        resultElement.classList.add(ERROR_TEXT);
        return;
    }

    if (Number(firstNumber.value) > Number(secondNumber.value)){
         resultElement.innerText = (Number(firstNumber.value)) + ' is greater than ' + (Number(secondNumber.value));
    }
    else if (Number(firstNumber.value) === Number(secondNumber.value)) {
        resultElement.innerText= 'Both numbers are equal';
    }
    else{
        resultElement.innerText= (Number(secondNumber.value)) + ' is greater than ' + (Number(firstNumber.value))
    }
})

resetButton.addEventListener('click', function(){
    firstNumber.value=0;
    secondNumber.value=0;
    resultElement.innerText= '';
    resetErrorStyles();
})

