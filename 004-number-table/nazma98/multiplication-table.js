const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');
const resetBtn = document.getElementById('reset');
const errorMsg = document.getElementById('error-msg');

const ERROR_CLASS = 'text-red-500';
const ERROR_CLASS_BORDER = 'border-red-500';

function generateTable() {
    let numberValue = parseInt(numberInput.value);
    resetTable();

    if (isValidInput(numberValue)) {
        removeError();
        generateNumberTable(numberValue);
    } else {
        displayErrorMessage();
    }
}

function isValidInput(numberValue) {
    return typeof (numberValue) === 'number' && !isNaN(numberValue) && numberValue > 0;
}

function displayErrorMessage() {
    errorMsg.classList.remove('hidden');
    errorMsg.classList.add(ERROR_CLASS);
    numberInput.classList.add(ERROR_CLASS_BORDER);
    errorMsg.innerText = 'Please enter a positive integer!';

}

function removeError() {
    errorMsg.classList.add('hidden');
    errorMsg.classList.remove(ERROR_CLASS);
    numberInput.classList.remove(ERROR_CLASS_BORDER);
    errorMsg.innerText = '';
}

function resetInput(){
    numberInput.value = '';
}

function resetTable() {
    tableBody.innerHTML = '';
}

function resetAll(){
    resetInput();
    resetTable();
    removeError();
}

function generateNumberTable(numberValue) {

    for (let row = 1; row <= 10; row++) {
        const tableRow = generateRow(numberValue, row);
        tableBody.appendChild(tableRow);
    }
}

function generateRow(numberValue, row) {
    const tableDataList = [];

    for (let i = 0; i < 5; i++) {
        const tableData = document.createElement('td');
        tableDataList.push(tableData);
    }

    tableDataList[0].innerText = numberValue;
    tableDataList[1].innerText = 'x';
    tableDataList[2].innerText = row;
    tableDataList[3].innerText = '=';
    tableDataList[4].innerText = numberValue * row;

    const tableRow = document.createElement('tr');

    for (let i = 0; i < tableDataList.length; i++) {
        tableRow.appendChild(tableDataList[i]);
    }
    return tableRow;
}

generateBtn.addEventListener('click', generateTable);
resetBtn.addEventListener('click', resetAll);
