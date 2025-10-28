const inputNum = document.getElementById("input-number");
const errorMsg = document.getElementById("error-message");
const generateBtn = document.getElementById("generate");
const displaymsg = document.getElementById("display-msg");
const tbody = document.getElementById("table-body");
const ERROR_CLASS = "border-red-900";

// input validation check
function checkValidilty() {
  const inputNumber = parseInt(inputNum.value);

  if (inputNumber <= 0 || !inputNumber) {
    errorFunction("Please enter a positive number");
    return false;
  } else return true;
}

// error indicator funtion
function errorFunction(msg) {
  errorMsg.classList.remove("hidden");
  errorMsg.innerText = msg;
  inputNum.classList.add(ERROR_CLASS);
}

// removing error indicator funtion
function clearError() {
  errorMsg.classList.add("hidden");
  inputNum.classList.remove(ERROR_CLASS);
}

// removing table afetr one operation
function clearTable() {
  tbody.innerHTML = "";
  displaymsg.innerHTML = "";
}

generateBtn.addEventListener("click", function () {
  clearError();
  clearTable();
  if (!checkValidilty()) {
    return;
  }

  const inputNumber = parseInt(inputNum.value);

  displaymsg.innerText = `Multiplication table of ${inputNumber}`;
  generateTable(inputNumber);
});

// ////////////////table display////////////////

// table generator function
function generateTable(number) {
  for (let rowNum = 1; rowNum <= 10; rowNum++) {
    const tRow = generateRow(number, rowNum);

    if (rowNum % 2 === 0) {
      tRow.classList.add("bg-gray-200");
    }
    tbody.appendChild(tRow);
  }
}

// row generator function
function generateRow(number, rowNum) {
  const tableRow = document.createElement("tr");
  cells = [];
  cellData = [number, "*", rowNum, "=", number * rowNum];
  for (let i = 0; i < cellData.length; i++) {
    const cell = document.createElement("td");
    cell.innerText = cellData[i];
    cells.push(cell);
  }
  tableRow.append(...cells);
  return tableRow;
}
