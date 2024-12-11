const renderBtn = document.getElementById("generate");
const tableTopRow = document.getElementById("top-row");
const tableBottomRow = document.getElementById("bottom-row");
const resetBtn = document.getElementById("reset");

renderBtn.addEventListener("click", function () {
  cleanTable();
  for (let num = 1; num <= 10; num++) {
    const multiplicationTable = renderTable(num);
    if (num <= 5) {
      tableTopRow.appendChild(multiplicationTable);
    } else {
      tableBottomRow.appendChild(multiplicationTable);
    }
  }
});

resetBtn.addEventListener("click", function () {
  cleanTable();
});

function cleanTable() {
  tableTopRow.innerHTML = "";
  tableBottomRow.innerHTML = "";
}

function renderTable(num) {
  const tableContainer = document.createElement("table");
  tableContainer.className = "table-auto border border-slate-700 w-full";

  const tableBody = document.createElement("tbody");

  for (let row = 1; row <= 10; row++) {
    const tableRow = renderTableRow(num, row);
    tableBody.appendChild(tableRow);
  }
  tableContainer.appendChild(tableBody);

  return tableContainer;
}

function renderTableRow(num, row) {
  const cells = [];

  for (let cellNo = 0; cellNo < 5; cellNo++) {
    const cell = document.createElement("td");
    cells.push(cell);
  }

  cells[0].innerText = num;
  cells[0].classList.add('border-y','border-l','border-amber-500');
  cells[1].innerText = " x ";
  cells[1].classList.add('border-y','border-amber-500');
  cells[2].innerText = row;
  cells[2].classList.add('border-y','border-r','border-amber-500');
  cells[3].innerText = " = ";
  cells[3].classList.add('border','border-amber-500');
  cells[4].innerText = num * row;
  cells[4].classList.add('border','border-amber-500');

  const tableRow = document.createElement("tr");

  for (let cellNo = 0; cellNo < cells.length; cellNo++) {
    tableRow.appendChild(cells[cellNo]);
  }

  return tableRow;
}
