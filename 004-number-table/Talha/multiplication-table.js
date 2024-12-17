const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');
const resetBtn = document.getElementById('reset');
const errorMsg = document.getElementById('error-message');

const resetErrorStyles = () => {
  numberInput.classList.remove('border-red-500');
  errorMsg.classList.add('hidden');
};

const isValidInput = () => {
  resetErrorStyles();
  if (!numberInput.value) {
    numberInput.classList.add('border-red-500');
    errorMsg.classList.remove('hidden');
    errorMsg.textContent = 'Please enter a valid number!!';
    cleanTable();
    return false;
  }
  if (numberInput.value < 0) {
    numberInput.classList.add('border-red-500');
    errorMsg.classList.remove('hidden');
    errorMsg.textContent = 'Please enter a positive number!!';
    cleanTable();
    return false;
  }
  return true;
};

const resetAll = () => {
  numberInput.value = '1';
  cleanTable();
  resetErrorStyles();
};

const renderMultTable = () => {
  if (!isValidInput()) {
    return;
  }
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
};

const cleanTable = () => (tableBody.innerHTML = '');

const generateTable = (num) => {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow({ num, rowNo });
    tableRow.className = 'border border-amber-500 bg-sky-200';
    tableBody.appendChild(tableRow);
  }
};

const generateRow = ({ num, rowNo }) => {
  const cells = [];
  const cellData = [num, ' x ', rowNo, ' = ', num * rowNo];

  cellData.forEach((data) => {
    const cell = document.createElement('td');
    cell.innerText = data;
    cells.push(cell);
  });

  const tableRow = document.createElement('tr');

  tableRow.append(...cells);

  return tableRow;
};

generateBtn.addEventListener('click', renderMultTable);
resetBtn.addEventListener('click', resetAll);
