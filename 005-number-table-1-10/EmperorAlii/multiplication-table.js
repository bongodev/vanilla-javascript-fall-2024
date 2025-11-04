// Get DOM elements
const buttonGenerate = document.getElementById('generate');
const topRow = document.getElementById('top-row');
const bottomRow = document.getElementById('bottom-row');
const tableContainer = document.getElementById('table-container');

function formatTable(table, tableRow) {
  // formatting for table
  table.classList.add(
    'border', // table border
    'border-gray-500',
    'm-2', // margin around table
    'p-2', // padding inside table
    'w-36', // fixed width for uniformity
    'text-center'
  );

  // formatting for row
  tableRow.classList.add(
    'flex',
    'flex-col',
    'justify-between',
    'items-center',
    'border-gray-400',
    'w-full'
  );
}

// formatting for cell
function cellFormatting(cell) {
  cell.classList.add(
    'p-1', // padding inside each cell
    'w-full',
    'border',
    'border-gray-400',
    'bg-blue-200',
    'text-gray-700'
  );
}

// function for generate one table
function generateTable(input) {
  // create necessary table elements
  const table = document.createElement('table');
  const tableRow = document.createElement('tr');
  const cells = [];

  // formatting
  formatTable(table, tableRow);

  for (let i = 1; i <= 10; i++) {
    const cell = document.createElement('td');
    cell.innerText = `${input} X ${i} = ${input * i}`;
    cellFormatting(cell);
    cells.push(cell);
  }

  tableRow.append(...cells);
  table.appendChild(tableRow);

  return table;
}

function clearTable() {
  topRow.innerHTML = '';
  bottomRow.innerHTML = '';
}

// function to generate multiplication table from 1-10
function multiplicationTable() {
  // clear previous table
  clearTable();

  // create top 5 tables
  for (let input = 1; input <= 5; input++) {
    topRow.append(generateTable(input));
  }

  // create bottom 5 tables
  for (let input = 6; input <= 10; input++) {
    bottomRow.append(generateTable(input));
  }
}

// Generate table on click
buttonGenerate.addEventListener('click', multiplicationTable);
