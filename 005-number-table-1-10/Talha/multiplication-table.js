const renderBtn = document.getElementById("generate");
const tableTopRow = document.getElementById("top-row");
const tableBottomRow = document.getElementById("bottom-row");

renderBtn.addEventListener("click", function () {
  cleanTable();
  for (let num = 1; num <= 10; num++) {
    const multiplicationTable = renderTable(num);
    if (num <= 5) {
      tableTopRow.appendChild(multiplicationTable);
    } else {
      tableBottomRow.appendChild(multiplicationTable);
    }
  }
});

