// const numberInput1 = document.getElementById('number1');
// const numberInput2 = document.getElementById('number2');
// const compareButton = document.getElementById('compare');
// const resetButton = document.getElementById('reset');
// const result = document.getElementById('result');

// const ERROR_CLASS = 'border-red-500';
// console.log(number1);
// function resetErrorStyles() {
//   numberInput1.classList.remove(ERROR_CLASS);
//   numberInput2.classList.remove(ERROR_CLASS);
// }

// function isValidInput() {
//   resetErrorStyles();

//   if (!numberInput1.value) {
//     numberInput1.classList.add(ERROR_CLASS);
//     return false;
//   }
//   if (!numberInput2.value) {
//     numberInput2.classList.add(ERROR_CLASS);
//     return false;
//   }

//   return true;
// }

// compareButton.addEventListener('click', function () {
//   if (!isValidInput()) {
//     return;
//   }

//   const number1 = parseFloat(numberInput1.value);
//   const number2 = parseFloat(numberInput2.value);

//   if (number1 > number2) {
//     result.innerText = 'First number is bigger';
//   } else if (number1 < number2) {
//     result.innerText = 'Second number is bigger';
//   } else {
//     result.innerText = 'Both numbers are equal';
//   }
// });

// resetButton.addEventListener('click', function () {
//   numberInput1.value = '0';
//   numberInput2.value = '0';
//   result.innerText = '';
//   resetErrorStyles();
// });


const numberInput1= document.getElementById('number1');
const numberInput2= document.getElementById('number2');
const resetButton =document.getElementById('reset');
const compareButton= document.getElementById('compare');
const result= document.getElementById('result');

const Error_msg = 'border-red-500';

function resetHover()
{
  compareButton.style.backgroundColor='';
  resetButton.style.backgroundColor='';
}
compareButton.addEventListener('mouseover',function()
{
  compareButton.style.backgroundColor='#4CAF50';
  compareButton.style.color='white';
}
);

compareButton.addEventListener('mouseout',function()
{
  resetHover();
}
);

resetButton.addEventListener('mouseover',function()
{
  resetButton.style.backgroundColor='#4CAF50';
  resetButton.style.color='white';
}
);

resetButton.addEventListener('mouseout',function()
{
  resetHover();
}
);


function Error_detection ()
{
  numberInput1.classList.remove(Error_msg);
  numberInput2.classList.remove(Error_msg);
  return ;
}


function extra1()
{
  result.innerText='Please Enter First Value ';
  
}

function extra2()
{
  result.innerText='Please Enter Second Value ';
  
}


function isvalidnumber()
{
  Error_detection();
  if(!numberInput1.value)
  {
    numberInput1.classList.add(Error_msg);
    extra1();
    return false;
  }
  if(!numberInput2.value)
  {
    numberInput2.classList.add(Error_msg);
    extra2();
    return false;
  }
  return true;
}

console.log(number1);
compareButton.addEventListener('click' , function ()
{
  if(!isvalidnumber()){
    return;
}
  const number1 = parseFloat(numberInput1.value);
  const number2 = parseFloat(numberInput2.value);

   if(number1>number2)
   {
    result.innerText='First Input Number is Bigger';
   }
   else if(number1<number2)
   {
    result.innerText='Second Input Number is Bigger';
   }
   else 
   {
    result.innerText='Both Numbers are Equal';
   }


});



resetButton.addEventListener('click', function()
{
  Error_detection();
    numberInput1.value='';
    numberInput2.value='';
    result.innerText=' ';
    console.log("nazmussakib reset");
}


);