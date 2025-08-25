const tableContainerTopRow=document.getElementById('top-row');
const tableContainerBottomRow =document.getElementById('bottom-row');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click',()=>{

 for(let num = 1; num <= 10; num++){
    const numberTable = getTable(num);

    if(num <= 5){
        tableContainerTopRow.appendChild(numberTable);
    }else{
        tableContainerBottomRow.appendChild(numberTable);
    }
    
  }
});


function getTable(num){
    const numberTable =document.createElement('table');

    numberTable.className='table-auto border border-slate-700 w-full';

    const tableBody =document.createElement('tbody');

    numberTable.appendChild(tableBody);

    for(let row = 1; row <= 10; row++){
        const tableRow = getTableRow(num, row);
        tableBody.appendChild(tableRow);
    }

    numberTable.appendChild(tableBody);

    return numberTable;

}

function getTableRow(num, row){
    const cells=[];
    const rowData =[num,'*', row, '=', num*row];

    for(let i = 0; i < rowData.length; i++){
        const cell=document.createElement('td');
        cell.innerText=rowData[i];
        cells.push(cell);

    }

    const tableRow = document.createElement('tr');

    tableRow.append(...cells);
    return tableRow;

}