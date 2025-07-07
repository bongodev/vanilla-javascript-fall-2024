const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');
function generateRow(number, i)
{
    const row = document.createElement('tr');
    const cell_1 = document.createElement('td');
    const cell_2 = document.createElement('td');
    const cell_3 = document.createElement('td');
    const cell_4 = document.createElement('td');
    const cell_5 = document.createElement('td');
    cell_1.innerText = `${number}`;
    cell_2.innerText = `X`;
    cell_3.innerText = `${i}`;
    cell_4.innerText = `=`;
    cell_5.innerText = `${number * i}`;
    row.appendChild(cell_1);
    row.appendChild(cell_2);
    row.appendChild(cell_3);
    row.appendChild(cell_4);
    row.appendChild(cell_5);
    return row;
}
function generateTable(number)
{
    for(let i = 0; i <= 10 ; i++)
    {
        const row = generateRow(number, i);
        tableBody.appendChild(row);
    }
    
}

function handleClick()
{
    const number = parseInt(numberInput.value);
    if(!number){
        alert("enter valid number");
        numberInput.value = 1;
        return;
    }
    generateTable(number);
}


generateBtn.addEventListener('click', handleClick);