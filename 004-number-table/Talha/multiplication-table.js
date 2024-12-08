const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");

generateBtn.addEventListener("click", function () {
  const num = parseInt(numberInput.value);

  cleanTable();
  generateTable(num);
});

function cleanTable() {
  tableBody.innerHTML = "";
}

function generateTable(num){
    for(rowNo = 1;rowNo <= 10;rowNo++){
        const tableRow = generateRow(num,rowNo);
        tableBody.appendChild(tableRow);
    }
}
