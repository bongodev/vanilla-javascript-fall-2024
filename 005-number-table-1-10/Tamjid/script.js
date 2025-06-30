const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');
const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset-btn');
const errorMessage = document.getElementById('error-message');

let generated = false;

generateBtn.addEventListener('click', function () {
  if (generated === true) { 
    errorMessage.innerText = 'The table is already generated';
    errorMessage.classList.remove('hidden');
    return; 
  }

  for (let num = 1; num <= 10; num++) {
    const numberTable = getTable(num);

    if(num%2==0){
        numberTable.classList.add('bg-gray-300') 
    }

    if (num <= 5) {
      tableContainerTopRow.appendChild(numberTable);
    } else {
      tableContainerBottomRow.appendChild(numberTable);
    }
  }

  generated = true;
  errorMessage.classList.add('hidden');
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
  const tableRow = document.createElement('tr');

  const cellsContent = [num, ' x ', row, ' = ', num * row];
  cellsContent.forEach((content) => {
    const cell = document.createElement('td');
    cell.innerText = content;
    tableRow.appendChild(cell);
  });

  return tableRow;
}

resetBtn.addEventListener('click', function () {
  tableContainerTopRow.innerHTML = '';
  tableContainerBottomRow.innerHTML = '';
  generated = false;
  errorMessage.innerText = '';
  errorMessage.classList.add('hidden');
});
