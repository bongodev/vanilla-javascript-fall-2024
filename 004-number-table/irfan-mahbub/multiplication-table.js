const numberInput = document.getElementById("input-number");
const generateButton = document.getElementById("generate");
const tableContainer = document.getElementById("table-container");
const resetButton = document.getElementById("reset");

function createTableFor(number) {
  const table = document.createElement("table");
  table.className = "w-full border-collapse text-center";

  for (let i = 1; i <= 10; i++) {
    const tableRow = document.createElement("tr");
    tableRow.className = "border-b";

    const leftCell = document.createElement("td");
    leftCell.innerText = `${number} * ${i}`;

    const rightCell = document.createElement("td");
    rightCell.innerText = number * i;

    tableRow.appendChild(leftCell);
    tableRow.appendChild(rightCell);

    table.appendChild(tableRow);
  }

  return table;
}

generateButton.addEventListener("click", function () {
  const number = parseInt(numberInput.value);
  tableContainer.innerHTML = "";
  const table = createTableFor(number);
  tableContainer.appendChild(table);
});

resetButton.addEventListener("click", function () {
  numberInput.value = "";
  tableContainer.innerHTML = "";
});
