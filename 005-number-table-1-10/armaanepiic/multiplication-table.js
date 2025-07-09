const generateBtn = document.getElementById('generate');
const tableContainerTopRow = document.getElementById('top-row');
const tableContainerBottomRow = document.getElementById('bottom-row');

function getTableRow({number, tRow})
{
	
}

function getTable({number})
{
	const numberTable = document.createElement('table');
	numberTable.className = 'table-auto w-full border border-slate-700';
	const tableBody = document.createElement('tbody');
	for(let row = 1 ; row <= 10 ; row++)
	{
		const tableRow = getTableRow({number, row});
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