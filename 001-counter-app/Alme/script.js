let flag=0;
const titlel=document.getElementById('title');
titlel.innerText='Counter App';
const incrementButton=document.getElementById('increment');
const decrementButton=document.getElementById('decrement'); 
const counterField=document.getElementById('counter');

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
const resetField=document.getElementById('reset');
function funcReset(){
    flag=0;
    counterField.innerText=0;
}
resetField.addEventListener('click',funcReset);
decrementButton.addEventListener('click',funcDecrement);
