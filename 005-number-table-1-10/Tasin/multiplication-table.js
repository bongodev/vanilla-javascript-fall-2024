const tableContainerTopRow=document.getElementById('top-row');
const tableContainerBottomRow =document.getElementById('bottom-row');
const generateBtn = document.getElementById('generate');

generateBtn.addEventListener('click',()=>{
 for(let number=1;number<=10;number++){
    const numberTable= getTable(number);

    if(number<=5){
        tableContainerTopRow.appendChild(numberTable);
    }else{
        tableContainerBottomRow.appendChild(numberTable);
    }
    
 }
})

function getTable(number){
    const numberTable =document.createElement('table');
    numberTable.className='table-auto border border-slate-700 w-full';

    const tableBody =document.createElement('tbody');

    numberTable.appendChild(tableBody);

    for(let rowNo=1;rowNo<=10;rowNo++){
        const tableRow = getTableRow({number,row});
        tableBody.appendChild(tableRow);
    }

    numberTable.appendChild(tableBody);

    return numberTable;

}

function getTableRow({number,row}){
    const cells=[];
    const rowData =[number,'*',row,'=',number*row];

    for(let i=0;i<rowData.length;i++){
        const cell=document.createElement('td');
        cell.innerText=rowData[i];
        cells.push(cell);

    }

    const tableRow=document.createElement('tr');

    tableRow.append(...cells);
    return tableRow;

}