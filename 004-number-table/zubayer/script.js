const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");
const resetButton = document.getElementById("reset-btn");

generateBtn.addEventListener('click', function(){

  const num = parseInt(numberInput.value);
  cleanTable();
  generateTable(num);
});

resetButton.addEventListener("click", function () {
  numberInput.value = "";
  cleanTable();
});

function generateTable(num){

  const tableRow = generateRow(num,1);
  tableBody.appendChild(tableRow);
}

function generateRow(num,mult){
  const cell1 = document.createElement('td');
  const cell2 = document.createElement('td');
  const cell3 = document.createElement('td');
  const cell4 = document.createElement('td');
  const cell5 = document.createElement('td');

  cell1.innerText = num;
  cell2.innerText = ' x ';
  cell3.innerText = mult;
  cell4.innerText = ' = ';
  cell5.innerText = num * mult;

  const tableRow = document.createElement('tr');

  if (mult % 2 === 0) {
    tableRow.classList.add("bg-blue-100"); 
  } else {
    tableRow.classList.add("bg-white"); 
  }


  tableRow.appendChild(cell1);
  tableRow.appendChild(cell2);
  tableRow.appendChild(cell3);
  tableRow.appendChild(cell4);
  tableRow.appendChild(cell5);
  return tableRow;
}

function cleanTable() {
  tableBody.innerHTML = "";
}
function generateTable(num) {
  for (let row = 1; row <= 10; row++) {
    const tableRow = generateRow(num, row);
    tableBody.appendChild(tableRow);
  }
}

function cleanTable() {
  tableBody.innerHTML = "";
}

