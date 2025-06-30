const field1 = document.getElementById("number1");
const field2 = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");

const ERROR_CLASS = "border-red-500"
resetButton.addEventListener("click", resetField);

function resultContainer(message) {
    const result = document.getElementById("result");
    result.innerHTML = message;
}

compareButton.addEventListener("click", function () {
    resetErrorClass();

    if (!isValidInput()) {
        return;
    }

    if (field1.value > field2.value) {
        resultContainer("Number 1 is greater than Number 2");
    } else if (field1.value < field2.value) {
        resultContainer("Number 2 is greater than Number 1");
    } else {
        resultContainer("Both values are equal");
    }
})

function isValidInput() {
    if (!field1.value && !field2.value) {
        field1.classList.add(ERROR_CLASS);
        field2.classList.add(ERROR_CLASS);
        resultContainer('');
        return false;
    } else if (!field1.value) {
        field1.classList.add(ERROR_CLASS);
        resultContainer('');
        return false;
    } else if (!field2.value) {
        field2.classList.add(ERROR_CLASS);
        resultContainer('');
        return false;
    }
    return true;
}

function resetErrorClass() {
    field1.classList.remove(ERROR_CLASS);
    field2.classList.remove(ERROR_CLASS);
}

function resetField() {
    field1.value = '0';
    field2.value = '0';
    resultContainer('');
    resetErrorClass();
}