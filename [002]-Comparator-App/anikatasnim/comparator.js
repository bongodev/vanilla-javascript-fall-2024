// Select DOM elements
const compareButton = document.getElementById('compare'); // Compare button
const resetButton = document.getElementById('reset'); // Reset button
const firstNumberInput = document.getElementById('number1'); // Input for the first number
const secondNumberInput = document.getElementById('number2'); // Input for the second number
const resultPrint = document.getElementById('result'); // Div to display the result

// Function to compare numbers
function compareNumbers() {
    // Get the latest values from the input fields
    const firstNumber = parseFloat(firstNumberInput.value);
    const secondNumber = parseFloat(secondNumberInput.value);

    // Compare the numbers and update the result
    if (firstNumber > secondNumber) {
        resultPrint.textContent = "The first number is larger.";
    } else if (firstNumber < secondNumber) {
        resultPrint.textContent = "The second number is larger.";
    } else {
        resultPrint.textContent = "The numbers are equal.";
    }
}

// Function to reset the inputs and result
function resetFields() {
    firstNumberInput.value = ''; // Clear the first input field
    secondNumberInput.value = ''; // Clear the second input field
    resultPrint.textContent = ''; // Clear the result display
}

// Attach click event listener to the Compare button
compareButton.addEventListener('click', compareNumbers);

// Attach click event listener to the Reset button
resetButton.addEventListener('click', resetFields);
