const numberElement = document.getElementById("score");
const calculateBtn = document.getElementById("calculate-btn");
const result = document.getElementById("result");
const ERROR = document.getElementById("error-message");

function calculateGrade(){
    let marks = parseFloat(numberElement.value);

    if(marks >= 80){
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
    } else {
        result.innerText = 'F';
    } 
}

calculateBtn.addEventListener("click", calculateGrade);