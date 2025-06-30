const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");
const resetBtn = document.getElementById("reset");
const errorMsg = document.getElementById("error-msg");

// Table generate function
function generateTable(num) {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const tableRow = generateRow(num, rowNo);
    tableBody.appendChild(tableRow);
  }
}

// Row Generate funcition
function generateRow(num, rowNo) {
  //Empty list for storing the cells for table data
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
function resetErrorStyles() {
  numberInput.classList.remove("border-red-500");
  errorMsg.classList.add("hidden");
}
// Input Validation
function isValidInput() {
  resetErrorStyles();
  if (numberInput.value < 1) {
    numberInput.classList.add("border-red-500");
    errorMsg.classList.remove("hidden");
    errorMsg.textContent = `Please enter a positive number`;

    return false;
  }
  return true;
}
//Clean Table
function cleanTable() {
  tableBody.innerHTML = "";
}

//Generate Multiplication table
generateBtn.addEventListener("click", function () {
  if (!isValidInput()) {
    return;
  }
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
});
//reset button
resetBtn.addEventListener("click", function () {
  cleanTable();
  numberInput.value = "";
  resetErrorStyles();
});
