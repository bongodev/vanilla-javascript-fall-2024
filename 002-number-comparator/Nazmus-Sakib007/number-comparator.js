const numberInput1 = document.getElementById("number1");
const numberInput2 = document.getElementById("number2");
const result = document.getElementById("result");


const  compareButton = document.getElementById("compare");
const resetButton = document.getElementById("reset");

compareButton.addEventListener('click', function (){
       
        const number1 = parseFloat(numberInput1.value);
        const number2 = parseFloat(numberInput2.value);

       if (number1 > number2) {
            result.innerText = "First number is larger."
       }else if (number1 < number2) {
            result.innerText = "Seconf number is larger."

       } else {
          result.innerText = "Both number are eqaul."
       }
});

 
resetButton.addEventListener('click', function () {
    numberInput1.value = 0;
    numberInput2.value = 0;
    result.innerHTML ="";
});