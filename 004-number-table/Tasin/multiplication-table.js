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

    //clear the previous table rows
    tableBody.innerHTML='';

    //generate the new table rows
    for(let rowNo=1;rowNo<=10;rowNo++){
        const row = generateRow({number,rowNo})
        tableBody.appendChild(row);
    }
}

function generateRow({number,rowNo}){
    const row=document.createElement('tr');

    const cells=[];
    const rowData =[number,'*',rowNo,'=',number*rowNo];

    for(let i=0;i < rowData.length; i++){
        const cell=document.createElement('td');
        cell.innerText=rowData[i];
        cells.push(cell);
    }

    row.append(...cells);

    return row;
}