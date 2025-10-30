const topRow = document.getElementById("top-row");
const bottomRow = document.getElementById("bottom-row");
const generateBtn = document.getElementById("generate");

generateBtn.addEventListener("click", () => {
  topRow.innerHTML = "";
  bottomRow.innerHTML = "";

  for (let num = 1; num <= 10; num++) {
    const table = createTable(num);
    (num <= 5 ? topRow : bottomRow).appendChild(table);
  }
});

function createTable(num) {
  const table = document.createElement("table");
  table.className = "table-auto border border-slate-700 w-full text-sm mb-4";

  const tbody = document.createElement("tbody");

  for (let i = 1; i <= 10; i++) {
    const row = createRow(num, i);
    tbody.appendChild(row);
  }

  table.appendChild(tbody);
  return table;
}

function createRow(num, i) {
  const row = document.createElement("tr");
  const values = [num, "*", i, "=", num * i];

  values.forEach((val) => {
    const cell = document.createElement("td");
    cell.innerText = val;
    cell.className = "border px-2 py-1 text-center";
    row.appendChild(cell);
  });

  return row;
}
