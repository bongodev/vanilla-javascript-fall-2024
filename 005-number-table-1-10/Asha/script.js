const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');
const generateButton = document.getElementById('generate');
const resetButton = document.getElementById('reset');

resetButton.addEventListener('click', resetFunction);

generateButton.addEventListener('click', () => {
    tableContainerTopRow.innerHTML = '';
    tableContainerBottomRow.innerHTML = '';
    for (let num = 1; num <= 10; num++) {
        const numberTable = getTable(num);
        if (num <= 5) {
            tableContainerTopRow.appendChild(numberTable);
        }
        else {
            tableContainerBottomRow.appendChild(numberTable);
        }  
    }  
});

function getTable(num) {
    const numberTable = document.createElement('table');

    numberTable.className = 'table-auto border border-slate-700 w-full';
    const tableBody = document.createElement('tbody');
    numberTable.appendChild(tableBody);
    for (let i = 1 ; i <= 10; i++) {
        const tableRow = getTableRow({num, i});
        tableBody.appendChild(tableRow);
    }

    return numberTable;
}

function getTableRow({num, i}) {
    const tableRow = document.createElement('tr');
    const cells = [num, '*', i, '=', num*i];
    for(let j = 0; j < 5; j++){
        const cell = document.createElement('td');
        cell.innerHTML = cells[j];
        tableRow.appendChild(cell);
    }
    return tableRow;
}

function resetFunction() {
    tableContainerTopRow.innerHTML = '';
    tableContainerBottomRow.innerHTML = '';
}