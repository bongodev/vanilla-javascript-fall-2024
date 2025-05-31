const input = document.getElementById('input-number');
const generateTable = document.getElementById('generate');
const tableBody = document.getElementById('table-body');
const reset = document.getElementById('reset-btn');

const Error = "border-red-800";

function validnum() {
    if (!input.value) {
        input.classList.add(Error);
        alert('Please Enter a Number');
        return false;
    }
    input.classList.remove(Error);  // Remove error class if input is valid
    return true;
}

generateTable.addEventListener('click', function() {
    // Clear previous content first
    tableBody.innerHTML = '';
    
    if(!validnum()) return;  // Check validation first
    
    const num = parseInt(input.value);
    createTable(num);
})

function createTable(n) {
    for(let i=1; i<=10; i++) {
        const row = createRow(n, i);
        tableBody.appendChild(row);
    }
}

function createRow(n, i) {
    const column_value = [];
    for(let j=0; j<5; j++) {
        const data = document.createElement('td');
        data.className = 'border border-slate-700 p-2';
        column_value.push(data);
    }
    
    column_value[0].innerText = n;
    column_value[1].innerText = ' X ';
    column_value[2].innerText = i;
    column_value[3].innerText = ' = ';
    column_value[4].innerText = n*i;

    const tableRow = document.createElement('tr');
    for(let k=0; k<column_value.length; k++) {
        tableRow.appendChild(column_value[k]);
    }
    return tableRow;
}

reset.addEventListener('click', function() {
    tableBody.innerHTML = '';
    input.value = '';
    input.classList.remove(Error);
});