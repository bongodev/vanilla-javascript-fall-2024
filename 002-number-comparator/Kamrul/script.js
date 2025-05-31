
const inputValue1 = document.getElementById('number1');
const inputValue2 = document.getElementById('number2');
let compareButton = document.getElementById('compare');
let resetButton = document.getElementById('reset');

const ERROR_CLASS = 'border-red-500';


compareButton.addEventListener('click', compareFunction);
resetButton.addEventListener('click', resetFunction);

//compare function
function compareFunction(){

    reseterrorEffect();

    if(!isValidInput()){
        return;
    }

    // Convert the string values to integers
    const number1 = parseFloat(inputValue1.value);
    const number2 = parseFloat(inputValue2.value);

    if(number1> number2){
        resultShowing('First number is bigger');
        
    }
    else if(number1<number2){
         resultShowing('Second number is bigger'); 
    }
    else{
         resultShowing('Both Number are equal'); 
    }
}

//chcking valid input
function isValidInput(){
    const number1 = parseFloat();
    const number2 = parseFloat(inputValue2.value);
    if(!inputValue1.value && !inputValue2.value){
        inputValue1.classList.add(ERROR_CLASS);
        inputValue2.classList.add(ERROR_CLASS);
        return false;
    }
    else if(!inputValue1.value)
    {
        inputValue1.classList.add(ERROR_CLASS);
        return false;
    }
    else if(!inputValue2.value){
        inputValue2.classList.add(ERROR_CLASS);
        return false;
    }
    else{
        return true;
    }
}

//result function
 function resultShowing(msg){
    
    let resultValue = document.getElementById('result');
    resultValue.innerText = msg;

 }

//reset error effect
function reseterrorEffect(){
    inputValue1.classList.remove(ERROR_CLASS);
    inputValue2.classList.remove(ERROR_CLASS);
}

//reset button logic
function resetFunction(){
    inputValue1.value='0';
    inputValue2.value='0';
    resultShowing('');
    reseterrorEffect();
}