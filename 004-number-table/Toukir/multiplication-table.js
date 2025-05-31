const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');

generateBtn.addEventListener('click', () => {
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
});

const cleanTable = () => (tableBody.innerHTML = '');

const generateTable = (num) => {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow({ num, rowNo });
    tableBody.appendChild(tableRow);
  }
};

const generateRow = ({ num, rowNo }) => {
  const cells = [];
  const rowData = [num, ' x ', rowNo, ' = ', num * rowNo];

  rowData.forEach((data) => {
    const cell = document.createElement('td');
    cell.innerText = data;
    cells.push(cell);
  });

  const tableRow = document.createElement('tr');

  tableRow.append(...cells);

  return tableRow;
};
