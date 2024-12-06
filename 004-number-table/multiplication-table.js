const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');

generateBtn.addEventListener('click', function () {
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
});

function cleanTable() {
  tableBody.innerHTML = '';
}

function generateTable(num) {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow(num, rowNo);
    tableBody.appendChild(tableRow);
  }
}

function generateRow(num, rowNo) {
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  const cell4 = document.createElement('td');
  const cell5 = document.createElement('td');

  cell1.innerText = num;
  cell2.innerText = ' x ';
  cell3.innerText = rowNo;
  cell4.innerText = ' = ';
  cell5.innerText = num * rowNo;

  const tableRow = document.createElement('tr');

  tableRow.appendChild(cell1);
  tableRow.appendChild(cell2);
  tableRow.appendChild(cell3);
  tableRow.appendChild(cell4);
  tableRow.appendChild(cell5);

  return tableRow;
}
