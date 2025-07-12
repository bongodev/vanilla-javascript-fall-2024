const inputNum = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const resetBtn = document.getElementById("reset");
const tableBody = document.getElementById("table-body");
const errorMsg = document.getElementById("errorMsg");

generateBtn.addEventListener("click", function () {
  tableBody.innerHTML = "";

  if (!validInput(inputNum.value.trim())) {
    errorMsg.classList.remove("hidden");
    return;
  }

  errorMsg.classList.add("hidden");
  const number = parseInt(inputNum.value.trim());
  // generate multiplication table
  multiplication(number);
});

function validInput(num) {
  if (!num) {
    errorMsg.innerText = "Input can't be empty";
    return false;
  } else if (num < 0) {
    errorMsg.innerText = "Input can't be negative";
    return false;
  } else if (num != parseInt(num)) {
    errorMsg.innerText = "Input can't be float";
    return false;
  }

  return true;
}

function multiplication(number) {
  for (let rowNo = 1; rowNo <= 10; rowNo++) {
    const row = getRow({ number, rowNo });
    tableBody.appendChild(row);
  }
}

function getRow({ number, rowNo }) {
  const currentRow = document.createElement("tr");
  currentRow.classList.add(
    "bg-white",
    "border-b",
    "bg-gray-400",
    "dark:border-black-300",
    "border-gray-200"
  );
  const columnData = [number, "*", rowNo, "=", number * rowNo];
  var cells = [];
  for (let i = 0; i < 5; i++) {
    const rowData = document.createElement("td");
    rowData.innerText = columnData[i];
    cells.push(rowData);
  }
  cells.forEach((cell) => currentRow.appendChild(cell));
  return currentRow;
}
resetBtn.addEventListener("click", function () {
  tableBody.innerHTML = "";
  inputNum.value = "";
});
