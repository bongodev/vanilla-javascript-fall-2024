
const numberInput1= document.getElementById('number1');
const numberInput2= document.getElementById('number2');
const resetButton =document.getElementById('reset');
const compareButton= document.getElementById('compare');
const result= document.getElementById('result');

const Error_msg = 'border-red-900';

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