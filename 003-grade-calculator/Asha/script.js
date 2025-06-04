const scoreInput = document.getElementById("score");
const calculateButton = document.getElementById("calculate-btn");
const result = document.getElementById("result");
const resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function(){
    scoreInput.value = "";
    result.innerText = "";
    resetErrorState();
})

calculateButton.addEventListener("click", function(){
    resetErrorState();
    if(isEmptyInput()){
        setErrorState();
        return;
    }

    if(isInvalidInput()){
        setErrorState();
        return;
    }
    const score = parseFloat(scoreInput.value);
    const grade = calculateGrade(score);
    result.innerText = `Your grade is: ${grade}`;
})

function isEmptyInput(){
    return !scoreInput.value;
}

function isInvalidInput() {
    if(scoreInput.value < 0 || scoreInput.value > 100) {
        return true;
    }
    return false;
}
function setErrorState() {
    scoreInput.classList.add("border-red-500");
    result.innerText = "Please enter a valid marks";
}

function resetErrorState() {
    scoreInput.classList.remove("border-red-500");
    result.innerText = "";
}

function calculateGrade(marks) {
    let grade = "";
    if (marks >= 80){
        grade = "A+";
    }
    else if (marks >= 70){
        grade = "A";
    }
    else if (marks >= 65){
        grade = "A-";
    }
    else if (marks >= 60){
        grade = "B";
    }
    else if (marks >= 50){
        grade = "C";
    }
    else if (marks >= 40){
        grade = "D";
    }
    else {
        grade = "F";
    }
    return grade;
}