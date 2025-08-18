const numberInput = document.getElementById('number-input');
const generateBtn = document.getElementById('generate');
const tableBody=document.getElementById('table-body');


generateBtn.addEventListener('click',function(){
    const number =parseInt(numberInput.value);

    console.log(number);

    if(!number){
        alert('Enter a valid number.');
        return;
    }
    //generate the multiplication table
    generateTable(number);

})

function generateTable(number){
    const row =generateRow({number:number,rowNo:3});
    tableBody.appendChild(row);
}


function generateRow({number,rowNo}){
    const row=document.createElement('tr');

    const cells=[];
    for(let i=1;i<=5;i++){
        const cell=document.createElement('td');
        cells.push(cell);
    }
    cells[0].innerText=number;
    cells[1].innerText='*';
    cells[2].innerText=rowNo;
    cells[3].innerText='=';
    cells[4].innerText=number*rowNo;

    row.append(...cells);
}