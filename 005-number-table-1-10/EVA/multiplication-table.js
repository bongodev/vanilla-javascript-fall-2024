const generateButton = document.getElementById('generate');
const topContainer = document.getElementById('top-row');
const bottomContainer = document.getElementById('bottom-row');


generateButton.addEventListener('click',  () => {
topContainer.innerHTML='';
bottomContainer.innerHTML='';

for ( let num=1 ; num<=10;num++)
{
    const numberTable = getTable(num);
    if(num<=5 )
        topContainer.appendChild(numberTable);
    else
    bottomContainer.appendChild(numberTable);

}
});

function  getTable(num) {
    
    const numberTable = document.createElement('table');
    numberTable.className = 'table-auto border border-red-500 w-full';

    const tableBody = document.createElement('tbody');
    
    for( let row = 1 ; row <=10; row++)
    {
        const tableRow = getTableRow(row, num);
        tableBody.appendChild(tableRow);
    }

    numberTable.appendChild(tableBody);

    return numberTable;
}

function getTableRow(row ,num)
{
    const cells=[];
    const rowdata =[num ,'*', row , '=', num*row ];
    for(let data =0;data<5 ; data++)
    {
       const cell = document.createElement('td');
       cell.innerText=rowdata[data];
       cells.push(cell);
    }

    const tableRow =document.createElement('tr');
    tableRow.append(...cells);
    return tableRow;

}