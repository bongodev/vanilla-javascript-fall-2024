const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');
const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');

generateBtn.addEventListener('click', function () {
  resetTable();
  for (let num = 1; num <= 10; num++) {
    const numberTable = getTable(num);

    if (num <= 5) {
      tableContainerTopRow.appendChild(numberTable);
    } else {
      tableContainerBottomRow.appendChild(numberTable);
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
  cells[1].innerText = ' x ';
  cells[2].innerText = row;
  cells[3].innerText = ' = ';
  cells[4].innerText = num * row;

  const tableRow = document.createElement('tr');

  for (let cellNo = 0; cellNo < cells.length; cellNo++) {
    tableRow.appendChild(cells[cellNo]);
  }

  return tableRow;
}

function resetTable(){
  tableContainerTopRow.innerHTML = '';
  tableContainerBottomRow.innerHTML = '';
}

resetBtn.addEventListener('click', resetTable);
