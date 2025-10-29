const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body"); 

generateBtn.addEventListener("click", function () {
  const number = parseInt(numberInput.value);

  if (!number || isNaN(number)) {
    alert("Please enter a valid number");
    return;
  }
  generateTable(number);
});

function generateTable(number) {
  tableBody.innerHTML = "";
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow({ number, rowNo });
    tableBody.appendChild(tableRow);
  }
}

function generateRow({ number, rowNo }) {
  const tableRow = document.createElement("tr");
  const rowData = [number, "*", rowNo, "=", number * rowNo];
  const cells = [];

  for (let i = 0; i < rowData.length; i++) {
    const cell = document.createElement("td");
    cell.innerText = rowData[i];
    cells.push(cell);
  }

  tableRow.append(...cells);
  return tableRow;
}
