let counter=0;

const counterDisplay=document.getElementById('counter');
const decrementButton =document.getElementById('decrement');
const incrementButton =document.getElementById('increment');
const resetButton = document.getElementById('reset');

function displayCounter(){

    counterDisplay.innerHTML=counter;
}

function increment() {
  if (counter === 10) {
    alert("Overflow");
    return;
  }

  counter++;
  displayCounter();
}




function decrement(){
    if(counter ===0){
        alert("Number will be negative!");
        return;
    }
    counter--;
    displayCounter();
}



function reset(){
    counter =0;
    displayCounter();
}


incrementButton.addEventListener("click",increment);
decrementButton.addEventListener("click",decrement);
resetButton.addEventListener("click",reset);