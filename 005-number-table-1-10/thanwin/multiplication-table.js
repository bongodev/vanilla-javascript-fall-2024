const tableContainerTopRow = document.getElementById("top-row");
const tableContainerBottomRow = document.getElementById("bottom-row");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  reset();
  for (let i = 1; i <= 5; i++) {
    tableContainerTopRow.appendChild(generateTable(i));
  }
  for (let i = 6; i <= 10; i++) {
    tableContainerBottomRow.appendChild(generateTable(i));
  }
});

function generateTable(number) {
  const tableElement = document.createElement("table");
  tableElement.classList.add(
    "table-auto",
    "border",
    "border-gray-200",
    "w-full"
  );
  const tableBody = document.createElement("tbody");
  tableElement.appendChild(tableBody);
  for (let i = 1; i <= 10; i++) {
    tableBody.appendChild(row(number, i, number * i));
  }

  return tableElement;
}

function row(number, factor, result) {
  const tr = document.createElement("tr");
  tr.classList.add(
    "font-bold",
    "text-sm",
    "text-slate-200",
    "even:bg-gray-800",
    "odd:bg-gray-900"
  );
  tr.innerHTML = `
    <td class="p-2">${number}</td>
    <td class="p-2">x</td>
    <td class="p-2">${factor}</td>
    <td class="p-2">=</td>
    <td class="p-2">${result}</td>
    `;
  return tr;
}

function reset() {
  tableContainerTopRow.innerHTML = "";
  tableContainerBottomRow.innerHTML = "";
}
