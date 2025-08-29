const inputNumber = document.getElementById("input-number");
const generateButton = document.getElementById("generate");
const tableBody = document.getElementById("table-body");
const resetButton = document.getElementById("reset");

generateButton.addEventListener("click", generateTable);
resetButton.addEventListener("click", resetFunction);

function generateTable() {
    if(inputNumber.value === "") {
        alert("Please enter a number");
        return;
    }
    tableBody.innerHTML = ""; 
    const number = parseInt(inputNumber.value);
    for(let i = 1; i <= 10; i++){
        const tableRow = generateRow({number, i});
        tableBody.appendChild(tableRow);
    }
}

function generateRow({number, i}){
    const row = document.createElement("tr");
    
    const cells = [number, "*", i, "=", number * i];
    for(let j = 0; j < 5; j++){
        const cell = document.createElement("td");
        cell.innerText = cells[j];
        row.append(cell);
    }
    return row;
}
    
function resetFunction() {
    inputNumber.value = "";
    tableBody.innerHTML = "";
    inputNumber.focus();
}