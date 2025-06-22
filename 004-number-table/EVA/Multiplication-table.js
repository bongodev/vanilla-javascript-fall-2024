

const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');
const clearBtn = document.getElementById('clear');

clearBtn.addEventListener('click', function () {
    cleanTable();
    numberInput.value = ''; 

})

generateBtn.addEventListener('click', function (){


    const number=parseInt(numberInput.value);
    if(!number)
       { alert("Enter a valid number");
         cleanTable(); }
         else
               generateTable(number);

})

function cleanTable() {
    tableBody.innerHTML = '';
}  


function generateTable(number) {

    tableBody.innerHTML = '';
    for(let i=1;i<=10;i++) {
    
    const row = generateRow({ number, rowno: i });
    tableBody.appendChild(row);
 }
}
function generateRow({ number, rowno }) {
  const tableRow = document.createElement('tr');
  const cells = [];
  const rowdata = [number, ' x ', rowno, ' = ', number * rowno];

  for (let i = 0; i < 5; i++) {
    const cell = document.createElement('td');
    cell.innerText=rowdata[i];
    cells.push(cell);
}
tableRow.append(...cells);
return tableRow;
}
