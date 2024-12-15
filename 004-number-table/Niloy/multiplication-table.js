const numberInput = document.getElementById("input-number");
const generateBtn = document.getElementById("generate");
const tableBody = document.getElementById("table-body");

const generatedBtnHandler = () => {
  const num = parseInt(numberInput.value);
  tableBody.innerHTML = '';

  for (let rowNo = 1; rowNo <= 10; rowNo++) {
        const cells = [num, 'x', rowNo, '=', num*rowNo];
        const tableRow = document.createElement('tr');

        cells.forEach((data) => {
            const cell = document.createElement('td');
            cell.innerText=data;
            tableRow.appendChild(cell);
            
        });
        tableBody.appendChild(tableRow);
  }
};

generateBtn.addEventListener("click", generatedBtnHandler);
