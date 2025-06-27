const generateBtn = document.getElementById("generate");
const tableContainerTopRow = document.getElementById("top-row");
const tableContainerBottomRow = document.getElementById("bottom-row");

generateBtn.addEventListener("click", () => {
  tableContainerTopRow.innerHTML = "";
  tableContainerBottomRow.innerHTML = "";

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
  const numberTable = document.createElement("table");
  numberTable.className = "table-auto border border-slate-700 w-full";

  const tableBody = document.createElement("tbody");

  for (let i = 1; i <= 10; i++) {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${num}</td>
        <td>x</td>
        <td>${i}</td>
        <td>=</td>
        <td>${num * i}</td>
        `;
    tableBody.appendChild(row);
  }

  numberTable.appendChild(tableBody);

  return numberTable;
}
