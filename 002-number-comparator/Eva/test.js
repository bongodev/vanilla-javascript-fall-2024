const number1= document.getElementById("number1");
const number2 =document.getElementById("number2");
const compareButton =document.getElementById("compare");
const resetButton =document.getElementById("reset");
const result = document.getElementById("result");


compareButton.addEventListener('click' , compare);

function compare () {
  if(!isvalid())
  {
    return ;
  }

const Number1 = parseFloat(number1.value);
const Number2 = parseFloat(number2.value);

if(Number1> Number2)
  result.innerText=`${Number1} is bigger than ${Number2}`;

else if (Number1<Number2)
  result.innerText =`${Number1} is smaller than ${Number2}` ;

else
 result.innerText =`${Number1} is equal to ${Number2}` ;

}

resetButton.addEventListener('click' , function() {
  resetErrorStyles()
  number1.value='';
  number2.value ='';
  result.innerText='';
   
})

function isvalid() {
  if(!number1.value) {
    number1.classList.add('border-red-500');
    
    return false ;
  }
   
  if(!number2.value) {
    number2.classList.add('border-red-500');
    return false ;
  }
   
  return true ;
}

function resetErrorStyles() {
  number1.classList.remove('border-red-500');
  number2.classList.remove('border-red-500');
  
}

