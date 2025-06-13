// Select elements
const generateBtn = document.getElementById("generate-btn");
const resetBtn = document.getElementById("reset-btn");
const topSection = document.getElementById("top-section");
const bottomSection = document.getElementById("bottom-section");

// Event listener for generating tables
generateBtn.addEventListener("click", function () {
  // Clear previous tables
  topSection.innerHTML = "";
  bottomSection.innerHTML = "";

  // Generate tables for numbers 1 to 10
  for (let i = 1; i <= 10; i++) {
    const table = createTable(i);
    if (i <= 5) {
      topSection.appendChild(table);
    } else {
      bottomSection.appendChild(table);
    }
  }

  console.log("Tables generated successfully!");
});

// Event listener for resetting tables
resetBtn.addEventListener("click", function () {
  topSection.innerHTML = "";
  bottomSection.innerHTML = "";
  console.log("Tables reset successfully!");
});

// Function to create a table
function createTable(n) {
  const table = document.createElement("table");
  const body = document.createElement("tbody");

  table.className = "bg-blue-100 table-auto w-full border border-gray-500";
  
  const caption = document.createElement("caption");
  caption.innerText = `Multiplication Table for ${n}`;
  caption.className =
    "text-lg text-gray-700 bg-blue-300 w-fit text-center px-3 py-1 rounded font-bold mb-2 mx-auto";
  
  table.appendChild(caption);

  for (let j = 1; j <= 10; j++) {
    const row = createRow(j, n);
    body.appendChild(row);
  }

  table.appendChild(body);
  return table;
}

// Function to create a row
function createRow(rowNum,num)
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