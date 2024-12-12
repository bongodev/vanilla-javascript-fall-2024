const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click', function () {
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