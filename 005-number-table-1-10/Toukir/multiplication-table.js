const generateBtn = document.getElementById('generate');
const resetBtn = document.getElementById('reset');

const tableContainer = document.getElementById('table-container');
const topRow = document.getElementById('top-row');
const bottomRow = document.getElementById('bottom-row');

generateBtn.addEventListener('click', function() {
   for(let i=1;i<=10;i++){
    const numberTable=getTable(i);
    if (i<=5) {
        topRow.appendChild(numberTable);
    }
    else{
        bottomRow.appendChild(numberTable);
    }
   }
});

resetBtn.addEventListener('click', function() {
    
    tableContainer.innerHTML = ''; 
});

function getTable(num) {
    const numberTable = document.createElement('table');
    numberTable.className = 'table-auto border border-slate-700 w-full';
    const tableBody = document.createElement('tbody');
    
    for (let row = 1; row <= 10; row++) {
        const tableRow = getTableRow(num, row);
        tableBody.appendChild(tableRow);
    }
    
    numberTable.appendChild(tableBody); 
    return numberTable;
}

function getTableRow(num, row) {
    const tableRow = document.createElement('tr');
    const cells = [];

    for (let cellNo = 0; cellNo < 5; cellNo++) {
        const cell = document.createElement('td');
        cells.push(cell);
    }

    cells[0].innerText = num;         
    cells[1].innerText = ' x ';       
    cells[2].innerText = row;         
    cells[3].innerText = ' = ';      
    cells[4].innerText = num * row;   

   
    for (let i = 0; i < cells.length; i++) {
        tableRow.appendChild(cells[i]);
    }

    return tableRow;
}
