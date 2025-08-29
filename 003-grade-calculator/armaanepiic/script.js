const score = document.getElementById('score');
const calculateBtn = document.getElementById('calculateGrade');
const resetBtn = document.getElementById('reset');
const result = document.getElementById('result');

function isValidInput(x) {
    if(x === ''){
        alert("Enter Score!!");
        return false;
    }
    return true;
}
function handleClick() {
    if(!isValidInput(score.value)){
        score.value = '';
        return;
    }
    if(score.value >= 0 && score.value < 33){
        result.innerText = "Fail";
    } else if(score.value >= 33 && score.value <= 39) {
        result.innerText = 'D';
    } else if(score.value >= 40 && score.value <= 49) {
        result.innerText = 'C';
    } else if(score.value >= 50 && score.value <= 59) {
        result.innerText = 'B';
    } else if(score.value >= 60 && score.value <= 69) {
        result.innerText = 'A-';
    } else if(score.value >= 70 && score.value <= 79) {
        result.innerText = 'A';
    } else if(score.value >= 80 && score.value <= 100) {
        result.innerText = 'A+';
    } else {
        alert("invalid score");
        score.value = '';
        result.innerText = '';
    }
}
function handleReset() {
    score.value = '';
    result.innerText = '';
}
calculateBtn.addEventListener('click', handleClick);
resetBtn.addEventListener('click', handleReset);
