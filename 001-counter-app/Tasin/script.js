let counter=0;

const counterDisplay=document.getElementById('counter');
const decrementButton =document.getElementById('decrement');
const incrementButton =document.getElementById('increment');


function isLargerThanTen(number){
    /*if(number>10){
        return true;
    }else{
        return false;
    }*/
   return number > 10 ? true:false;
  
}

function increment(){
    if(counter===10){
        alert("Counter overflow");
        return;
    }
    counter++;
    counterDisplay.innerText=counter;
}

function increment(){
    alert("increment button has been clicked");
}

incrementButton.addEventListener("click",increment);

function decrement(){
    alert("decrement button has been clicked");
}

decrementButton.addEventListener("click",decrement);