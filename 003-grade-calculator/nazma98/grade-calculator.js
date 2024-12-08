const numberElement = document.getElementById("score");
const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");
const errorMsg = document.getElementById("error-message");
const resetBtn = document.getElementById("reset-btn");

const ERROR_CLASS = 'border-red-500';
const FAIL_GRADE = 'text-red-700';
const PASS_GRADE = 'text-green-600';

function resetErrorStyles(){
    numberElement.classList.remove(ERROR_CLASS);
    result.classList.remove(FAIL_GRADE);
    result.classList.remove(PASS_GRADE);
}

function isValidMark() {
    resetErrorStyles();
  
    if (!numberElement.value) {
        numberElement.classList.add(ERROR_CLASS);
      return false;
    }

    return true;
  }

function calculateGrade(){
    if(!isValidMark()){
        return;
    }

    const marks = parseFloat(numberElement.value);
    result.classList.add(PASS_GRADE);
    if(marks >= 80 && marks <= 100){
        result.innerText = 'A+';
    } else if(marks >= 75 && marks < 80) {
        result.innerText = 'A';
    } else if(marks >= 70 && marks < 75) {
        result.innerText = 'A-';
    } else if(marks >= 65 && marks < 70) {
        result.innerText = 'B+';
    } else if(marks >= 60 && marks < 65) {
        result.innerText = 'B';
    } else if(marks >= 55 && marks < 60) {
        result.innerText = 'B-';
    } else if(marks >= 50 && marks < 55) {
        result.innerText = 'C+';
    } else if(marks >= 45 && marks < 50) {
        result.innerText = 'C';
    } else if(marks >= 40 && marks < 45) {
        result.innerText = 'D';
    } else if(marks < 40 && marks >= 0) {
        result.classList.add(FAIL_GRADE);
        result.innerText = 'F';
    } else {
        errorMsg.classList.remove("hidden");
        errorMsg.innerText = "Please enter score 0-100!"
    }
}

calculateBtn.addEventListener("click", calculateGrade);

resetBtn.addEventListener("click", function(){
    numberElement.value = "";
    result.innerText = "";
    errorMsg.innerText = "";
    resetErrorStyles();
});