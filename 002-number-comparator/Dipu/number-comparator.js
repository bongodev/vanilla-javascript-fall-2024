const inputNum1 = document.getElementById('number1');
const inputnum2 = document.getElementById('number2');
const comparatorButton = document.getElementById('compare');
const result = document.getElementById('result');
const Erro_Message = 'border-red-500';
function ErrorStyle() {
    inputNum1.classList.remove(Erro_Message);
    inputnum2.classList.remove(Erro_Message);
    return;

}
function isvalidnumber() {
    ErrorStyle();
    if (!inputNum1.value) {
        inputNum1.classList.add(Erro_Message);

        return false;
    }
    if (!inputnum2.value) {
        inputnum2.classList.add(Erro_Message);
        return false;
    }
    return true;
}
comparatorButton.addEventListener('click', function () {
    if (!isvalidnumber()) {
        return;
    }
    const number1 = parseFloat(inputNum1.value);
    const number2 = parseFloat(inputnum2.value);
    if (number1 > number2) {
        result.innerText = 'First number is Greater';
    }
    else if (number1 < number2) {
        result.innerText = 'Second Number is Greater';
    }
    else {
        result.innerText = 'Both are Equal';
    }
});
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    inputNum1.value = '0';
    inputnum2.value = '0';
    result.innerText = ' ';
    ErrorStyle();
});