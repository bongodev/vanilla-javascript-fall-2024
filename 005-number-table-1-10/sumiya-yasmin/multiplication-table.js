const generateButton = document.getElementById('generate');
const tableConatinerTopRow = document.getElementById('top-row');
const tableConatinerBottomRow = document.getElementById('bottom-row');
const resetButton = document.getElementById('reset');

generateButton.addEventListener('click', function () {
  clearTable();
  for (let num = 1; num <= 10; num++) {
    const numberTable = getTable(num);

    if (num <= 5) {
      tableConatinerTopRow.appendChild(numberTable);
    } else {
      tableConatinerBottomRow.appendChild(numberTable);
    }
  }
});

function getTable(num) {
  const numberTable = document.createElement('table');
  numberTable.className = 'table-auto w-full border border-slate-700';
  tableStyle(num, numberTable);

  const tableCaption = document.createElement('caption');
  tableCaption.innerText = `Number Table for ${num}`;
  tableCaption.className =
    'text-lg text-amber-600 bg-black w-fit text-center px-1 rounded-sm font-bold mb-1 mx-auto';
  numberTable.appendChild(tableCaption);

  const tableBody = document.createElement('tbody');

  for (let row = 1; row <= 10; row++) {
    const tableRow = getTableRow(num, row);
    tableBody.appendChild(tableRow);
  }

  numberTable.appendChild(tableBody);
  return numberTable;
}

function getTableRow(num, row) {
  const tableRow = document.createElement('tr');
  const tableCells = [];
  for (let cellNo = 0; cellNo < 5; cellNo++) {
    const cell = document.createElement('td');
    tableCells.push(cell);
  }
  tableCells[0].innerText = num;
  tableCells[1].innerText = ' X ';
  tableCells[2].innerText = row;
  tableCells[3].innerText = ' = ';
  tableCells[4].innerText = num * row;

  for (let cellNo = 0; cellNo < tableCells.length; cellNo++) {
    tableRow.appendChild(tableCells[cellNo]);
  }
  return tableRow;
}

function clearTable() {
  tableConatinerTopRow.innerText = '';
  tableConatinerBottomRow.innerText = '';
}
function tableStyle(num, numberTable) {
  if (num % 2 === 0) {
    numberTable.classList.add('bg-blue-200');
  } else {
    numberTable.classList.add('bg-green-200');
  }
}

resetButton.addEventListener('click', function () {
  clearTable();
});
