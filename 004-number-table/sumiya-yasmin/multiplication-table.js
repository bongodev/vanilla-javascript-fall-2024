const inputNumber=document.getElementById('input-number');
const generateButton=document.getElementById('generate');
const tableBody=document.getElementById('table-body');

generateButton.addEventListener('click', function(){
    const num= parseInt(inputNumber.value);
    cleanTable();
    generateTable(num);
});

function cleanTable(){
    tableBody.innerHTML='';
}
function generateTable(num){
for(let mult=1;mult<=10;mult++){
const tableRow= generateRow(num, mult);
tableBody.appendChild(tableRow);
}
}

function generateRow(num, mult){
    const cells= [];
    for (let i=1; i<=5; i++){
        const cell=document.createElement('td');
        cells.push(cell);
    }

    cells[0].innerText=num;
    cells[1].innerText='x';
    cells[2].innerText=mult;
    cells[3].innerText='=';
    cells[4].innerText=num*mult;

    const tableRow=document.createElement('tr');
    for(let i=0; i<cells.length; i++){
        tableRow.appendChild(cells[i]);
    }
    return tableRow;
}
