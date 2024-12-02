const firstNumber = document.getElementById('number1');
const secondNumber = document.getElementById('number2');
const compareButton = document.getElementById('compare');
const resultElement = document.getElementById('result');
const resetButton = document.getElementById('reset');


compareButton.addEventListener('click', function(){
    if (Number(firstNumber.value) > Number(secondNumber.value)){
         resultElement.innerText = 'First Number is greater than Second Number';
    }
    else if (Number(firstNumber.value) === Number(secondNumber.value)) {
        resultElement.innerText= 'Both numbers are equal';
    }
    else{
        resultElement.innerText= 'First Number is smaller than Second Number';
    }
})

resetButton.addEventListener('click', function(){
    firstNumber.value=0;
    secondNumber.value=0;
    resultElement.innerText= '';
})

