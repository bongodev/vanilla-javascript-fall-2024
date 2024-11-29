const numberInput1 = document.getElementById('number1');
const numberInput2 = document.getElementById('number2');
const compareButton = document.getElementById('compare');
const resetButton = document.getElementById('reset');
const result = document.getElementById('result');

compareButton.addEventListener('click', function () {
  const number1 = parseFloat(numberInput1.value);
  const number2 = parseFloat(numberInput2.value);

  if (number1 > number2) {
    result.innerText = 'First number is bigger';
  } else if (number1 < number2) {
    result.innerText = 'Second number is bigger';
  } else {
    result.innerText = 'Both numbers are equal';
  }
});

resetButton.addEventListener('click', function () {
  numberInput1.value = '0';
  numberInput2.value = '0';
  result.innerText = '';
});
