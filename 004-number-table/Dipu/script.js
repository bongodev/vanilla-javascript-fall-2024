const tableBody = document.getElementById('table-body');
const generateButton = document.getElementById('generate');
const number = document.getElementById('input-number');
const ERR = 'border-red-500';
function errormessage() {
    number.classList.add(ERR);
}

function isInvalid() {
    if (!number.value) {
        errormessage();
        return true;
    }
    else {
        return false;
    }
}
generateButton.addEventListener('click', function () {
    const num = parseInt(number.value);
    if (isInvalid()) {
        return;
    }
    tableGenerate(num);

});
const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', function () {
    cleanTable();
    number.classList.remove(ERR);
})
function cleanTable() {
    tableBody.innerHTML = ' ';
}
function tableGenerate(num) {
    for (let i = 1; i <= 10; i++) {
        const tableRow = generateRow(num, i);
        tableBody.appendChild(tableRow);
    }

}
function generateRow(num, mult) {
    const cells = [];
    for (let i = 1; i <= 5; i++) {
        const cell = document.createElement('td');
        cells.push(cell);
    }

    cells[0].innerText = num;
    cells[1].innerText = 'x';
    cells[2].innerText = mult;
    cells[3].innerText = '=';
    cells[4].innerText = num * mult;
    const tableRow = document.createElement('tr');
    for (let i = 0; i < cells.length; i++) {

        tableRow.appendChild(cells[i]);
    }

    return tableRow;
}



