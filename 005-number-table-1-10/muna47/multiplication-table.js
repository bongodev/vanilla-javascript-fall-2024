const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const topContainer = document.getElementById("top-row");
const bottomContainer = document.getElementById("bottom-row");

generateBtn.addEventListener("click", () => {
  topContainer.innerText = "";
  bottomContainer.innerText = "";
  for (let i = 1; i <= 10; i++) {
    const numTable = createTable(i);

    if (i <= 5) topContainer.appendChild(numTable);
    else bottomContainer.appendChild(numTable);
  }
});

function createTable(number) {
  const table = document.createElement("table");
  table.className =
    "w-full text-sm text-left text-gray-800 border border-gray-300 bg-gray-300 mb-4 rounded-lg shadow";
  const tableBody = document.createElement("tbody");

  for (let row = 1; row <= 10; row++) {
    const tableRow = getRow({ number, row });
    tableBody.appendChild(tableRow);
  }
  table.appendChild(tableBody);
  return table;
}

function getRow({ number, row }) {
  const tableRow = document.createElement("tr");
  tableRow.class = "border-b border-gray-300";
  const data = [number, "*", row, "=", number * row];
  const cells = [];
  for (let i = 0; i < 5; i++) {
    const tData = document.createElement("td");
    tData.innerText = data[i];
    cells.push(tData);
  }
  for (let i = 0; i < cells.length; i++) {
    tableRow.appendChild(cells[i]);
  }
  return tableRow;
}

resetBtn.addEventListener("click", () => {
  topContainer.innerText = "";
  bottomContainer.innerText = "";
});
