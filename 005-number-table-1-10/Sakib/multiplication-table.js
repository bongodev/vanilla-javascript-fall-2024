const generatebtn= document.getElementById('generate');
const  tableContainerBottomRow= document.getElementById('bottom-row');
const tableContainerupperRow= document.getElementById('top-row');
const reset=document.getElementById('reset');

reset.addEventListener('click',function()
{
    tableContainerBottomRow.innerText='';
    tableContainerupperRow.innerText='';
})

function clear()
{
    tableContainerBottomRow.innerHTML='';
    tableContainerupperRow.innerHTML='';
}

generatebtn.addEventListener('click',function()
{
    clear();
    for(let p=1;p<=10;p++)
    {
        if(p<=5)
        {
            const uppertable= gettable(p);
    tableContainerupperRow.appendChild(uppertable);
    
        }
        else
        {
            const lowtable= gettable(6);
    tableContainerBottomRow.appendChild(lowtable);
   
        }
    }
    
    
});

function gettable(num)
{
    
    const tableCreation= document.createElement('table');
    const tableBody= document.createElement('tbody');
    tableCreation.className = 'bg-amber-100  table-auto w-full border border-slate-700';
    // Style(num,tableCreation);

   

    const tableCaption = document.createElement('caption');
  tableCaption.innerText = `Number Table for ${num}`;
  tableCaption.className =
    'text-lg text-amber-600 bg-gray-300 w-fit text-center px-1 rounded-sm font-bold mb-1 mx-auto';
    tableCreation.appendChild(tableCaption);
    for(let rowNum= 1;rowNum<=10;rowNum++)
    {
        const tableRow= getRow(rowNum,num);
        tableBody.appendChild(tableRow);
    }
    tableCreation.appendChild(tableBody);
    return tableCreation;
}

function getRow(rowNum,num)
{
    const cells=[];
    for(let i=0;i<5;i++ )
        {
            const cell= document.createElement('td');
            cells.push(cell);
            
        }
        cells[0].innerText=num;
        cells[1].innerText=' X ';
        cells[2].innerText=rowNum;
        cells[3].innerText=' = ';
        cells[4].innerText=num*rowNum;
        const createdRow= document.createElement('tr');
   
   for(let j=0;j<cells.length;j++)
   {
    createdRow.appendChild(cells[j]);
    
   }
   return createdRow;
}
// function Style(num,tableCreation)
// {
//     if (num % 2 === 0) {
//         tableCreation.classList.add('bg-blue-200');
        
//       } else {
//         tableCreation.classList.add('bg-green-200');
//       }
// }