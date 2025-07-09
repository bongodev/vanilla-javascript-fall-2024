const generateBtn = document.getElementById('generate');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');

function getTableRow({number, rowNo})
{

	const tableRow = document.createElement('tr');
	const cells = [];
    const rowData = [number, "X" , rowNo, "=", number*rowNo];
    for(let i = 0; i < 5 ; i++){
        const cell = document.createElement('td');
        cell.classList.add('text-center');
        cell.classList.add('px-4');
        cell.classList.add('py-2');
        cell.innerText = rowData[i];
        cells.push(cell);
    }
	tableRow.append(...cells);
	console.log(tableRow);
    return tableRow;
}

function getTable(number)
{
	
	const numberTable = document.createElement('table');
	numberTable.className = 'table-auto w-full border border-slate-700';
	const tableBody = document.createElement('tbody');
	for(let rowNo = 1 ; rowNo <= 10 ; rowNo++)
	{
		const tableRow = getTableRow({number, rowNo});
		tableBody.appendChild(tableRow);
	}
	numberTable.appendChild(tableBody); 
	return numberTable;
}

generateBtn.addEventListener('click', () => {
	for(let num = 1 ; num <= 10 ; num++) {
		const numberTable = getTable(num);
		if(num <= 5) tableContainerTopRow.appendChild(numberTable);
		else tableContainerBottomRow.appendChild(numberTable);
	}
})