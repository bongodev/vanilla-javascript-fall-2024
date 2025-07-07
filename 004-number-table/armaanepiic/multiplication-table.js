const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');

function generateRow({number, rowNo})
{
    // creating row for the table
    const tableRow = document.createElement('tr');

    // cells array
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
   

    // destructuring the cells array to the tableRow
    tableRow.append(...cells);
    return tableRow;
}
function generateTable(number)
{
    for(let rowNo = 1; rowNo <= 10 ; rowNo++)
    {
        const tableRow = generateRow({number, rowNo});
        tableBody.appendChild(tableRow);

        // applying a bg for even rows
        if(rowNo % 2 == 0){
            tableRow.classList.add('bg-gray-600');
        }
    }
    
}

function handleClick()
{
    // make the table body empty before creating number table
    tableBody.innerText = '';

    const number = parseInt(numberInput.value);

    // checking the valid input here
    if(!number){
        alert("enter valid number");
        numberInput.value = 1;
        return;
    }

    // calling the function to generate the table passing the number as argument
    generateTable(number);
}

// add eventlistener to the input field
numberInput.addEventListener('keydown', (e) => e.key === 'Enter' && handleClick());

generateBtn.addEventListener('click', handleClick);