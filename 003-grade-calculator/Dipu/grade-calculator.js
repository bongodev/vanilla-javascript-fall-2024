const numberInput = document.getElementById('score');
const calculatorButton = document.getElementById('calculate-btn');
const result = document.getElementById('result');

calculatorButton.addEventListener('click', function () {

    if (isEmptyInput()) {
        errormessge();
        result.innerText = 'Please enter valid marks';

        return;
    }
    const number = parseFloat(numberInput.value);
    if (isInvalid(number)) {

        result.innerText = 'Please enter valid marks';

        return;
    }

    const grade = calculateGrade(number);
    result.innerText = grade;
});
const ERROR_MESS = 'border-red-500';
function errormessge() {
    numberInput.classList.add(ERROR_MESS);

}
function isEmptyInput() {
    if (!numberInput.value) {
        return true;
    }
    return false;

}
function isInvalid(marks) {
    if (marks > 100 || marks < 0) {
        return true;
    }
    return false;
}

function calculateGrade(marks) {
    let grade = ' ';
    if (marks > 100 || marks < 0) {
        grade = 'Invalid Marks';
    }
    else if (marks <= 100 && marks >= 80) {
        grade = 'A+';
    }
    else if (marks < 80 && marks >= 70) {
        grade = 'A';
    }
    else if (marks < 70 && marks >= 60) {
        grade = 'A-';
    }
    else if (marks < 60 && marks >= 50) {
        grade = 'B';
    }
    else if (marks < 50 && marks >= 40) {
        grade = 'C';
    }
    else if (marks < 40 && marks >= 33) {
        grade = 'D';
    }
    else {
        grade = 'F';
    }
    return grade;



}
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    numberInput.value = '0';
    result.innerText = ' ';
    removeErrormessage();

});
function removeErrormessage() {
    numberInput.classList.remove(ERROR_MESS);
}
