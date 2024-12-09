const inputNumber = document.getElementById("input-number");
const generateButton = document.getElementById("generate");
const tableBody = document.getElementById("table-body");
const errorText = document.getElementById("error-text");
const resetButton = document.getElementById("reset");
const ERROR_CLASS = "border-red-500";
const ERROR_TEXT = "text-red-600";

function resetErrorStyles() {
  errorText.innerText = "";
  inputNumber.classList.remove(ERROR_CLASS);
}
function isValidInput() {
  if (!inputNumber.value) {
    return false;
  }
  return true;
}
generateButton.addEventListener("click", function () {
  if (!isValidInput()) {
    cleanTable();
    inputNumber.classList.add(ERROR_CLASS);
    errorText.classList.add(ERROR_TEXT);
    errorText.innerText = "Your input is empty.Enter a valid Number";
    return;
  }
  const num = parseInt(inputNumber.value);
  cleanTable();
  resetErrorStyles();
  generateTable(num);
});

function cleanTable() {
  tableBody.innerHTML = "";
}
function generateTable(num) {
  for (let mult = 1; mult <= 10; mult++) {
    const tableRow = generateRow(num, mult);
    tableBody.appendChild(tableRow);
  }
  console.log(tableBody)
}

function generateRow(num, mult) {
  const cells = [];
  for (let i = 1; i <= 5; i++) {
    const cell = document.createElement("td");
    cells.push(cell);
  }

  cells[0].innerText = num;
  cells[1].innerText = "x";
  cells[2].innerText = mult;
  cells[3].innerText = "=";
  cells[4].innerText = num * mult;

  const tableRow = document.createElement("tr");
  for (let i = 0; i < cells.length; i++) {
    tableRow.appendChild(cells[i]);
  }
  return tableRow;
}
resetButton.addEventListener("click", function () {
  inputNumber.value=''
  tableBody.innerHTML = "";
  resetErrorStyles();
});
