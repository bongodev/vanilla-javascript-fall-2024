const numberInput = document.getElementById('input-number');
const generateBtn = document.getElementById('generate');
const tableBody = document.getElementById('table-body');


generateBtn.addEventListener('click', function(){
    const num = parseInt(numberInput.value);

    cleanTable();
    generateTable(num);
});

