const generateBtn = document.getElementById("generate");
const topRow = document.getElementById("top-row");
const bottomRow = document.getElementById("bottom-row");


generateBtn.addEventListener("click", function () {
  clearTable();

  for (let num = 1; num <= 10; num++) {
    const table = generateTable(num);

    if (num <= 5) {
      topRow.appendChild(table);
    } else {
      bottomRow.appendChild(table);
    }
  }
});

// clearing table after one operation

function clearTable() {
  topRow.innerText = "";
  bottomRow.innerText = "";
}

// generating table function

function generateTable(number) {
  const tableBody = document.createElement("table");
  for (let rowNum = 1; rowNum <= 10; rowNum++) {
    const tRow = generateRow(number, rowNum);
    if (rowNum % 2 == 0) {
      tRow.classList.add("bg-gray-200");
    }
    tableBody.appendChild(tRow);
  }
  tableBody.classList.add("table-auto", "border-separate", "border", "w-full");
  return tableBody;
}

// generating row function

function generateRow(number, rowNum) {
  const tRow = document.createElement("tr");

  cells = [];
  cellData = [number, "X", rowNum, "=", number * rowNum];

  for (let i = 0; i < cellData.length; i++) {
    const cell = document.createElement("td");
    cell.innerText = cellData[i];
    cells.push(cell);
  }

  tRow.append(...cells);
  return tRow;
}
