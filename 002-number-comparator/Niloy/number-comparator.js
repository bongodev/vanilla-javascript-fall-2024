const number1Input=document.getElementById('number1');
const number2Input=document.getElementById('number2');
const compareButton = document.getElementById('compare');
const result = document.getElementById('result');
const resetButton = document.getElementById('reset');

const ERROR_CLASS = 'border-red-500';



function resetErrorStyles() {
    number1Input.classList.remove(ERROR_CLASS);
    number2Input.classList.remove(ERROR_CLASS);
  }
  
  function isValidInput() {
    resetErrorStyles();
  
    if (!number1Input.value) {
      number1Input.classList.add(ERROR_CLASS);
      return false;
    }
    if (!number2Input.value) {
      number2Input.classList.add(ERROR_CLASS);
      return false;
    }
  
    return true;
  }

function handleCompareButton(){

    if (!isValidInput()) return;

    number1=parseInt(number1Input.value);
    number2=parseInt(number2Input.value);

    if(number1>number2){
        result.innerText='Number 1 is Bigger'
    }
    else if(number1<number2){
        result.innerText='Number 2 is Bigger'
    }
    else{
        result.innerText='Both are Equal';
    }
}

function handleResetButton(){
    number1Input.value='0';
    number2Input.value='0';
    result.innerText="";
    resetErrorStyles();
}


compareButton.addEventListener('click', handleCompareButton);
resetButton.addEventListener('click', handleResetButton);