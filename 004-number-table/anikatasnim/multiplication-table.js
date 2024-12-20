const generateBtn = document.getElementById('generate');
const resetbtn = document.getElementById('reset');
const tableDiv = document.getElementById('table-container');
const tableBody = document.getElementById('table-body');
const numIn = document.getElementById('input-number');
const errorMessage = document.getElementById('error-message')
generateBtn.addEventListener('click',function (){
    let num = parseInt(numIn.value);
    showError(num);
    cleantable();
    generateTable(num);
});

function cleantable (){
    tableBody.innerHTML = '';
}

function generateTable (number){
    for(let row=1;row<=10;row++){
        const tableRow = generateRow(number,row);
        tableBody.appendChild(tableRow);
    }
}
function generateRow(number, row) {
    const cells = [];
    for (let i = 0; i < 5; i++) {
        const cell = document.createElement('td');
        cell.classList.add('border', 'border-green-500', 'px-4', 'py-2', 'text-center');
        cells.push(cell);
    }

    const elements = [number, ' x ', row, ' = ', number * row];

    for (let i = 0; i < 5; i++) {
        cells[i].textContent = elements[i];
    }

    const tableRow = document.createElement('tr');
    tableRow.classList.add('border', 'border-green-400');
    for (let i = 0; i < cells.length; i++) {
        tableRow.appendChild(cells[i]);
    }

    return tableRow;
}
function showError(num){
    errorMessage.innerText = ""
    errorMessage.classList.add("hidden")

    if (isNaN(num)) {
       cleantable();
        errorMessage.innerText = "Please enter a valid number!"
        errorMessage.classList.remove("hidden")
        errorMessage.classList.add('border-2', 'border-black','p-1');
        resultDiv.innerText = ""
        return;
    }
    if (num < 0) {
        cleantable();
        errorMessage.innerText = "Number must be positive"
        errorMessage.classList.remove("hidden")
        errorMessage.classList.add('border-2', 'border-black','p-1');
        resultDiv.innerText = ""
        return;
    }
   
}
resetbtn.addEventListener('click',function (){
    cleantable();
    numIn.value= '';
    errorMessage.innerText = ""
    errorMessage.classList.add("hidden")
});