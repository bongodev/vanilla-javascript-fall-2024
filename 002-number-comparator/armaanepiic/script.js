const firstNumber = document.getElementById("first-number");
const secondNumber = document.getElementById("second-number");
const result = document.getElementById("result")

const compareBtn = document.getElementById("compare");
const resetBtn = document.getElementById("reset");

function handleCompare() {
    const firstNum = parseFloat(firstNumber.value);
    const secondNum = parseFloat(secondNumber.value);
    if(firstNum == secondNum){
        result.innerText = "The numbers are equal";
    }
    else if(firstNum > secondNum){
        result.innerText = "The first number is bigger";
    }
    else{
        result.innerText = "The second number is bigger";
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