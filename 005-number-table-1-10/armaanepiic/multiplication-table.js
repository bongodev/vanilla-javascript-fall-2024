const generateBtn = document.getElementById("generate");
const tableContainerTopRow = document.getElementById("top-row");
const tableContainerBottomRow = document.getElementById("bottom-row");

function getTableRow({ number, rowNo }) {
  const tableRow = document.createElement("tr");
  const rowData = [number, "*", rowNo, "=", number * rowNo];

  //   const cells = rowData.map((data) => {
  // 	const cell = document.createElement('td');
  // 	cell.innerText = data;
  // 	return cell;
  //   });

  //   rowData.forEach((data) => {
  //     const cell = document.createElement("td");
  //     cell.innerText = data;
  //     cells.push(cell);
  //   });
  //   const tableData = document.createElement("td");

  // Object.assign(target, source)
  const cells = rowData.map((data) =>
    Object.assign(document.createElement("td"), { innerText: data })
  );
  tableRow.append(...cells);
  return tableRow;
}

function getTable(number) {
  const numberTable = document.createElement("table");
  numberTable.className = "table-auto w-full border border-slate-700";
  const tableBody = document.createElement("tbody");
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = getTableRow({ number, rowNo });
    if (rowNo % 2 == 0) {
      tableRow.className = "bg-slate-200";
    }
    tableBody.appendChild(tableRow);
  }
  numberTable.appendChild(tableBody);
  return numberTable;
}

generateBtn.addEventListener("click", () => {
  tableContainerTopRow.innerHTML = "";
  tableContainerBottomRow.innerHTML = "";
  for (let num = 1; num <= 10; num++) {
    const numberTable = getTable(num);
    if (num <= 5) tableContainerTopRow.appendChild(numberTable);
    else tableContainerBottomRow.appendChild(numberTable);
  }
});
