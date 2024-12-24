const inputNumber= document.getElementById('input-number');
const generateTable= document.getElementById('generate');
const tableBody= document.getElementById('table-body');
const reset=document.getElementById('reset');

const Error_msg = "border-red-500";

function resetHover() {
  generateTable.style.backgroundColor = "";
  reset.style.backgroundColor = "";
}
generateTable.addEventListener("mouseover", function () {
  generateTable.style.backgroundColor = "#4CAF50";
  generateTable.style.color = "white";
});

generateTable.addEventListener("mouseout", function () {
  resetHover();
});

reset.addEventListener("mouseover", function () {
  reset.style.backgroundColor ="#FF0000";
  reset.style.color = "white";
});

reset.addEventListener("mouseout", function () {
  resetHover();
});

function Error_detection() {
  inputNumber.classList.remove(Error_msg);

  return;
}


function isvalidnumber() {
    Error_detection();
    if (!inputNumber.value) {
      inputNumber.classList.add(Error_msg);
      alert('Please Enter a Number');
      return false;
    }
  
    return true;
  }
  

reset.addEventListener('click',function()
{
    tableBody.innerHTML='';
    inputNumber.value='';
    Error_detection();
})

generateTable.addEventListener('click',function()
{
    
    if (!isvalidnumber()) {
        return;
      }
    const num= parseInt(inputNumber.value);
    
  
    
    cleanTable();
    createTable(num);
   
})


function cleanTable()
{
    tableBody.innerHTML=' ';
   
      Error_detection();
 
}
function createTable(num)
{
    for(let rowNo=1 ;rowNo<=10;rowNo++)
    {
        const tableRow=getRow(num,rowNo);
        tableBody.appendChild(tableRow);
    }
}

function getRow(num,mult)
{
    const cells=[];
    for(let i=1;i<=5;i++)
    {
        const cell=document.createElement('td');
        cells.push(cell);
    }
   

    cells[0].innerText=num;
    cells[1].innerText= ' X ';
    cells[2].innerText= mult;
    cells[3].innerText= ' = ';
    cells[4].innerText= num*mult;

    const tableRow= document.createElement('tr');
    for(let i=0;i<cells.length;i++)
    {
        tableRow.appendChild(cells[i]);
    }

   
    
    return tableRow;

}