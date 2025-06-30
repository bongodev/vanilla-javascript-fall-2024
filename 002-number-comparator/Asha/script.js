const firstInput = document.getElementById("number1");
const secondInput = document.getElementById("number2");
const result = document.getElementById("result");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const errorClass = 'border-red-500';

function resetStyles() {
    firstInput.classList.remove(errorClass);
    secondInput.classList.remove(errorClass);
    result.innerText = "";
}

function isValidInput() {
    resetStyles();
    if(firstInput.value === "") {
        firstInput.classList.add(errorClass);
        return false;
    }
    if(secondInput.value === "") {
        secondInput.classList.add(errorClass);
        return false;
    }
    return true;
}

function compareNumbers(){
    if(!isValidInput()){
        return;
    }

    n1 = parseInt(firstInput.value);
    n2 = parseInt(secondInput.value);
    if (n1 > n2) {
        result.innerText = `${n1} is greater than ${n2}.`;
    }
    else if (n1 < n2) {
        result.innerText = `${n1} is less than ${n2}.`;
    }
    else {
        result.innerText = `${n1} is equal to ${n2}`;
    }
}

compareButton.addEventListener("click", compareNumbers);
resetButton.addEventListener("click", function(){
    firstInput.value = "";
    secondInput.value = "";
    resetStyles();
    result.innerText = "";
})