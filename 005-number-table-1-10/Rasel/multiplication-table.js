const generateButton = document.getElementById('generate');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');

generateButton.addEventListener('click', function () {
    for (let num = 1; num <= 10; num++) {
        const tableof1 = getTable(num);
        if (num <= 5) {

            tableContainerTopRow.appendChild(tableof1);
        }
        else {
            tableContainerBottomRow.appendChild(tableof1);
        }

    }


});
function getTable(num) {
    const numberTable = document.createElement('table');
    numberTable.className = 'table-auto border border-slate-700 w-full';
    const tableBody = document.createElement('tbody');
    for (let row = 1; row <= 10; row++) {
        const tableRow = getTableRow(num, row);
        tableBody.appendChild(tableRow);

    }
    numberTable.appendChild(tableBody);
    return numberTable;


}
function getTableRow(num, row) {
    const cells = [];
    for (let cellNo = 0; cellNo < 5; cellNo++) {
        const cell = document.createElement('td');
        cells.push(cell);

    }
    cells[0].innerText = num;
    cells[1].innerText = 'x';
    cells[2].innerText = row;
    cells[3].innerTexT = '=';
    cells[4].innerTexT = num * row;
    const tableRow = document.createElement('tr');
    for (let cellNo = 0; cellNo < cells.length; cellNo++) {
        tableRow.appendChild(cells[cellNo]);
    }
    return tableRow;
}
