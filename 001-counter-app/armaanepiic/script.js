let counterDiv = document.getElementById("counter");
let count = counterDiv.innerText;
let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
incrementButton.addEventListener('click', function () { count++; counterDiv.innerText = count; });
decrementButton.addEventListener('click', function () { count--; counterDiv.innerText = count; });
let resetButton = document.getElementById("reset");
resetButton.addEventListener('click', function () { count = 0; counterDiv.innerText = count; });

