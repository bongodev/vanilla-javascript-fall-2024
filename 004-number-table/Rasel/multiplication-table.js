const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");
const resetBtn = document.getElementById("reset");
const errorMsg = document.getElementById("error-message");

function resetErrorStyles() {
  numberInput.classList.remove("border-red-500");
  errorMsg.classList.add("hidden");
}

function isValidInput() {
  resetErrorStyles();
  if (!numberInput.value) {
    numberInput.classList.add("border-red-500");
    errorMsg.classList.remove("hidden");
    errorMsg.textContent = "Please enter a valid number!!";
    return false;
  }
  if (numberInput.value < 0) {
    numberInput.classList.add("border-red-500");
    errorMsg.classList.remove("hidden");
    errorMsg.textContent = "Please enter a positive number!!";
    return false;
  }
  return true;
}

generateBtn.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
});

function cleanTable() {
  tableBody.innerHTML = "";
}

function generateTable(num) {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow(num, rowNo);
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
  cells[1].innerText = " X ";
  cells[2].innerText = rowNo;
  cells[3].innerText = " = ";
  cells[4].innerText = num * rowNo;

  const tableRow = document.createElement("tr");

  for (let i = 0; i < cells.length; i++) {
    tableRow.appendChild(cells[i]);
  }

  return tableRow;
}

resetBtn.addEventListener("click", function () {
  numberInput.value = "1";
  cleanTable();
  resetErrorStyles();
});
