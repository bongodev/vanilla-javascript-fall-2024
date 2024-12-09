const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");
const errorMessage = document.getElementById("error-message");
const resetButton = document.getElementById("reset-btn");

generateBtn.addEventListener("click", function () {
  if (numberInput.value == "" || numberInput.value<0) {
    errorMessage.innerText = "Please enter valid input";
    errorMessage.classList.remove("hidden");
    numberInput.classList.add("border-red-500", "bg-red-100");
    return;
  }
  const num = parseInt(numberInput.value);
  numberInput.classList.remove("border-red-500", "bg-red-100");
  errorMessage.classList.add("hidden");
  cleanTable();
  generateTable(num);
});

function cleanTable() {
  tableBody.innerHTML = "";
}

function generateTable(num) {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow(num, rowNo);
    if (rowNo % 2 === 0) {
      tableRow.style.backgroundColor = "#a8a8a8";
    } else {
      tableRow.style.backgroundColor = "#f0f0f0";
    }

    tableBody.appendChild(tableRow);
  }
}

function generateRow(num, rowNo) {
  const cells = [];
  for (let i = 1; i <= 5; i++) {
    const cell = document.createElement("td");
    cells.push(cell);
  }

  cells[0].innerText = num;
  cells[1].innerText = " x ";
  cells[2].innerText = rowNo;
  cells[3].innerText = " = ";
  cells[4].innerText = num * rowNo;

  const tableRow = document.createElement("tr");

  for (let i = 0; i < cells.length; i++) {
    tableRow.appendChild(cells[i]);
  }

  return tableRow;
}
resetButton.addEventListener("click", function () {
  numberInput.value = "";
  cleanTable();
  errorMessage.innerText = "";
  errorMessage.classList.add("hidden");
  numberInput.classList.remove("border-red-500", "bg-red-100");
});
