const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');

function generateRow({number, rowNo})
{
    const row = document.createElement('tr');
    const cells = [];
    for(let i = 0; i < 5 ; i++){
        const cell = document.createElement('td');
        cells.push(cell);
    }
    cells[0].innerText = number;
    cells[1].innerText = "X";
    cells[2].innerText = rowNo;
    cells[3].innerText = "=";
    cells[4].innerText = number * rowNo;

    for(let i = 0 ; i < cells.length ; i++){
        row.appendChild(cells[i]);
    }

    return row;
}
function generateTable(number)
{
    for(let i = 1; i <= 10 ; i++)
    {
        const row = generateRow({number, rowNo : i});
        tableBody.appendChild(row);
        if(i % 2 == 0){
            row.classList.add('bg-gray-600');
        }
    }
    
}

function handleClick()
{
    tableBody.innerText = '';
    const number = parseInt(numberInput.value);
    if(!number){
        alert("enter valid number");
        numberInput.value = 1;
        return;
    }
    generateTable(number);
}


generateBtn.addEventListener('click', handleClick);