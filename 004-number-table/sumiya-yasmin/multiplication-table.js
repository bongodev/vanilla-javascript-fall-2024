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
for(let i=1;i<=10;i++){
const tableRow= generateRow(num, i);
tableBody.appendChild(tableRow);
}
}

function generateRow(num, mult){
    const cell1=document.createElement('td');
    const cell2=document.createElement('td');
    const cell3=document.createElement('td');
    const cell4=document.createElement('td');
    const cell5=document.createElement('td');

    cell1.innerText=num;
    cell2.innerText='x';
    cell3.innerText=mult;
    cell4.innerText='=';
    cell5.innerText=num*mult;
    const tableRow=document.createElement('tr');
    tableRow.appendChild(cell1);
    tableRow.appendChild(cell2);
    tableRow.appendChild(cell3);
    tableRow.appendChild(cell4);
    tableRow.appendChild(cell5);
    
    return tableRow;
}
