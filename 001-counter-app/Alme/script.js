let flag=0;
const titlel=document.getElementById('title');
const incrementButton=document.getElementById('increment');
const decrementButton=document.getElementById('decrement'); 
const counterField=document.getElementById('counter');
const resetField=document.getElementById('reset');

titlel.innerText='Counter App';

function funcIncrement(){
    flag++;
    if(flag>15){
        alert('Your counter value has overflowed!!');
    }
    else{
        counterField.innerText=flag;
    } 
}

incrementButton.addEventListener('click',funcIncrement);

function funcDecrement(){
  flag--;
  if(flag<0){
    alert('Negative value appeared!!');
  }
  else{
    counterField.innerText=flag;
  }
  
}

decrementButton.addEventListener('click',funcDecrement);

function funcReset(){
    flag=0;
    counterField.innerText=0;
}

resetField.addEventListener('click',funcReset);

