const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const result = document.getElementById("result")

const compareBtn = document.getElementById("compare");
const resetBtn = document.getElementById("reset");

function isValidInput(){
    if(firstNumber.value === '' || secondNumber.value === ''){
        result.innerText = 'Please enter both numbers';
        return false;
    }
    return true;
}
function handleCompare() {
    if(!isValidInput){
        return;
    }
    const firstNum = parseFloat(firstNumber.value);
    const secondNum = parseFloat(secondNumber.value);

    if(firstNum == secondNum){
        result.innerText = `${firstNum} is equal to ${secondNum}`;
    }
    else if(firstNum > secondNum){
        result.innerText = `${firstNum} is bigger than ${secondNum}`;
    }
    else if(firstNum < secondNum){
        result.innerText = `${secondNum} is bigger than ${firstNum}`;
    }
    else{
        alert("Please enter two numbers");
    }
}

function handleReset() {
    firstNumber.value = '0';
    secondNumber.value = '0';
    result.innerHTML = null;
    console.log("rest clicked");
    
}

compareBtn.addEventListener("click", handleCompare);
resetBtn.addEventListener("click", handleReset);