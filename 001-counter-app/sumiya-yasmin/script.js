const counterElement= document.getElementById('counter');
const incrementButton= document.getElementById('increment');
const decrementButton= document.getElementById('decrement');
const resetButton= document.getElementById('reset');
let count=0;
function increaseCount(){
    count=count+1;
    counterElement.innerText=count;
}
incrementButton.addEventListener('click', increaseCount);

function decreaseCount(){
    count=count-1;
    counterElement.innerText=count;
}
decrementButton.addEventListener('click', decreaseCount);

function resetCount(){
    count=0;
    counterElement.innerText=count;
}
resetButton.addEventListener('click', resetCount);
