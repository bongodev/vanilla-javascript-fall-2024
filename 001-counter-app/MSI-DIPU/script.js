let counter = 0;
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement")
const displayCount = document.getElementById("counter");
const resetBtn = document.getElementById("reset");

function incrementCounter(){
    if(counter==10){
        alert("Overflow")
        return;
    }
    counter++;
    displayCount.innerText = counter;
}

function decrementCounter(){

    if(counter<=0){
        alert("Underflow");
        counter = 0;
        return;
    }
    counter--;
    displayCount.innerText = counter;
    
}

function reset(){

    displayCount.innerText = 0;
    
}

incrementBtn.addEventListener('click', incrementCounter);
decrementBtn.addEventListener('click', decrementCounter);
resetBtn.addEventListener("click", reset)

