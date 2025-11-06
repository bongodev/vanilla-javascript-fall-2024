const generateBtn = document.getElementById("generate");
const topRow = document.getElementById("top-row");
const bottomRow = document.getElementById("bottom-row");

// Click event
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

// generate row
const generateRow = ({ num, rowNo }) => {
  const tableRow = document.createElement("tr");
  const cells = [];
  const rowData = [num, " x ", rowNo, " = ", num * rowNo];

  rowData.forEach((data) => {
    const cell = document.createElement("td");
    cell.innerText = data;
    cells.push(cell);
  });

  tableRow.append(...cells);
  return tableRow;
};

// generate table
function generateTable(number) {
  const table = document.createElement("table");
  table.className = "table-auto border border-slate-700 w-full";
  const tableBody = document.createElement("tbody");
  for (let rowNum = 1; rowNum <= 10; rowNum++) {
    const tRow = generateRow({ num: number, rowNo: rowNum });
    tableBody.appendChild(tRow);
  }
  table.appendChild(tableBody);
  return table;
}

// clearing table after one operation
function clearTable() {
  topRow.innerText = "";
  bottomRow.innerText = "";
}
