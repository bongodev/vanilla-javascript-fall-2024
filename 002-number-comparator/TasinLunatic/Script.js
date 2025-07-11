const firstInput=document.getElementById('number1');
const secondInput=document.getElementById('number2');
const compareBtn=document.getElementById('compare');
const resetBtn=document.getElementById('reset');
const result=document.getElementById('result');

const Error_CLASS='border-red-500';

function resetStyles(){
    firstInput.classList.remove(Error_CLASS);
    secondInput.classList.remove(Error_CLASS);
    result.innerText='';
}

function isValidInputs(){
    resetStyles();
    if(firstInput.value===''){
        firstInput.classList.add(Error_CLASS);
        return false;
    }
    if(secondInput.value===''){
        secondInput.classList.add(Error_CLASS);
        return false;
    }
    return true;
}

compareBtn.addEventListener('click',function(){
    //valid inputs

    if(!isValidInputs()){
        return;
    }
    const firstNumber=parseFloat(firstInput.value);
    const secondNumber=parseFloat(secondInput.value);

    if(firstNumber > secondNumber){
        result.innerText=`${firstNumber} is greater than ${secondNumber}`;
    }else if(firstNumber<secondNumber){
        result.innerText=`${firstNumber}is less than ${secondNumber}`;
    }else{
        result.innerText=`${firstNumber}is equal to ${secondNumber}`;
    }

});

resetBtn.addEventListener('click',function(){
    firstInput.value='';
    secondInput.value='';
    resetStyles();
    result.innerText='';

});