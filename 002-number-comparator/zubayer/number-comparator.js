// Select elements by ID
const number1Input = document.getElementById("number1");
const number2Input = document.getElementById("number2");
const compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");
const result = document.getElementById("result");

const  ERROR_CLASS = 'border-red-500';
function resetErrorStyles(){
  number1Input.classList.remove(ERROR_CLASS);
  number2Input.classList.remove(ERROR_CLASS);
}

function isValidInput(){
  resetErrorStyles();

    if(!number1Input.value){
        number1Input.classList.add(ERROR_CLASS);
        return false;
    }
    if(!number2Input.value){
      number2Input.classList.add(ERROR_CLASS);
      return false;
    }
    return true;
}

// Add event listener for the Compare button
compareButton.addEventListener('click', function () {
  if(!isValidInput()){
    return;
  }
    const number1 = parseFloat(number1Input.value);
    const number2 = parseFloat(number2Input.value);

  if (number1 > number2) {
    result.innerText = "First Number is larger";
  } else if (number1 < number2) {
    result.innerText = "Second Number is larger";
  } else {
    result.innerText = "Both numbers are equal";
  }
});

resetButton.addEventListener('click', function(){
    number1.value = '0';
    number2.value = '0';
    result.innerText = '';
    resetErrorStyles();

});