// Getting input from the user
const numberTableInput = document.getElementById('input-number');
const buttonGenerate = document.getElementById('generate');

// Table body
const tableBody = document.getElementById('table-body');

//input validity check
function checkValidity(number) {
  const isValid = !isNaN(parseInt(number));
  return isValid;
}

//clearing the input for any previous values
function clearPreviousInputs() {
  tableBody.innerHTML = '';
  tableBody.classList.remove('bg-red-400');
  tableBody.classList.remove('text-white');
  numberTableInput.classList.remove('border-red-400');
}

//function for showing errors
function showError() {
  tableBody.innerText = 'Enter a valid number';
  tableBody.classList.add('bg-red-400');
  tableBody.classList.add('text-white');
  numberTableInput.classList.add('border-red-400');
}

//logic for generating table
function multiplicationLogic(inputNumber) {
  // Generating table rows and cells
  const tableRow = document.createElement('tr');
  const cells = [];

  // Adding flex and flex-col classes to table row
  tableRow.classList.add('flex');
  tableRow.classList.add('flex-col');

  // Loop to create number table
  for (i = 1; i <= 10; i++) {
    const cell = document.createElement('td');
    cell.classList.add('border');
    cell.innerText = `${inputNumber} X ${i} = ${inputNumber * i}`;
    cells.push(cell);
  }

  // Appending cells to the row and row to the table body
  tableRow.append(...cells);
  tableBody.appendChild(tableRow);
}

// Generate Number Table
function generateNumberTable() {
  const inputNumber = parseInt(numberTableInput.value);
  const isValid = checkValidity(inputNumber);

  //Resetting it before going further
  clearPreviousInputs();

  // If not a number it will ask user to enter a valid number
  if (isValid) {
    multiplicationLogic(inputNumber);
  } else {
    showError();
  }
}

buttonGenerate.addEventListener('click', generateNumberTable);
