const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset-btn");
const tableBody = document.getElementById("table-body");

generateBtn.addEventListener("click", function () {
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
});

resetBtn.addEventListener("click", function () {
  resetInputs();
});

function cleanTable() {
  tableBody.innerHTML = "";
}

function generateTable(num) {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow(num, rowNo);
    tableBody.appendChild(tableRow);
  }
}

function generateRow(num, rowNo) {
  const cells = [];
  for (let i = 1; i <= 5; i++) {
    const cell = document.createElement("td");
    cells.push(cell);
  }

  cells[0].innerText = num;
  cells[1].innerText = " x ";
  cells[2].innerText = rowNo;
  cells[3].innerText = " = ";
  cells[4].innerText = num * rowNo;

  const tableRow = document.createElement("tr");

  for (let i = 0; i < cells.length; i++) {
    tableRow.appendChild(cells[i]);
  }

  return tableRow;
}

function resetInputs() {
  numberInput.value = "1";

  cleanTable();
}
